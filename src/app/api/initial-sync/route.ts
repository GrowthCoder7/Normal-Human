import { Account } from "@/lib/account";
import { db } from "@/server/db";
import { log } from "console";
import { NextResponse, type NextRequest } from "next/server";

export const POST = async(req: NextRequest) => {
    const {accountId,clerkId} = await req.json()
    if(!accountId || !clerkId) return new Response("Missing accountId or clerkId", {status:400})
    
    const dbAccount = await db.account.findUnique({
        where:{
            id:accountId,
            userId:clerkId
        }
    })

    if(!dbAccount) return new Response("Account not found", {status:404})
    
    const account = new Account(dbAccount.accessToken)

    const res = await account.performInitialSync()
    if(!res) return NextResponse.json({error:"Failed to sync emails"},{status:500})
    
    const {emails,deltaToken} = res
    log('Emails',emails)
    // await db.account.update({
    //     where:{
    //         id:accountId
    //     },
    //     data:{
    //         nextDeltaToken:deltaToken
    //     }
    // })

    // await syncEmailsToDb(emails)

    log('Sync completed',deltaToken)
    return NextResponse.json({success:true},{status:200})
}