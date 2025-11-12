/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { exchangeCode,getAccountDetails } from "@/lib/aurinko";
import { auth } from "@clerk/nextjs/server"
import { log } from "console";
import { NextRequest, NextResponse } from "next/server";

export const GET = async(req:NextRequest)=>{
    const {userId} = await auth();
    if(!userId) throw new Error("Unauthenticated");

    const params = req.nextUrl.searchParams;
    const status = params.get('status');
    if(status !== 'success') return NextResponse.json({message:"Failed to link account"})

    const code = params.get('code');
    if(!code) return NextResponse.json({message:"No code received"});

    const token = await exchangeCode(code);
    if(!token) return NextResponse.json({message:"Failed to exchange code"});

    const accountDetails = await getAccountDetails(token.accessToken);
    if(!accountDetails) return NextResponse.json({message:"Failed to get account details"});

    return NextResponse.json({message:"Hello Princef!"})
}