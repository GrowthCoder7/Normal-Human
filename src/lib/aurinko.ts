"use server"
import { auth } from "@clerk/nextjs/server";
import axios from "axios";

//used to set the consent screen for the email provider and provides the code
export const getAurinkoAuthUrl = async (serviceType: 'Google' | 'Office365') => {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthenticated");

    const params = new URLSearchParams({
        clientId: process.env.AURINKO_CLIENT_ID as string,
        serviceType,
        scopes: 'Mail.Read Mail.ReadWrite Mail.Send Mail.Drafts Mail.All',
        responseType: 'code',
        returnUrl: `${process.env.NEXT_PUBLIC_URL}/api/aurinko/callback`
    })
    return `https://api.aurinko.io/v1/auth/authorize?${params.toString()}`
}


//used to convert the code for access token
export const exchangeCode = async (code: string) => {
    try {
        const response = await axios.post(`https://api.aurinko.io/v1/auth/token/${code}`, {}, {
            auth: {
                username: process.env.AURINKO_CLIENT_ID as string,
                password: process.env.AURINKO_CLIENT_SECRET as string,
            }
        });
        return response.data as {
            accountId: string,
            accessToken: string,
            userId: string,
            userSession: string
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error exchanging code:", error.response?.data)
        } else {
            console.error("Error exchanging code:", error)
        }
        return null; // Return null on failure
    }
}

//using token to get account details
export const getAccountDetails = async (accessToken: string) => {
    try {
        const response = await axios.get('https://api.aurinko.io/v1/account', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return response.data as {
            email: string,
            name: string
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error getting account details:", error.response?.data)
        } else {
            console.error("Error getting account details:", error)
        }
        return null; // Return null on failure
    }
}