import { exchangeCode, getAccountDetails } from "@/lib/aurinko";
import { db } from "@/server/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { waitUntil } from "@vercel/functions"
import axios from "axios";
import { log } from "console";

export const GET = async (req: NextRequest) => {
  const { userId: clerkId } = await auth();
  const user = await currentUser();

  if (!clerkId || !user) {
    return new NextResponse("Unauthenticated", { status: 401 });
  }

  const primaryEmail = user.emailAddresses[0]?.emailAddress;
  if (!primaryEmail) {
    return NextResponse.redirect(new URL('/mail?error=no_email', req.url));
  }

  const params = req.nextUrl.searchParams;
  const status = params.get('status');
  if (status !== 'success') {
    return NextResponse.redirect(new URL('/mail?error=aurinko_failed', req.url));
  }
  const code = params.get('code');
  if (!code) {
    return NextResponse.redirect(new URL('/mail?error=aurinko_no_code', req.url));
  }

  const token = await exchangeCode(code);
  if (!token) {
    return NextResponse.redirect(new URL('/mail?error=aurinko_token_exchange', req.url));
  }
  const accountDetails = await getAccountDetails(token.accessToken);
  if (!accountDetails) {
    return NextResponse.redirect(new URL('/mail?error=aurinko_account_details', req.url));
  }

  let dbAccount; // <-- Define dbAccount here
  try {
    await db.user.upsert({
      where: { id: clerkId },
      update: {
        firstName: user.firstName ?? '',
        lastName: user.lastName ?? '',
        email: primaryEmail,
        imageUrl: user.imageUrl,
      },
      create: {
        id: clerkId,
        email: primaryEmail,
        firstName: user.firstName ?? '',
        lastName: user.lastName ?? '',
        imageUrl: user.imageUrl,
      }
    });

    // Upsert the account and store the result in dbAccount
    dbAccount = await db.account.upsert({
      where: {
        userId_emailAddress: {
          userId: clerkId,
          emailAddress: accountDetails.email
        }
      },
      update: {
        accessToken: token.accessToken,
        name: accountDetails.name,
        nextDeltaToken: null,
      },
      create: {
        // id is @default(uuid())
        userId: clerkId,
        name: accountDetails.name,
        emailAddress: accountDetails.email,
        accessToken: token.accessToken,
        nextDeltaToken: null
      }
    });

  } catch (error) {
    console.error("Database operation failed:", error);
    return NextResponse.redirect(new URL('/mail?error=db_error', req.url));
  }

  //trigger intial sync endpoint
  //waitUntil helps run an async request
  waitUntil(
    axios.post(`${process.env.NEXT_PUBLIC_URL}/api/initial-sync`, {
      // Pass the ID of the record we just created/updated
      accountId: dbAccount.id, // <-- This is the internal UUID
      clerkId: clerkId
    }).then(res => {
      log("initial sync triggered", res.status)
    }).catch(err => {
      log("initial sync failed", err.response?.data)
    })
  )

  return NextResponse.redirect(new URL('/mail?success=true', req.url));
}