/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import { createStreamableValue } from "ai/rsc";
import { log } from "console";

/**
 * Helper: keep original SSE->callback parser in case you later want to support upstream SSE.
 * (Not used by the current Gemini non-streaming implementation, but kept for future.)
 */
async function streamSSEToCallback(resp: Response, onChunk: (chunk: string) => void) {
  if (!resp.body) return;
  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    let idx;
    while ((idx = buffer.indexOf("\n\n")) !== -1) {
      const raw = buffer.slice(0, idx);
      buffer = buffer.slice(idx + 2);
      const lines = raw.split(/\r?\n/);
      for (const line of lines) {
        if (line.startsWith("data:")) {
          const d = line.replace(/^data:\s?/, "");
          onChunk(d.replace(/\\n/g, "\n"));
        }
      }
    }
  }
  if (buffer.length) {
    const lines = buffer.split(/\r?\n/);
    for (const line of lines) {
      if (line.startsWith("data:")) {
        onChunk(line.replace(/^data:\s?/, "").replace(/\\n/g, "\n"));
      }
    }
  }
}

/** Small dedupe helper to avoid identical repeated chunks flooding UI */
function makeDedupeEmitter(streamUpdate: (s: string) => void) {
  let lastEmitted = "";
  return (delta: string) => {
    const norm = delta.replace(/\s+/g, " ").trim();
    if (norm.length === 0) return;
    if (norm === lastEmitted) return;
    if (norm.startsWith(lastEmitted)) {
      const newPart = norm.slice(lastEmitted.length).trim();
      if (newPart.length > 0) {
        streamUpdate(newPart);
        lastEmitted = lastEmitted + newPart;
      }
      return;
    }
    streamUpdate(norm);
    lastEmitted = norm;
  };
}

/**
 * Server action: generateEmail(context, prompt)
 * - Calls Google Generative Language `generate` endpoint (non-streaming).
 * - Returns { output } where output is readable by readStreamableValue().
 *
 * Required env:
 * - process.env.GEN_API_KEY  (preferred for simple server-to-server)
 * OR
 * - process.env.GEN_BEARER_TOKEN (if you have OAuth bearer tokens)
 *
 * Optionally:
 * - process.env.GEN_MODEL (e.g. "gemini-2.5-flash" or "text-bison-001")
 *
 * NOTE: This implementation uses the typical v1beta2 REST path:
 *   https://generativelanguage.googleapis.com/v1beta2/models/{MODEL}:generate?key=API_KEY
 * Adapt `GEN_MODEL` and endpoint if your environment requires a different path/version.
 */

const GEN_API_KEY = 'AIzaSyBrdS7mlYM18Jv5cOzGlC8lj9Dgu8QElVM';
const GEN_BEARER_TOKEN = process.env.GEN_BEARER_TOKEN;
const GEN_MODEL = process.env.GEN_MODEL ?? "gemini-2.5-flash";

function buildPrompt(context: string, prompt: string) {
  return `You are an AI email assistant. TIME: ${new Date().toISOString()}

CONTEXT:
${context}

USER PROMPT:
${prompt}

INSTRUCTIONS:
- Output only the email body, do NOT include subject, salutations header metadata, or signatures unless the user asked.
- Be polite, professional and concise (unless user asks otherwise).
- Do not repeat context verbatim.
- Stop when the email body is finished.
`;
}

export async function generateEmail(context: string, prompt: string) {
  const stream = createStreamableValue("");

  (async () => {
    try {
      if (!GEN_API_KEY && !GEN_BEARER_TOKEN) {
        stream.update("[Configuration error] GEN_API_KEY or GEN_BEARER_TOKEN not set");
        stream.done();
        return;
      }

      const fullPrompt = buildPrompt(context ?? "", prompt ?? "");

      // Build URL for generate endpoint
      const baseUrl = `https://generativelanguage.googleapis.com/v1beta2/models/${encodeURIComponent(
        GEN_MODEL
      )}:generate`;
      const url = GEN_API_KEY ? `${baseUrl}?key=${encodeURIComponent(GEN_API_KEY)}` : baseUrl;

      // Body shape for many v1beta2 examples: { prompt: { text: "..." }, temperature, maxOutputTokens }
      const body = {
        prompt: { text: fullPrompt },
        temperature: 0.3,
        maxOutputTokens: 512,
      };

      const headers: Record<string, string> = { "Content-Type": "application/json" };
      if (GEN_BEARER_TOKEN) headers["Authorization"] = `Bearer ${GEN_BEARER_TOKEN}`;

      const res = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const txt = await res.text().catch(() => "upstream error");
        log("Gemini generate error", res.status, txt);
        stream.update(`\n[Error from generator: ${res.status}] ${txt}`);
        stream.done();
        return;
      }

      const json = await res.json().catch(() => null);

      // Try a few common response shapes robustly:
      let textOutput = "";

      // v1beta2 common field: candidates array
      if (json?.candidates && Array.isArray(json.candidates) && json.candidates.length > 0) {
        textOutput =
          (json.candidates[0].output ?? json.candidates[0].content ?? json.candidates[0].text ?? "")
            .toString();
      } else if (json?.output?.text) {
        textOutput = String(json.output.text);
      } else if (typeof json?.text === "string") {
        textOutput = json.text;
      } else {
        // collect any strings found in nested object
        const collectStrings: string[] = [];
        (function collect(o: any) {
          if (!o) return;
          if (typeof o === "string") collectStrings.push(o);
          else if (Array.isArray(o)) for (const v of o) collect(v);
          else if (typeof o === "object") for (const k of Object.keys(o)) collect((o as any)[k]);
        })(json);
        textOutput = collectStrings.join("\n\n").trim();
      }

      if (!textOutput || textOutput.trim().length === 0) {
        stream.update("\n[Generator returned empty body]");
        stream.done();
        return;
      }

      stream.update(textOutput.trim());
      stream.done();
    } catch (err: any) {
      log("generateEmail error", err);
      stream.update(`\n[Generation error] ${String(err?.message ?? err)}`);
      stream.done();
    }
  })();

  return { output: stream.value };
}

/**
 * Short autocomplete used by editor (Cmd/Ctrl+J).
 * Kept minimal and returns the generated text as a single chunk (non-streaming).
 */
export async function generate(input: string) {
  const stream = createStreamableValue("");

  (async () => {
    try {
      if (!GEN_API_KEY && !GEN_BEARER_TOKEN) {
        stream.update("[Configuration error] GEN_API_KEY or GEN_BEARER_TOKEN not set");
        stream.done();
        return;
      }

      const fullPrompt = `You are a short autocomplete assistant. Continue the following text without repeating content:

${input}

INSTRUCTIONS:
- Keep it short and coherent (aim 20-80 tokens).
- Do not repeat the previous lines exactly.
`;

      const baseUrl = `https://generativelanguage.googleapis.com/v1beta2/models/${encodeURIComponent(
        GEN_MODEL
      )}:generate`;
      const url = GEN_API_KEY ? `${baseUrl}?key=${encodeURIComponent(GEN_API_KEY)}` : baseUrl;

      const body = {
        prompt: { text: fullPrompt },
        temperature: 0.2,
        maxOutputTokens: 64,
      };

      const headers: Record<string, string> = { "Content-Type": "application/json" };
      if (GEN_BEARER_TOKEN) headers["Authorization"] = `Bearer ${GEN_BEARER_TOKEN}`;

      const res = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const txt = await res.text().catch(() => "upstream error");
        stream.update(`\n[Error from generator: ${res.status}] ${txt}`);
        stream.done();
        return;
      }

      const json = await res.json().catch(() => null);

      // Extract text similarly
      let textOutput = "";
      if (json?.candidates && Array.isArray(json.candidates) && json.candidates.length > 0) {
        textOutput =
          (json.candidates[0].output ?? json.candidates[0].content ?? json.candidates[0].text ?? "")
            .toString();
      } else if (json?.output?.text) {
        textOutput = String(json.output.text);
      } else if (typeof json?.text === "string") {
        textOutput = json.text;
      } else {
        const collectStrings: string[] = [];
        (function collect(o: any) {
          if (!o) return;
          if (typeof o === "string") collectStrings.push(o);
          else if (Array.isArray(o)) for (const v of o) collect(v);
          else if (typeof o === "object") for (const k of Object.keys(o)) collect((o as any)[k]);
        })(json);
        textOutput = collectStrings.join("\n\n").trim();
      }

      if (!textOutput || textOutput.trim().length === 0) {
        stream.update("\n[Generator returned empty body]");
        stream.done();
        return;
      }

      stream.update(textOutput.trim());
      stream.done();
    } catch (err: any) {
      log("generate error", err);
      stream.update(`\n[Generation error] ${String(err?.message ?? err)}`);
      stream.done();
    }
  })();

  return { output: stream.value };
}
