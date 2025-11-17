// // src/app/api/chat/route.ts
// import { auth } from "@clerk/nextjs/server";
// import { OramaManager } from "@/lib/orama";
// import { log } from "console";

// export type Message = { role: "user" | "assistant" | "system"; content: string; };

// const MAX_CONTEXT_HITS = 8;
// const LOCAL_CHAT_URL = "http://localhost:8001/chat";

// function safeStringify(obj: any) {
//   const seen = new WeakSet();
//   return JSON.stringify(obj, (_k, v) => {
//     if (typeof v === "object" && v !== null) {
//       if (seen.has(v)) return "[Circular]";
//       seen.add(v);
//     }
//     return v;
//   }, 2);
// }

// export async function POST(req: Request) {
//   try {
//     const { userId } = await auth();
//     if (!userId) return new Response("Unauthorized", { status: 401 });

//     const body = await req.json().catch(() => null);
//     const { accountId, messages } = body ?? {};
//     if (!accountId || !Array.isArray(messages) || messages.length === 0) {
//       return new Response("Bad Request", { status: 400 });
//     }

//     const lastMessage = messages[messages.length - 1];
//     if (!lastMessage || typeof lastMessage.content !== "string") {
//       return new Response("Bad Request", { status: 400 });
//     }

//     const orama = new OramaManager(accountId);
//     if (typeof orama.initialize === "function") await orama.initialize();

//     const context = typeof orama.vectorSearch === "function"
//       ? await orama.vectorSearch({ prompt: lastMessage.content })
//       : null;

//     const rawHits = Array.isArray(context?.hits) ? context.hits : [];
//     const hits = rawHits.slice(0, MAX_CONTEXT_HITS);

//     const systemLines = [
//       "You are an AI email assistant. Use the context hits below to answer user queries.",
//       `TIME: ${new Date().toISOString()}`,
//       "START CONTEXT",
//       ...hits.map((h: any, i: number) => `--- HIT ${i + 1} ---\n${safeStringify(h.document ?? h)}`),
//       "END CONTEXT",
//     ];
//     const system = systemLines.join("\n");
//     const chatPayload = { messages: [ { role: "system", content: system }, ...messages ] };

//     const upstream = await fetch(LOCAL_CHAT_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(chatPayload),
//     });

//     if (!upstream.ok) {
//       const txt = await upstream.text().catch(() => upstream.statusText);
//       log("Upstream chat error:", upstream.status, txt);
//       return new Response(`Upstream failure: ${upstream.status}`, { status: 502 });
//     }

//     // Proxy the streaming body (SSE) directly
//     if (upstream.body) {
//       const headers = new Headers();
//       headers.set("Content-Type", upstream.headers.get("content-type") ?? "text/event-stream; charset=utf-8");
//       return new Response(upstream.body, { status: 200, headers });
//     }

//     const ct = upstream.headers.get("content-type") || "";
//     if (ct.includes("application/json")) {
//       const j = await upstream.json().catch(() => null);
//       const text = j?.text ?? JSON.stringify(j ?? {});
//       return new Response(text, { status: 200, headers: { "Content-Type": "text/plain; charset=utf-8" } });
//     }
//     const text = await upstream.text().catch(() => "");
//     return new Response(text, { status: 200, headers: { "Content-Type": "text/plain; charset=utf-8" } });
//   } catch (err: any) {
//     log("chat route error", err);
//     return new Response(String(err?.message ?? err), { status: 500 });
//   }
// }


// src/app/api/chat/route.ts
import { auth } from "@clerk/nextjs/server";
import { OramaManager } from "@/lib/orama";
import { log } from "console";
import { generateText } from "@/lib/gemini";

export type Message = { role: "user" | "assistant" | "system"; content: string; };

const MAX_CONTEXT_HITS = 8;

function safeStringify(obj: any) {
  const seen = new WeakSet();
  return JSON.stringify(
    obj,
    (_k, v) => {
      if (typeof v === "object" && v !== null) {
        if (seen.has(v)) return "[Circular]";
        seen.add(v);
      }
      return v;
    },
    2
  );
}

export async function POST(req: Request) {
  const raw = await req.text().catch(() => "");
log("[DEBUG] /api/ask-ai raw:", raw);
let body = null;
try { body = JSON.parse(raw); } catch(e) { }
log("[DEBUG] /api/ask-ai parsed:", body);

  try {
    const { userId } = await auth();
    if (!userId) return new Response("Unauthorized", { status: 401 });

    const body = await req.json().catch(() => null);
    const { accountId, messages } = body ?? {};
    if (!accountId || !Array.isArray(messages) || messages.length === 0) {
      return new Response("Bad Request", { status: 400 });
    }

    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || typeof lastMessage.content !== "string") {
      return new Response("Bad Request", { status: 400 });
    }

    const orama = new OramaManager(accountId);
    if (typeof orama.initialize === "function") await orama.initialize();

    const context = typeof orama.vectorSearch === "function"
      ? await orama.vectorSearch({ prompt: lastMessage.content })
      : null;

    const rawHits = Array.isArray(context?.hits) ? context.hits : [];
    const hits = rawHits.slice(0, MAX_CONTEXT_HITS);

    const systemLines = [
      "You are an AI email assistant. Use the context hits below to answer user queries.",
      `TIME: ${new Date().toISOString()}`,
      "START CONTEXT",
      ...hits.map((h: any, i: number) => `--- HIT ${i + 1} ---\n${safeStringify(h.document ?? h)}`),
      "END CONTEXT",
    ];
    const system = systemLines.join("\n\n");

    // Build a single prompt by concatenating system + chat messages
    const messagesText = messages.map((m: Message) => `${m.role.toUpperCase()}: ${m.content}`).join("\n\n");
    const fullPrompt = `${system}\n\n${messagesText}\n\nAssistant:`;

    // Call Gemini wrapper
    const text = await generateText({ contents: fullPrompt });

    // Return assistant's reply as plain text
    return new Response(text ?? "", { status: 200, headers: { "Content-Type": "text/plain; charset=utf-8" } });
  } catch (err: any) {
    log("chat route error", err);
    return new Response(String(err?.message ?? err), { status: 500 });
  }
}
