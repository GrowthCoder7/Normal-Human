import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/clerk/webhooks(.*)",
  "/api/initial-sync(.*)",
  "/api/aurinko/callback(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const p = req.nextUrl.pathname;
  // debug log to ensure this middleware file is loaded by the running Next server
  console.log("[MIDDLEWARE] loaded for PATH:", p, "NODE_ENV:", process.env.NODE_ENV);

  // DEV bypass: allow local requests to any /api/* route without auth
  if (process.env.NODE_ENV === "development" && p.startsWith("/api/")) {
    console.log("[MIDDLEWARE] DEV bypass for API route:", p);
    return;
  }

  if (!isPublicRoute(req)) {
    console.log("[MIDDLEWARE] protecting route:", p);
    await auth.protect();
  } else {
    console.log("[MIDDLEWARE] public route:", p);
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};