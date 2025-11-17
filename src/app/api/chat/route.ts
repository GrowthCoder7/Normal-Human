// src/app/api/chat/route.ts
import { auth } from "@clerk/nextjs/server";
import { OramaManager } from "@/lib/orama";
import { log } from "console";

export type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

const MAX_CONTEXT_HITS = 10; // keep only top-k hits to limit prompt size
const LOCAL_GENERATOR_URL = process.env.LOCAL_GEN_URL ?? "http://localhost:8002/chat";

/** Safely stringify possibly-circular objects for the prompt */
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
  try {
    // Clerk auth
    const { userId } = await auth();
    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    // Parse + basic validation
    let body: any;
    try {
      body = await req.json();
    } catch (e) {
      return new Response("Bad Request: invalid JSON", { status: 400 });
    }

    const { accountId, messages } = body ?? {};

    if (!accountId || !Array.isArray(messages) || messages.length === 0) {
      return new Response("Bad Request: missing accountId or messages", { status: 400 });
    }

    // Validate last message
    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || typeof lastMessage.content !== "string") {
      return new Response("Bad Request: invalid last message", { status: 400 });
    }

    // Initialize Orama and fetch context
    const orama = new OramaManager(accountId);
    if (typeof orama.initialize === "function") {
      await orama.initialize();
    }

    // Run vector search (adapt to your OramaManager API)
    const context = typeof orama.vectorSearch === "function"
      ? await orama.vectorSearch({ prompt: lastMessage.content })
      : null;

    const rawHits = Array.isArray(context?.hits) ? context.hits : [];
    const hits = rawHits.slice(0, MAX_CONTEXT_HITS);

    log(`Orama: found ${hits.length} context hits for account ${accountId}`);

    // Build the system prompt with a compact context block
    const systemPromptLines: string[] = [
      "You are an AI email assistant embedded in an email client app. Your purpose is to help the user compose emails by answering questions, providing suggestions, and offering relevant information based on the context of their previous emails.",
      `THE TIME NOW IS ${new Date().toISOString()}`,
      "START CONTEXT BLOCK",
      ...hits.map((h: any, i: number) => `--- HIT ${i + 1} ---\n${safeStringify(h.document ?? h)}`),
      "END OF CONTEXT BLOCK",
      "",
      "When responding, please:",
      "- Be helpful, clever, and articulate.",
      "- Rely on the provided email context to inform your responses.",
      "- If the context does not contain enough information to answer a question, politely say you don't have enough information.",
      "- Avoid inventing facts not supported by the context.",
      "- Keep responses concise and targeted to the user's request.",
    ];

    const systemMessage: Message = {
      role: "system",
      content: systemPromptLines.join("\n"),
    };

    // Merge messages: system -> previous messages (preserve roles)
    const chatMessages = [
      systemMessage,
      ...messages.map((m: Message) => ({ role: m.role, content: m.content })),
    ];

    // ---- Proxy to local generator ----
    // Send the chatMessages to a local generator you run on your machine.
    // The generator may:
    //  - stream token chunks (via chunked response / SSE) -> this code proxies the raw body
    //  - return JSON { text: "..." } -> we will return that text
    //  - return plain text -> we return that text
    const upstream = await fetch(LOCAL_GENERATOR_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: chatMessages, accountId }),
      // keep credentials omitted; it's server-to-server local
    });

    if (!upstream.ok) {
      const errText = await upstream.text().catch(() => upstream.statusText);
      log("Upstream generation error:", upstream.status, errText);
      return new Response(`Upstream error: ${upstream.status} ${errText}`, { status: 502 });
    }

    // If the upstream provides a streaming body (ReadableStream), proxy it directly.
    // This preserves chunked streaming / SSE for client consumers (ai/react or streamText).
    if (upstream.body) {
      const ct = upstream.headers.get("content-type") || "text/event-stream; charset=utf-8";
      // Clone headers we want to pass through
      const headers = new Headers();
      headers.set("Content-Type", ct);
      // return the raw upstream stream body to the client
      return new Response(upstream.body, {
        status: 200,
        headers,
      });
    }

    // If not streaming, try JSON
    const contentType = (upstream.headers.get("content-type") || "").toLowerCase();
    if (contentType.includes("application/json")) {
      const j = await upstream.json().catch(() => null);
      const text = j?.text ?? j?.output ?? JSON.stringify(j ?? "");
      return new Response(String(text), { status: 200, headers: { "Content-Type": "text/plain; charset=utf-8" } });
    }

    // Fallback: read as text and return plain text
    const txt = await upstream.text().catch(() => "");
    return new Response(txt, { status: 200, headers: { "Content-Type": "text/plain; charset=utf-8" } });

  } catch (err: any) {
    log("Mail assistant error:", err);
    const body = typeof err === "string" ? err : err?.message ?? "Internal Server Error";
    return new Response(`Internal Server Error: ${body}`, { status: 500 });
  }
}
