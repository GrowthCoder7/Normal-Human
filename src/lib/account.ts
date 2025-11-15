import axios from "axios";
import { log } from "console";
import type { EmailAddress, EmailMessage, SyncResponse, SyncUpdatedResponse } from "./types";

export class Account{
    private token:string;

    constructor(token:string){
        this.token = token;
    }

    private async startSync(){
        const res = await axios.post<SyncResponse>('https://api.aurinko.io/v1/email/sync',{},{
            headers:{
                Authorization:`Bearer ${this.token}`
            },
            params:{
                daysWithin:2,
                bodyType:'html'
            }
        })
        return res.data
    }

    private async getUpdatedEmails({deltaToken,pageToken}:{deltaToken:string,pageToken?:string}){
        let params: Record <string, string> = {}
        if(deltaToken) params.deltaToken = deltaToken
        if(pageToken) params.pageToken = pageToken

        const res = await axios.get<SyncUpdatedResponse>('https://api.aurinko.io/v1/email/sync/updated',{
            headers:{
                Authorization:`Bearer ${this.token}`
            },
            params
        })
        return res.data
    }

    async performInitialSync(){
        try {
            let syncResp = await this.startSync()
            while(!syncResp.ready){
                await new Promise(resolve => setTimeout(resolve, 1000));
                syncResp = await this.startSync()
            }

            let storedDeltaToken : string = syncResp.syncUpdatedToken

            let updatedResponse = await this.getUpdatedEmails({deltaToken:storedDeltaToken});
            if(updatedResponse.nextDeltaToken){
                //sync has completed
                storedDeltaToken=updatedResponse.nextDeltaToken
            }
            let allEmails:EmailMessage[] = updatedResponse.records
            //fetch all the pages, if more
            while(updatedResponse.nextPageToken){
                updatedResponse = await this.getUpdatedEmails({deltaToken:storedDeltaToken,pageToken:updatedResponse.nextPageToken});
                allEmails = allEmails.concat(updatedResponse.records)
                if(updatedResponse.nextDeltaToken){
                    //sync has ended
                    storedDeltaToken=updatedResponse.nextDeltaToken
                }
            }
            log('Initial sync completed for',allEmails.length,'emails')
            //store the latest delta token for future increamental syncs

            return{
                emails:allEmails,
                deltaToken:storedDeltaToken
            }
        } catch (error) {
            console.error(error)
        }
    
    }

    async sendEmail({
       from,
        subject,
        body,
        inReplyTo,
        references,
        threadId,
        to,
        cc,
        bcc,
        replyTo
    }:{
        from:EmailAddress,
        subject:string,
        body:string,
        inReplyTo?:string,
        references?:string,
        threadId?:string,
        to:EmailAddress[],
        cc?:EmailAddress[],
        bcc?:EmailAddress[],
        replyTo?:EmailAddress[],
    }){
        try {
            const response = await axios.post('https://api.aurinko.io/v1/email/messages',{
                from,
                subject,
                body,
                inReplyTo,
                references,
                threadId,
                to,
                cc,
                bcc,
                replyTo:[replyTo]
            },{
                params:{
                    returnIds:true
                },
                headers:{
                    Authorization:`Bearer ${this.token}`
                }
            })
            console.log('email sent',response.data)
        } catch (error) {
            if(axios.isAxiosError(error)){
                console.error(error.response?.data)
            }else{
                console.error(error)
            } throw error
        }
    }
}