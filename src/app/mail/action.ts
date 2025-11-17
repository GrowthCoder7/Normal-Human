/* eslint-disable @typescript-eslint/no-unused-vars */
'use server';
import TurndownService from 'turndown';
import { createStreamableValue } from 'ai/rsc';

/**
 * Helper: forward an upstream fetch response into a createStreamableValue stream.
 * - Accepts streaming text responses (chunked) OR non-streaming JSON { text: "..." }.
 */
async function streamUpstreamToStreamable(upstreamUrl: string, bodyObj: any) {
  const stream = createStreamableValue('');

  (async () => {
    try {
      const upstream = await fetch(upstreamUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // send prompt/body already prepared by caller
        body: JSON.stringify(bodyObj),
      });

      if (!upstream.ok) {
        // Try to read error text
        const errText = await upstream.text().catch(() => upstream.statusText);
        stream.update(`\n\n[upstream error ${upstream.status}: ${errText}]`);
        stream.done();
        return;
      }

      // If upstream streams bytes (ReadableStream present) -> read chunks
      if (upstream.body) {
        const reader = upstream.body.getReader();
        const decoder = new TextDecoder();
        let done = false;
        while (!done) {
          const { value, done: rdone } = await reader.read();
          done = !!rdone;
          if (value) {
            const chunk = decoder.decode(value, { stream: true });
            stream.update(chunk);
          }
        }
        stream.done();
        return;
      }

      // If no body stream, try to parse JSON { text: '...' }
      const ct = upstream.headers.get('content-type') || '';
      if (ct.includes('application/json')) {
        const json = await upstream.json().catch(() => null);
        const text = (json && (json.text || json.output || json.result)) ?? JSON.stringify(json);
        stream.update(String(text));
        stream.done();
        return;
      }

      // Fallback: read as text
      const txt = await upstream.text().catch(() => '');
      stream.update(txt);
      stream.done();
    } catch (err) {
      console.error('streamUpstreamToStreamable error', err);
      stream.update('\n\n[local generation error]');
      stream.done();
    }
  })();

  return stream;
}

/**
 * generateEmail - used by AIComposeButton previously
 */
export async function generateEmail(context: string, prompt: string) {
  // Build a composite prompt you can send to your local generator
  const now = new Date().toLocaleString();
  const fullPrompt = `
You are an AI email assistant embedded in an email client app. Your purpose is to help the user compose emails by providing suggestions and relevant information based on the context of their previous emails.

THE TIME NOW IS ${now}

START CONTEXT BLOCK
${context ?? ''}
END OF CONTEXT BLOCK

USER PROMPT:
${prompt}

When responding, please keep in mind:
- Be helpful, clever, and articulate.
- Rely on the provided email context to inform your response.
- If the context does not contain enough information to fully address the prompt, politely give a draft response.
- Avoid apologizing for previous responses. Instead, indicate that you have updated your knowledge based on new information.
- Do not invent or speculate about anything that is not directly supported by the email context.
- Keep your response focused and relevant to the user's prompt.
- Directly output the email body only.
`;

  // Point this at your local generator. I suggest running a simple generator server at port 8001.
  const upstreamUrl = 'http://localhost:8001/generate';

  // Ask the helper to stream upstream result into a createStreamableValue
  return {
    output: await streamUpstreamToStreamable(upstreamUrl, { prompt: fullPrompt }),
  };
}

/**
 * generate - used for autocomplete (the Cmd+J shortcut)
 */
export async function generate(input: string) {
  const now = new Date().toLocaleString();
  const fullPrompt = `
ALWAYS RESPOND IN PLAIN TEXT, no html or markdown.
You are a helpful AI embedded in an email client app that is used to autocomplete sentences.
The traits of AI: helpful, clever, and articulate.
Help me complete my train of thought here: <input>${input}</input>
Keep the response short and sweet. Your output is directly concatenated to the input; do not add new lines or formatting.
  `;

  const upstreamUrl = 'http://localhost:8001/generate';

  return { output: await streamUpstreamToStreamable(upstreamUrl, { prompt: fullPrompt }) };
}
