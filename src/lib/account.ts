// import axios from "axios";
// import { log } from "console";
// import type { EmailAddress, EmailMessage, SyncResponse, SyncUpdatedResponse } from "./types";
// import { db } from "@/server/db";
// import { syncEmailsToDb } from "./sync-to-db";

// export class Account{
//     private token:string;

//     constructor(token:string){
//         this.token = token;
//     }

//     private async startSync(){
//         const res = await axios.post<SyncResponse>('https://api.aurinko.io/v1/email/sync',{},{
//             headers:{
//                 Authorization:`Bearer ${this.token}`
//             },
//             params:{
//                 daysWithin:2,
//                 bodyType:'html'
//             }
//         })
//         return res.data
//     }

//     private async getUpdatedEmails({deltaToken,pageToken}:{deltaToken?:string,pageToken?:string}):Promise<SyncUpdatedResponse>{
//         let params: Record <string, string> = {}
//         if(deltaToken) params.deltaToken = deltaToken
//         if(pageToken) params.pageToken = pageToken

//         const res = await axios.get<SyncUpdatedResponse>('https://api.aurinko.io/v1/email/sync/updated',{
//             headers:{
//                 Authorization:`Bearer ${this.token}`
//             },
//             params
//         })
//         return res.data
//     }

//     async performInitialSync(){
//         try {
//             let syncResp = await this.startSync()
//             while(!syncResp.ready){
//                 await new Promise(resolve => setTimeout(resolve, 1000));
//                 syncResp = await this.startSync()
//             }

//             let storedDeltaToken : string = syncResp.syncUpdatedToken

//             let updatedResponse = await this.getUpdatedEmails({deltaToken:storedDeltaToken});
//             if(updatedResponse.nextDeltaToken){
//                 //sync has completed
//                 storedDeltaToken=updatedResponse.nextDeltaToken
//             }
//             let allEmails:EmailMessage[] = updatedResponse.records
//             //fetch all the pages, if more
//             while(updatedResponse.nextPageToken){
//                 updatedResponse = await this.getUpdatedEmails({deltaToken:storedDeltaToken,pageToken:updatedResponse.nextPageToken});
//                 allEmails = allEmails.concat(updatedResponse.records)
//                 if(updatedResponse.nextDeltaToken){
//                     //sync has ended
//                     storedDeltaToken=updatedResponse.nextDeltaToken
//                 }
//             }
//             log('Initial sync completed for',allEmails.length,'emails')
//             //store the latest delta token for future increamental syncs

//             return{
//                 emails:allEmails,
//                 deltaToken:storedDeltaToken
//             }
//         } catch (error) {
//             console.error(error)
//         }
    
//     }

//     async syncEmails(){
//         const account = await db.account.findFirst({
//             where:{
//                 accessToken:this.token
//             }
//         })
//         if(!account) throw new Error(`Account not found for token ${this.token}`)
//         if(!account.nextDeltaToken) throw new Error(`No delta token found for account ${account.id}`)
//         let response = await this.getUpdatedEmails({deltaToken:account.nextDeltaToken})

//         let storedDeltaToken = account.nextDeltaToken
//         let allEmails:EmailMessage[] = response.records

//         if(response.nextDeltaToken){
//             //sync has completed
//             storedDeltaToken=response.nextDeltaToken
//         }

//         while(response.nextPageToken){
//             response = await this.getUpdatedEmails({pageToken:response.nextPageToken});
//             allEmails = allEmails.concat(response.records)
//             if(response.nextDeltaToken){
//                 //sync has ended
//                 storedDeltaToken=response.nextDeltaToken
//             }
//         }

//         try {
//             syncEmailsToDb(allEmails,account.id)
//         } catch (error) {
//             console.error("Error during sync:",error)
//         }

//         await db.account.update({
//             where:{
//                 id:account.id
//             },
//             data:{
//                 nextDeltaToken:storedDeltaToken
//             }
//         })

//         //fetch all the pages, if more
//         return{
//             email:allEmails,
//             deltaToken:storedDeltaToken
//         }
//     }

//     async sendEmail({
//        from,
//         subject,
//         body,
//         inReplyTo,
//         references,
//         threadId,
//         to,
//         cc,
//         bcc,
//         replyTo
//     }:{
//         from:EmailAddress,
//         subject:string,
//         body:string,
//         inReplyTo?:string,
//         references?:string,
//         threadId?:string,
//         to:EmailAddress[],
//         cc?:EmailAddress[],
//         bcc?:EmailAddress[],
//         replyTo?:EmailAddress[],
//     }){
//         try {
//             const response = await axios.post('https://api.aurinko.io/v1/email/messages',{
//                 from,
//                 subject,
//                 body,
//                 inReplyTo,
//                 references,
//                 threadId,
//                 to,
//                 cc,
//                 bcc,
//                 replyTo:[replyTo]
//             },{
//                 params:{
//                     returnIds:true
//                 },
//                 headers:{
//                     Authorization:`Bearer ${this.token}`
//                 }
//             })
//             console.log('email sent',response.data)
//         } catch (error) {
//             if(axios.isAxiosError(error)){
//                 console.error(error.response?.data)
//             }else{
//                 console.error(error)
//             } throw error
//         }
//     }
// }

// src/lib/account.ts  (replace file contents with this patch)
import axios from "axios";
import { log } from "console";
import type { EmailAddress, EmailMessage, SyncResponse, SyncUpdatedResponse } from "./types";
import { db } from "@/server/db";
import { syncEmailsToDb } from "./sync-to-db";

export class Account {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  private async startSync(): Promise<SyncResponse> {
    try {
      // allow debugging window to be configured via env var while we debug
      const daysWithin = Number(process.env.AURINKO_DAYS_WITHIN ?? "2");
      const res = await axios.post<SyncResponse>(
        "https://api.aurinko.io/v1/email/sync",
        {},
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
          params: {
            daysWithin,
            bodyType: "html",
          },
          timeout: 10000,
        }
      );

      // debug log the shape we received (truncate large fields)
      log("[Aurinko] startSync status:", res.status);
      try {
        log("[Aurinko] startSync data keys:", Object.keys(res.data || {}));
        // only print small fields to avoid giant logs; if you need full object, ask
        if (res.data && "syncUpdatedToken" in res.data) {
          log("[Aurinko] startSync syncUpdatedToken:", (res.data as any).syncUpdatedToken);
        }
      } catch (e) {
        console.error("[Aurinko] startSync debug print failed:", e);
      }

      return res.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.error("[Aurinko] startSync axios error:", {
          status: error.response?.status,
          data: error.response?.data,
        });
      } else {
        console.error("[Aurinko] startSync non-axios error:", error);
      }
      throw error;
    }
  }

  private async getUpdatedEmails({ deltaToken, pageToken }: { deltaToken?: string; pageToken?: string; }): Promise<SyncUpdatedResponse> {
    try {
      let params: Record<string, string> = {};
      if (deltaToken) params.deltaToken = deltaToken;
      if (pageToken) params.pageToken = pageToken;

      const res = await axios.get<SyncUpdatedResponse>("https://api.aurinko.io/v1/email/sync/updated", {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
        params,
        timeout: 10000,
      });

      log("[Aurinko] getUpdatedEmails status:", res.status);
      // show counts safely
      try {
        const keys = Object.keys(res.data || {});
        log("[Aurinko] getUpdatedEmails keys:", keys);
        if (Array.isArray((res.data as any).records)) {
          log("[Aurinko] getUpdatedEmails records.length:", (res.data as any).records.length);
        }
        if ((res.data as any).nextDeltaToken) {
          log("[Aurinko] getUpdatedEmails nextDeltaToken:", (res.data as any).nextDeltaToken);
        }
      } catch (e) {
        console.error("[Aurinko] getUpdatedEmails debug print failed:", e);
      }

      return res.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.error("[Aurinko] getUpdatedEmails axios error:", {
          status: error.response?.status,
          data: error.response?.data,
        });
      } else {
        console.error("[Aurinko] getUpdatedEmails non-axios error:", error);
      }
      throw error;
    }
  }

  async performInitialSync() {
    try {
      let syncResp = await this.startSync();

      // Wait until ready
      const maxRetries = 30;
      let i = 0;
      while (!syncResp?.ready && i < maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        syncResp = await this.startSync();
        i++;
      }
      if (!syncResp?.ready) {
        console.error("[Aurinko] initial sync never became ready (after retries)");
        return { emails: [], deltaToken: syncResp?.syncUpdatedToken ?? null };
      }

      let storedDeltaToken: string = syncResp.syncUpdatedToken;

      let updatedResponse = await this.getUpdatedEmails({ deltaToken: storedDeltaToken });
      if (!updatedResponse) {
        console.error("[Aurinko] updatedResponse was falsy");
        return { emails: [], deltaToken: storedDeltaToken };
      }

      if (updatedResponse.nextDeltaToken) {
        // sync has completed
        storedDeltaToken = updatedResponse.nextDeltaToken;
      }
      let allEmails: EmailMessage[] = Array.isArray(updatedResponse.records) ? updatedResponse.records : [];

      // fetch all the pages, if more
      while (updatedResponse.nextPageToken) {
        updatedResponse = await this.getUpdatedEmails({
          deltaToken: storedDeltaToken,
          pageToken: updatedResponse.nextPageToken,
        });
        allEmails = allEmails.concat(Array.isArray(updatedResponse.records) ? updatedResponse.records : []);
        if (updatedResponse.nextDeltaToken) {
          // sync has ended
          storedDeltaToken = updatedResponse.nextDeltaToken;
        }
      }

      log("Initial sync completed for", allEmails.length, "emails");
      return {
        emails: allEmails,
        deltaToken: storedDeltaToken,
      };
    } catch (error) {
      console.error("[Aurinko] performInitialSync error:", error);
      return { emails: [], deltaToken: null };
    }
  }

  async syncEmails() {
    const account = await db.account.findFirst({
      where: {
        accessToken: this.token,
      },
    });
    if (!account) throw new Error(`Account not found for token ${this.token}`);
    if (!account.nextDeltaToken) {
      // Make this non-fatal but informative so we know exactly why no emails were fetched
      console.warn(`[Aurinko] No delta token found for account ${account.id}. nextDeltaToken is falsy.`);
      return { email: [], deltaToken: null };
    }

    let response;
    try {
      response = await this.getUpdatedEmails({ deltaToken: account.nextDeltaToken });
    } catch (err) {
      console.error("[Aurinko] getUpdatedEmails failed during incremental sync:", err);
      return { email: [], deltaToken: account.nextDeltaToken };
    }

    let storedDeltaToken = account.nextDeltaToken;
    let allEmails: EmailMessage[] = Array.isArray(response.records) ? response.records : [];

    if (response.nextDeltaToken) {
      // sync has completed
      storedDeltaToken = response.nextDeltaToken;
    }

    while (response.nextPageToken) {
      response = await this.getUpdatedEmails({ pageToken: response.nextPageToken });
      allEmails = allEmails.concat(Array.isArray(response.records) ? response.records : []);
      if (response.nextDeltaToken) {
        // sync has ended
        storedDeltaToken = response.nextDeltaToken;
      }
    }

    try {
      await syncEmailsToDb(allEmails, account.id);
    } catch (error) {
      console.error("Error during sync:", error);
    }

    await db.account.update({
      where: {
        id: account.id,
      },
      data: {
        nextDeltaToken: storedDeltaToken,
      },
    });

    return {
      email: allEmails,
      deltaToken: storedDeltaToken,
    };
  }

  // sendEmail unchanged
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
    replyTo,
  }: {
    from: EmailAddress;
    subject: string;
    body: string;
    inReplyTo?: string;
    references?: string;
    threadId?: string;
    to: EmailAddress[];
    cc?: EmailAddress[];
    bcc?: EmailAddress[];
    replyTo?: EmailAddress[]; // array or undefined
  }) {
    try {
      const payload: any = {
        from,
        subject,
        body,
        inReplyTo,
        references,
        threadId,
        to,
      };

      if (cc && cc.length) payload.cc = cc;
      if (bcc && bcc.length) payload.bcc = bcc;
      if (replyTo && replyTo.length) payload.replyTo = replyTo; // <-- send as array, do not nest

      const response = await axios.post(
        "https://api.aurinko.io/v1/email/messages",
        payload,
        {
          params: {
            returnIds: true,
          },
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      );
      console.log("email sent", response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data);
      } else {
        console.error(error);
      }
      throw error;
    }
  }
}