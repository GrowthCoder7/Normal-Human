// src/app/api/ask-ai/route.ts
import { auth } from "@clerk/nextjs/server";
import { OramaManager } from "@/lib/orama";
import { log } from "console";

const LOCAL_CHAT_URL = "http://localhost:8001/chat";
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
    const { userId } = await auth();
    if (!userId) return new Response("Unauthorized", { status: 401 });

    const body = await req.json().catch(() => null);
    const { accountId, input } = body ?? {};
    if (!accountId || !input) return new Response("Bad Request", { status: 400 });

    const orama = new OramaManager(accountId);
    if (typeof orama.initialize === "function") await orama.initialize();
    const context = typeof orama.vectorSearch === "function"
      ? await orama.vectorSearch({ prompt: input })
      : null;

    const rawHits = Array.isArray(context?.hits) ? context.hits : [];
    const hits = rawHits.slice(0, MAX_CONTEXT_HITS);
    const systemLines = [
      "You are an AI assistant that answers questions using the provided context.",
      "TIME: " + new Date().toISOString(),
      "CONTEXT:",
      ...hits.map((h: any, i: number) => `--- HIT ${i + 1} ---\n${safeStringify(h.document ?? h)}`),
      "END CONTEXT",
    ];
    const system = systemLines.join("\n");
    const chatPayload = { messages: [ { role: "system", content: system }, { role: "user", content: input } ] };

    const upstream = await fetch(LOCAL_CHAT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(chatPayload),
    });

    if (!upstream.ok) {
      const txt = await upstream.text().catch(() => upstream.statusText);
      log("ask-ai upstream error", upstream.status, txt);
      return new Response(`Upstream failure: ${upstream.status}`, { status: 502 });
    }

    if (upstream.body) {
      const headers = new Headers();
      headers.set("Content-Type", upstream.headers.get("content-type") ?? "text/event-stream; charset=utf-8");
      return new Response(upstream.body, { status: 200, headers });
    }

    const ct = upstream.headers.get("content-type") || "";
    if (ct.includes("application/json")) {
      const j = await upstream.json().catch(() => null);
      return new Response(j?.text ?? JSON.stringify(j ?? {}), { status: 200 });
    }
    const txt = await upstream.text().catch(() => "");
    return new Response(txt, { status: 200 });
  } catch (err: any) {
    log("ask-ai route error", err);
    return new Response(String(err?.message ?? err), { status: 500 });
  }
}
