import z from "zod";
import { createTRPCRouter, privateProcedure } from "../trpc";
import { db } from "@/server/db";
import type { Prisma } from "generated/prisma";
import { emailAddressSchema } from "@/lib/types";
import { threadId } from "worker_threads";
import { Account } from "@/lib/account";

export const authorizeAccountAccess = async (accountId:string,userId:string)=>{
  const account=await db.account.findFirst({
    where:{
      id:accountId,
      userId:userId
    }, select:{
      id:true,emailAddress:true,name:true,accessToken:true
    }
  })
  if(!account) throw new Error("Account not found")
  return account
}

export const accountRouter = createTRPCRouter({
  getAccounts : privateProcedure.query(async ({ctx}) =>{
    return await ctx.db.account.findMany({
      where: {
        userId: ctx.auth.userId
      },
      select:{
        id:true,name:true,emailAddress:true
      }
    })
  })
,
  getNumThreads:privateProcedure.input(z.object({
    accountId:z.string(),
    tab:z.string()
  })).query(async ({ctx,input})=>{
    const account = await authorizeAccountAccess(input.accountId,ctx.auth.userId)
    
    let filter : Prisma.ThreadWhereInput={}
    if(input.tab==="inbox") filter.inboxStatus=true
    else if(input.tab==="drafts") filter.draftStatus=true
    else if(input.tab==="sent") filter.sentStatus=true
    
    return await ctx.db.thread.count({
      where:{
        accountId:account.id,
        ...filter
      }
    })
  }),
  
  getThread:privateProcedure.input(z.object({
    accountId:z.string(),
    tab:z.string(),
    done:z.boolean()
  })).query(async ({ctx,input})=>{
    const account = await authorizeAccountAccess(input.accountId,ctx.auth.userId)
    const acc = new Account(account.accessToken)
    acc.syncEmails().catch(console.error)

    let filter : Prisma.ThreadWhereInput={}
    if(input.tab==="inbox") filter.inboxStatus=true
    else if(input.tab==="drafts") filter.draftStatus=true
    else if(input.tab==="sent") filter.sentStatus=true

    filter.done={
      equals:input.done
    }

    const threads = await ctx.db.thread.findMany({
      where:filter,
      include:{
        emails:{
          orderBy:{
            sentAt:"asc"
          },
          select:{
            from:true,
            body:true,
            bodySnippet:true,
            emailLabel:true,
            subject:true,
            sysLabels:true,
            id:true,
            sentAt:true
          },
        },
      },take:15,
      orderBy:{
        lastMessageDate:"desc"
      }
    })
    return threads
  })
,
  getSuggestions:privateProcedure.input(z.object({
    accountId:z.string(),
  })).query(async ({ctx,input})=>{
    const account = await authorizeAccountAccess(input.accountId,ctx.auth.userId)
    return await ctx.db.emailAddress.findMany({
      where:{
        accountId:account.id
      },
      select:{
        address:true,
        name:true
      }
    })
  })
,
  getReplyDetails:privateProcedure.input(z.object({
    accountId:z.string(),
    threadId:z.string(),
  })).query(async ({ctx,input})=>{
    const account = await authorizeAccountAccess(input.accountId,ctx.auth.userId)
    const thread = await ctx.db.thread.findFirst({
      where:{
        id:input.threadId
      },
      include:{
        emails:{
          orderBy:{
            sentAt:"asc"
          },
          select:{
            from:true,
            to:true,
            cc:true,
            bcc:true,
            subject:true,
            sentAt:true,
            internetMessageId:true
          }
        }
      }
    })
    if(!thread||thread.emails.length===0) throw new Error("Thread not found")
    
    const lastExternalEmail = thread.emails.reverse().find(email=>email.from.address!==account.emailAddress)
    if(!lastExternalEmail) throw new Error("No external email found")

    return{
      subject:lastExternalEmail.subject,
      to:[lastExternalEmail.from, ...lastExternalEmail.to.filter(to=>to.address !== account.emailAddress)],
      cc: lastExternalEmail.cc.filter(cc=>cc.address !== account.emailAddress),
      from:{
        name:account.name,
        address:account.emailAddress
      },
      id:lastExternalEmail.internetMessageId
    }
  }),

  sendEmail:privateProcedure.input(z.object({
    accountId:z.string(),
    body:z.string(),
    subject:z.string(),
    from:emailAddressSchema,
    cc:z.array(emailAddressSchema).optional(),
    bcc:z.array(emailAddressSchema).optional(),
    to:z.array(emailAddressSchema),
    replyTo:z.string().optional(),
    inReplyTo:z.string().optional(),
    threadId:z.string()
  })).mutation(async ({ctx,input})=>{
    const account = await authorizeAccountAccess(input.accountId,ctx.auth.userId)
    const acc = new Account(account.accessToken)
    await acc.sendEmail({
      from:input.from,
      subject:input.subject,
      body:input.body,
      inReplyTo:input.inReplyTo,
      threadId:input.threadId,
      to:input.to,
      cc:input.cc,
      bcc:input.bcc
    })
  })

})