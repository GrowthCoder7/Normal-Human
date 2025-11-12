import { exchangeCode, getAccountDetails } from "@/lib/aurinko";
import { db } from "@/server/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  // Get the Clerk user's session
  const { userId: clerkId } = await auth();
  const user = await currentUser();

  if (!clerkId || !user) {
    return new NextResponse("Unauthenticated", { status: 401 });
  }

  // Get the primary email address from Clerk
  const primaryEmail = user.emailAddresses[0]?.emailAddress;
  if (!primaryEmail) {
    return NextResponse.redirect(new URL('/mail?error=no_email', req.url));
  }

  // --- Parse Callback ---
  const params = req.nextUrl.searchParams;
  const status = params.get('status');
  if (status !== 'success') {
    return NextResponse.redirect(new URL('/mail?error=aurinko_failed', req.url));
  }

  const code = params.get('code');
  if (!code) {
    return NextResponse.redirect(new URL('/mail?error=aurinko_no_code', req.url));
  }

  // --- Exchange Token ---
  const token = await exchangeCode(code);
  if (!token) {
    return NextResponse.redirect(new URL('/mail?error=aurinko_token_exchange', req.url));
  }

  const accountDetails = await getAccountDetails(token.accessToken);
  if (!accountDetails) {
    return NextResponse.redirect(new URL('/mail?error=aurinko_account_details', req.url));
  }

  // --- DATABASE LOGIC (THE FIX) ---
  let dbUser;
  try {
    // 1. Find or create the User in your DB using their @unique email
    dbUser = await db.user.upsert({
      where: {
        email: primaryEmail,
      },
      update: {
        // Update fields if they changed in Clerk
        firstName: user.firstName ?? '',
        lastName: user.lastName ?? '',
        imageUrl: user.imageUrl,
      },
      create: {
        // id is created by @default(uuid())
        email: primaryEmail,
        firstName: user.firstName ?? '',
        lastName: user.lastName ?? '',
        imageUrl: user.imageUrl,
      }
    });

    if (!dbUser) {
      throw new Error("Failed to create or find user.");
    }

    // 2. Now, create the Account and link it using the User's UUID
    //    We use the unique accessToken to upsert
    await db.account.upsert({
      where: {
        accessToken: token.accessToken,
      },
      update: {
        // In case it already exists, link it to this user
        userId: dbUser.id,
        name: accountDetails.name,
        emailAddress: accountDetails.email,
      },
      create: {
        // id is created by @default(uuid())
        userId: dbUser.id, // This is the UUID from the User table
        name: accountDetails.name,
        emailAddress: accountDetails.email,
        accessToken: token.accessToken
      }
    });

  } catch (error) {
    console.error("Database operation failed:", error);
    return NextResponse.redirect(new URL('/mail?error=db_error', req.url));
  }

  // 3. Success!
  return NextResponse.redirect(new URL('/mail?success=true', req.url));
}