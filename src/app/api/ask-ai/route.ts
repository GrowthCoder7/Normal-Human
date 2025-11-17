// // src/app/api/ask-ai/route.ts
// import { auth } from "@clerk/nextjs/server";
// import { OramaManager } from "@/lib/orama";
// import { log } from "console";

// const LOCAL_CHAT_URL = "http://localhost:8001/chat";
// const MAX_CONTEXT_HITS = 8;

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
//     const { accountId, input } = body ?? {};
//     if (!accountId || !input) return new Response("Bad Request", { status: 400 });

//     const orama = new OramaManager(accountId);
//     if (typeof orama.initialize === "function") await orama.initialize();
//     const context = typeof orama.vectorSearch === "function"
//       ? await orama.vectorSearch({ prompt: input })
//       : null;

//     const rawHits = Array.isArray(context?.hits) ? context.hits : [];
//     const hits = rawHits.slice(0, MAX_CONTEXT_HITS);
//     const systemLines = [
//       "You are an AI assistant that answers questions using the provided context.",
//       "TIME: " + new Date().toISOString(),
//       "CONTEXT:",
//       ...hits.map((h: any, i: number) => `--- HIT ${i + 1} ---\n${safeStringify(h.document ?? h)}`),
//       "END CONTEXT",
//     ];
//     const system = systemLines.join("\n");
//     const chatPayload = { messages: [ { role: "system", content: system }, { role: "user", content: input } ] };

//     const upstream = await fetch(LOCAL_CHAT_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(chatPayload),
//     });

//     if (!upstream.ok) {
//       const txt = await upstream.text().catch(() => upstream.statusText);
//       log("ask-ai upstream error", upstream.status, txt);
//       return new Response(`Upstream failure: ${upstream.status}`, { status: 502 });
//     }

//     if (upstream.body) {
//       const headers = new Headers();
//       headers.set("Content-Type", upstream.headers.get("content-type") ?? "text/event-stream; charset=utf-8");
//       return new Response(upstream.body, { status: 200, headers });
//     }

//     const ct = upstream.headers.get("content-type") || "";
//     if (ct.includes("application/json")) {
//       const j = await upstream.json().catch(() => null);
//       return new Response(j?.text ?? JSON.stringify(j ?? {}), { status: 200 });
//     }
//     const txt = await upstream.text().catch(() => "");
//     return new Response(txt, { status: 200 });
//   } catch (err: any) {
//     log("ask-ai route error", err);
//     return new Response(String(err?.message ?? err), { status: 500 });
//   }
// }

// src/app/api/ask-ai/route.ts
import { auth } from "@clerk/nextjs/server";
import { OramaManager } from "@/lib/orama";
import { log } from "console";
import { generateText } from "@/lib/gemini";

const MAX_CONTEXT_HITS = 8;

function safeStringify(obj: any) {
  const seen = new WeakSet();
  return JSON.stringify(obj, (_k, v) => {
    if (typeof v === "object" && v !== null) {
      if (seen.has(v)) return "[Circular]";
      seen.add(v);
    }
    return v;
  }, 2);
}

export async function POST(req: Request) {
  try {
    // read and parse body robustly (works with curl and browser fetch)
    const raw = await req.text().catch(() => "");
    log("[DEBUG] /api/ask-ai raw:", raw);
    let body: any = null;
    try {
      body = raw ? JSON.parse(raw) : null;
    } catch (err) {
      log("[ERROR] /api/ask-ai JSON parse failed:", String(err));
      return new Response("Bad Request: invalid JSON body", { status: 400 });
    }

    log("[DEBUG] /api/ask-ai parsed:", body);
    const { accountId, input } = body ?? {};

    if (!accountId || !input) {
      log("[WARN] /api/ask-ai missing fields:", { accountId, input });
      return new Response("Bad Request: require accountId and input", { status: 400 });
    }

    // allow local development testing without enforcing a session;
    // in production this will enforce Clerk auth.
    try {
      const clerkInfo = await auth().catch(() => null);
      const userId = clerkInfo?.userId;
      log("[DEBUG] /api/ask-ai clerk userId:", userId ?? "(none)");
      if (!userId && process.env.NODE_ENV !== "development") {
        return new Response("Unauthorized", { status: 401 });
      }
    } catch (e) {
      log("[WARN] /api/ask-ai auth() threw:", String(e));
      if (process.env.NODE_ENV !== "development") {
        return new Response("Unauthorized", { status: 401 });
      }
    }

    // Build Orama-based context if available
    let system = `You are an AI assistant that answers questions using the provided context.\nTIME: ${new Date().toISOString()}\nCONTEXT:\n( no context )\nEND CONTEXT`;
    try {
      const orama = new OramaManager(accountId);
      if (typeof orama.initialize === "function") await orama.initialize();
      const context = typeof orama.vectorSearch === "function" ? await orama.vectorSearch({ prompt: input }) : null;
      const rawHits = Array.isArray(context?.hits) ? context.hits : [];
      const hits = rawHits.slice(0, MAX_CONTEXT_HITS);
      const systemLines = [
        "You are an AI assistant that answers questions using the provided context.",
        "TIME: " + new Date().toISOString(),
        "CONTEXT:",
        ...hits.map((h: any, i: number) => `--- HIT ${i + 1} ---\n${safeStringify(h.document ?? h)}`),
        "END CONTEXT",
      ];
      system = systemLines.join("\n");
      log("[DEBUG] /api/ask-ai built system with hits:", hits.length);
    } catch (e) {
      log("[WARN] /api/ask-ai orama failed:", String(e));
    }

    // Build a single prompt (system + user) and call Gemini via helper
    const fullPrompt = `${system}\n\nUSER: ${input}\n\nINSTRUCTIONS:\n- Answer concisely using the context above.\n- If the context doesn't contain an answer, say you don't have the information.`;

    log("[DEBUG] /api/ask-ai calling Gemini...");
    const genText = await generateText(fullPrompt, { temperature: 0.3, maxOutputTokens: 512 });
    log("[DEBUG] /api/ask-ai gemini returned length:", genText?.length ?? 0);

    if (!genText || genText.trim().length === 0) {
      return new Response("Generator returned empty response", { status: 502 });
    }

    return new Response(genText, { status: 200, headers: { "Content-Type": "text/plain; charset=utf-8" } });
  } catch (err: any) {
    log("ask-ai route error:", err);
    return new Response(String(err?.message ?? err), { status: 500 });
  }
}
