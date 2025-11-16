import { auth } from "@clerk/nextjs/server";
import { OramaManager } from "@/lib/orama";
import { openai } from "@ai-sdk/openai"; // keep if you have this package configured
import { streamText } from "ai"; // streaming helper (optional)
import { log } from "console";

export type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

const OPENAI_MODEL = "gpt-5.1"; // change to your preferred model
const MAX_CONTEXT_HITS = 10; // keep only top-k hits to limit prompt size

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

    // --- Try typical streaming APIs (SDKs differ) ---
    // 1) Some SDKs provide a `.stream` helper (original code).
    const completions = (openai as any)?.chat?.completions;

    // If SDK offers a stream(...) method that returns a stream-like object compatible with streamText:
    if (typeof completions?.stream === "function") {
      const streamResult = await completions.stream({
        model: OPENAI_MODEL,
        messages: chatMessages,
        temperature: 0.2,
      });
      // streamText from 'ai' expects the SDK stream shape in many examples.
      if (typeof streamText === "function") {
        return streamText(streamResult);
      }
      // fallback if streamText is not available
      if (streamResult?.body) {
        return new Response(streamResult.body, {
          status: 200,
          headers: { "Content-Type": "text/event-stream" },
        });
      }
    }

    // 2) Fallback: SDK supports create(..., { stream: true }) and returns a Response-like object
    if (typeof completions?.create === "function") {
      const result = await completions.create({
        model: OPENAI_MODEL,
        messages: chatMessages,
        temperature: 0.2,
        // Many SDKs use `stream: true` to request streaming responses
        stream: true,
      });

      // If the SDK returns an object with a readable `body` (like fetch Response), return it directly:
      if (result?.body) {
        return new Response(result.body, {
          status: 200,
          headers: { "Content-Type": "text/event-stream" },
        });
      }

      // If `streamText` is available and expects the SDK result, use it:
      if (typeof streamText === "function") {
        return streamText(result);
      }

      // Otherwise return a JSON fallback (non-streaming)
      if (result?.toString) {
        return new Response(String(result), { status: 200 });
      }
    }

    // 3) If we got here, the SDK shape wasn't recognized — as a last resort call a non-streaming create (if exists)
    if (typeof completions?.create === "function") {
      const result = await completions.create({
        model: OPENAI_MODEL,
        messages: chatMessages,
        temperature: 0.2,
        stream: false,
      });

      // Try to extract text from a typical response structure
      const text =
        result?.choices?.map((c: any) => c.message?.content ?? c.text ?? "").join("\n") ??
        JSON.stringify(result);

      return new Response(text, { status: 200, headers: { "Content-Type": "text/plain;charset=utf-8" } });
    }

    return new Response("OpenAI SDK shape not recognized. Check SDK docs.", { status: 500 });
  } catch (err: any) {
    log("Mail assistant error:", err);
    const body = typeof err === "string" ? err : err?.message ?? "Internal Server Error";
    return new Response(`Internal Server Error: ${body}`, { status: 500 });
  }
}
