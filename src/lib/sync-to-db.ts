/* eslint-disable @typescript-eslint/no-explicit-any */
//the main file of the project
//writing the emails to the database
import { log } from "console";
import type { EmailAddress, EmailAttachment, EmailMessage } from "./types";
import { db } from "@/server/db";
import { OramaManager } from "./orama";
import { turndown } from "./turndown";
import { getEmbeddings } from "./embedding";

//p-limit stands for promise limit, acts a rate limiter 
//for db calls , to prevent overloading
export const syncEmailsToDb= async (emails:EmailMessage[],accountId:string)=>{
    log('Attempting ot sync ',emails.length,'emails')
    
    const orama = new OramaManager(accountId)
    await orama.initialize()

    try {
        // Promise.all(emails.map((email,index)=>upsertEmail(email,accountId,index)))
        for(const email of emails){
            const body = turndown.turndown(email.body ?? email.bodySnippet ?? '')
            const embeddings = await getEmbeddings(body)
            await orama.insert({
                subject: email.subject,
                body:body,
                from:email.from.address,
                rawBody:email.bodySnippet??"",
                to:email.to.map(t=>t.address),
                sentAt:email.sentAt.toLocaleString(),
                threadId:email.threadId,
                embeddings
            })
            await upsertEmail(email,accountId,emails.indexOf(email))
        }
    } catch (error) {
        console.error("Error:",error)
    }
}

export const upsertEmail = async (email:EmailMessage,accountId:string,index:number)=>{
    console.log('Upserting email:',index)
    
    try{
    let emailLabelType:'inbox'|'sent'|'draft' = 'inbox'
    
    if(email.sysLabels.includes('inbox')||email.sysLabels.includes('important')){
        emailLabelType='inbox'
    }
    else if(email.sysLabels.includes('draft')){
        emailLabelType='draft'
    }
    else if(email.sysLabels.includes('sent')){
        emailLabelType='sent'
    }
    
    const addressesToUpsert  = new Map()
    for(const address of [email.from,...email.to,...email.cc,...email.bcc,...email.replyTo]){
        addressesToUpsert.set(address.address,address)
    }

    //it stores the address in the form of the return type/structure
    //of the promise we get from the function upsertEmailAddress
    //in the awaited form
    const updsertedAddresses:(Awaited<ReturnType<typeof upsertEmailAddress>>)[] = []

    for(const address of addressesToUpsert.values()){
        const updsertedAddress = await upsertEmailAddress(address,accountId)
        updsertedAddresses.push(updsertedAddress)
    }

    const addressMap = new Map(
        updsertedAddresses.filter(Boolean).map(address=>[address!.address,address])
    )

    const fromAddress = addressMap.get(email.from.address)
    if(!fromAddress){
        console.error('From address not found')
        return
    }
    const toAddresses = email.to.map(address=>addressMap.get(address.address)).filter(Boolean)
    const ccAddresses = email.cc.map(address=>addressMap.get(address.address)).filter(Boolean)
    const bccAddresses = email.bcc.map(address=>addressMap.get(address.address)).filter(Boolean)
    const replyToAddresses = email.replyTo.map(address=>addressMap.get(address.address)).filter(Boolean)

    //upserting threads
    const thread = await db.thread.upsert({
        where:{id:email.threadId},
        update:{
            subject:email.subject,
            accountId,
            lastMessageDate:new Date(email.sentAt),
            done:false,
            participantIds:[...new Set([
                fromAddress.id,
                ...toAddresses.map(address=>address!.id),
                ...ccAddresses.map(address=>address!.id),
                ...bccAddresses.map(address=>address!.id)
            ])]
        },
        create:{
            id:email.threadId,
            accountId,
            subject:email.subject,
            done:false,
            draftStatus:emailLabelType === 'draft',
            inboxStatus:emailLabelType === 'inbox',
            sentStatus:emailLabelType === 'sent',
            lastMessageDate:new Date(email.sentAt),
            participantIds:[...new Set([
                fromAddress.id,
                ...toAddresses.map(address=>address!.id),
                ...ccAddresses.map(address=>address!.id),
                ...bccAddresses.map(address=>address!.id)
            ])]
        }
    })

    //upserting emails
    await db.email.upsert({
            where: { id: email.id },
            update: {
                threadId: thread.id,
                createdTime: new Date(email.createdTime),
                lastModifiedTime: new Date(),
                sentAt: new Date(email.sentAt),
                receivedAt: new Date(email.receivedAt),
                internetMessageId: email.internetMessageId,
                subject: email.subject,
                sysLabels: email.sysLabels,
                keywords: email.keywords,
                sysClassifications: email.sysClassifications,
                sensitivity: email.sensitivity,
                meetingMessageMethod: email.meetingMessageMethod,
                fromId: fromAddress.id,
                to: { set: toAddresses.map(a => ({ id: a!.id })) },
                cc: { set: ccAddresses.map(a => ({ id: a!.id })) },
                bcc: { set: bccAddresses.map(a => ({ id: a!.id })) },
                replyTo: { set: replyToAddresses.map(a => ({ id: a!.id })) },
                hasAttachments: email.hasAttachments,
                internetHeaders: email.internetHeaders as any,
                body: email.body,
                bodySnippet: email.bodySnippet,
                inReplyTo: email.inReplyTo,
                references: email.references,
                threadIndex: email.threadIndex,
                nativeProperties: email.nativeProperties as any,
                folderId: email.folderId,
                omitted: email.omitted,
                emailLabel: emailLabelType,
            },
            create: {
                id: email.id,
                emailLabel: emailLabelType,
                threadId: thread.id,
                createdTime: new Date(email.createdTime),
                lastModifiedTime: new Date(),
                sentAt: new Date(email.sentAt),
                receivedAt: new Date(email.receivedAt),
                internetMessageId: email.internetMessageId,
                subject: email.subject,
                sysLabels: email.sysLabels,
                internetHeaders: email.internetHeaders as any,
                keywords: email.keywords,
                sysClassifications: email.sysClassifications,
                sensitivity: email.sensitivity,
                meetingMessageMethod: email.meetingMessageMethod,
                fromId: fromAddress.id,
                to: { connect: toAddresses.map(a => ({ id: a!.id })) },
                cc: { connect: ccAddresses.map(a => ({ id: a!.id })) },
                bcc: { connect: bccAddresses.map(a => ({ id: a!.id })) },
                replyTo: { connect: replyToAddresses.map(a => ({ id: a!.id })) },
                hasAttachments: email.hasAttachments,
                body: email.body,
                bodySnippet: email.bodySnippet,
                inReplyTo: email.inReplyTo,
                references: email.references,
                threadIndex: email.threadIndex,
                nativeProperties: email.nativeProperties as any,
                folderId: email.folderId,
                omitted: email.omitted,
            }
        });

        const threadEmails = await db.email.findMany({
            where:{threadId:thread.id},
            orderBy:{receivedAt:"asc"}
        })
        let threadFolderType = 'sent';
        for (const threadEmail of threadEmails) {
            if (threadEmail.emailLabel === 'inbox') {
                threadFolderType = 'inbox';
                break; // If any email is in inbox, the whole thread is in inbox
            } else if (threadEmail.emailLabel === 'draft') {
                threadFolderType = 'draft'; // Set to draft, but continue checking for inbox
            }
        }
        await db.thread.update({
            where: { id: thread.id },
            data: {
                draftStatus: threadFolderType === 'draft',
                inboxStatus: threadFolderType === 'inbox',
                sentStatus: threadFolderType === 'sent',
            }
        });

        for(const attachment of email.attachments){
            await upsertAttachment(email.id,attachment)
        }

    }catch(error){
        console.error("Error:",error)
    }
}

async function upsertEmailAddress(address:EmailAddress,accountId:string){
    try {
        const existingAddress = await db.emailAddress.findUnique({
            where:{
                accountId_address:{
                    accountId:accountId,
                    address:address.address ?? ""
                }
            }
        })

        if(existingAddress){
            return await db.emailAddress.update({
                where:{
                    id:existingAddress.id
                },
                data:{
                    name:address.name ?? "",
                    address:address.address ?? ""
                }
            })
        }else{
            return await db.emailAddress.create({
                data:{
                    address:address.address ?? "",
                    name:address.name ?? "",
                    raw:address.raw ?? "",
                    accountId
                }
            })
        }
    } catch (error) {
        console.error("Error:",error)
        return null
    }
}

async function upsertAttachment(emailId: string, attachment: EmailAttachment) {
    try {
        await db.emailAttachment.upsert({
            where: { id: attachment.id ?? "" },
            update: {
                name: attachment.name,
                mimeType: attachment.mimeType,
                size: attachment.size,
                inline: attachment.inline,
                contentId: attachment.contentId,
                content: attachment.content,
                contentLocation: attachment.contentLocation,
            },
            create: {
                id: attachment.id,
                emailId,
                name: attachment.name,
                mimeType: attachment.mimeType,
                size: attachment.size,
                inline: attachment.inline,
                contentId: attachment.contentId,
                content: attachment.content,
                contentLocation: attachment.contentLocation,
            },
        });
    } catch (error) {
        console.log(`Failed to upsert attachment for email ${emailId}: ${error}`);
    }
}
