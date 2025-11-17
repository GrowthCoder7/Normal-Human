const GEN_API_KEY = process.env.GEN_API_KEY || "AIzaSyBrdS7mlYM18Jv5cOzGlC8lj9Dgu8QElVM";
const GEN_BEARER_TOKEN = process.env.GEN_BEARER_TOKEN || "";
const GEN_MODEL = process.env.GEN_MODEL || "gemini-2.5-flash";

/** callGemini returns the raw parsed JSON from the API. */
async function callGemini(promptText: string, opts?: { temperature?: number; maxOutputTokens?: number }) {
  if (!GEN_API_KEY && !GEN_BEARER_TOKEN) {
    throw new Error("GEN_API_KEY or GEN_BEARER_TOKEN must be set");
  }

  // Build endpoint URL. If user provided a full path like "models/text-bison-001" or "models/gemini-2.5-flash",
  // inserting it after v1beta2/. Adjust if your provider expects "models/<name>:generate" vs "<name>:generate".
  // This tries to be resilient for either "gemini-2.5-flash" or "models/gemini-2.5-flash".
  const modelPath = GEN_MODEL.includes("/") ? GEN_MODEL : `models/${GEN_MODEL}`;
  const url = `https://generativelanguage.googleapis.com/v1beta2/${modelPath}:generate${GEN_API_KEY ? `?key=${GEN_API_KEY}` : ""}`;

  const body: any = {
    prompt: { text: promptText },
    temperature: typeof opts?.temperature === "number" ? opts.temperature : 0.3,
    maxOutputTokens: typeof opts?.maxOutputTokens === "number" ? opts.maxOutputTokens : 512,
  };

  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (GEN_BEARER_TOKEN) headers["Authorization"] = `Bearer ${GEN_BEARER_TOKEN}`;

  const res = await fetch(url, { method: "POST", headers, body: JSON.stringify(body) });
  const ct = res.headers.get("content-type") || "";

  if (!res.ok) {
    const txt = await res.text().catch(() => res.statusText);
    throw new Error(`Gemini request failed ${res.status}: ${txt}`);
  }

  if (ct.includes("application/json")) {
    const json = await res.json().catch(() => null);
    return json;
  }

  // fallback: plain text
  const txt = await res.text().catch(() => "");
  return { text: txt };
}

/** getTextFromResponse: tries to extract a human-readable string from Gemini response shapes */
function getTextFromResponse(json: any): string {
  if (!json) return "";

  // v1beta2 can return { candidates: [{ output: "..." }] } or { output: { text: "..." } }
  if (json?.candidates && Array.isArray(json.candidates) && json.candidates.length > 0) {
    const candidate = json.candidates[0];
    return String(candidate.output ?? candidate.content ?? candidate.text ?? "").trim();
  }
  if (json?.output?.text) return String(json.output.text).trim();
  if (typeof json?.text === "string") return json.text.trim();

  // fall back to join any string leaves
  const collect: string[] = [];
  (function walk(o: any) {
    if (!o) return;
    if (typeof o === "string") collect.push(o);
    else if (Array.isArray(o)) o.forEach(walk);
    else if (typeof o === "object") Object.values(o).forEach(walk);
  })(json);
  return collect.join("\n\n").trim();
}

/**
 * Public helper: generate text from Gemini for a single prompt
 */
export async function generateText(promptText: string, opts?: { temperature?: number; maxOutputTokens?: number }) {
  const json = await callGemini(promptText, opts);
  const text = getTextFromResponse(json);
  return text;
}