// // src/app/api/gen/route.ts  (app router)
// import { NextResponse } from 'next/server';

// export async function POST(req: Request) {
//   try {
//     const body = await req.text(); // forward raw body to local generator
//     const upstream = await fetch('http://localhost:8001/generate', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body,
//     });

//     // forward status and body (supports streaming)
//     const headers = new Headers(upstream.headers);
//     headers.delete('transfer-encoding'); // next may not allow it
//     return new NextResponse(upstream.body, {
//       status: upstream.status,
//       headers,
//     });
//   } catch (err) {
//     console.error('/api/gen proxy error', err);
//     return NextResponse.json({ error: 'proxy failed' }, { status: 500 });
//   }
// }

// src/app/api/gen/route.ts
import { NextResponse } from "next/server";
import { generateText } from "@/lib/gemini";

export async function POST(req: Request) {
  try {
    // Try to parse JSON body; if not JSON, treat raw text as prompt
    const ct = req.headers.get("content-type") ?? "";
    let prompt = "";

    if (ct.includes("application/json")) {
      const body = await req.json().catch(() => null);
      // Common shapes: { prompt: "..."} or { input_text: "..." } or { text: "..." }
      prompt = body?.prompt ?? body?.input_text ?? body?.text ?? JSON.stringify(body ?? {});
    } else {
      prompt = await req.text().catch(() => "");
    }

    // If the body is empty, return bad request
    if (!prompt || String(prompt).trim().length === 0) {
      return NextResponse.json({ error: "empty prompt" }, { status: 400 });
    }

    // Use Gemini wrapper to generate text
    const text = await generateText({ contents: String(prompt) });

    // Return plain text (keeps compatibility with previous forwarder)
    return new NextResponse(text ?? "", {
      status: 200,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (err) {
    console.error("/api/gen error", err);
    return NextResponse.json({ error: "generation failed", detail: String(err ?? "") }, { status: 500 });
  }
}
