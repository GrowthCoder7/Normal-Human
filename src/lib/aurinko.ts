"use server"
import axios from "axios";
import { auth } from "@clerk/nextjs/server";

//used to set the consent screen for the email provider and provides the code
export const getAurinkoAuthUrl=async (serviceType:'Google'|'Office365')=>{
    const {userId} = await auth();
    if(!userId) throw new Error("Unauthenticated");

    const params = new URLSearchParams({
        clientId:process.env.AURINKO_CLIENT_ID as string,
        serviceType,
        scopes:'Mail.Read Mail.ReadWrite Mail.Send Mail.Drafts Mail.All',
        responseType:'code',
        returnUrl:`${process.env.NEXT_PUBLIC_URL}/api/aurinko/callback`,
        // returnUrl:`${process.env.REDIRECT_URL}/api/aurinko/callback`
    })
    return `https://api.aurinko.io/v1/auth/authorize?${params.toString()}`
}


//used to convert the code for access token -> yeh woh pass hn joh baar baar request ke time pe access lene ke liye use hoga
export const exchangeCode = async(code:string)=>{
    try {
        const response=await axios.post('https://api.aurinko.io/v1/account',{},{
            auth:{
                username:process.env.AURINKO_CLIENT_ID as string,
                password:process.env.AURINKO_CLIENT_SECRET as string,
            }
        });
        return response.data as{
            accountId:string,
            accessToken:string,
            userId:string,
            userSession:string
        }
    } catch (error) {
        console.error(error)
    }
}

//using token to get account details and perform allowed operations
export const getAccountDetails=async (accessToken:string)=>{
    try {
        const response=await axios.get('https://api.aurinko.io/v1/account',{
            headers:{
                Authorization:`Bearer ${accessToken}`
            }
        });
        return response.data as{
            email:string,
            name:string
        }
    } catch (error) {
        if(axios.isAxiosError(error)){
            console.error(error.response?.data)
        }else{
            console.error(error)
        }
        throw error;
    }
}