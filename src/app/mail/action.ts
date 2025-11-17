/* eslint-disable @typescript-eslint/no-unused-vars */
'use server';
import { createStreamableValue } from 'ai/rsc';

/**
 * Helper: read SSE stream from upstream fetch Response and call cb(chunk)
 * Expects messages formatted as: data: <chunk>\n\n
 */
async function streamSSEToCallback(resp: Response, onChunk: (chunk: string) => void) {
  if (!resp.body) return;
  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    // process complete events
    let idx;
    while ((idx = buffer.indexOf('\n\n')) !== -1) {
      const raw = buffer.slice(0, idx);
      buffer = buffer.slice(idx + 2);
      // raw may contain multiple lines (e.g., 'data: chunk\n')
      const lines = raw.split(/\r?\n/);
      for (const line of lines) {
        if (line.startsWith('data:')) {
          const d = line.replace(/^data:\s?/, '');
          // unescape \n used above
          onChunk(d.replace(/\\n/g, '\n'));
        }
      }
    }
  }
  // flush any remaining (rare)
  if (buffer.length) {
    const lines = buffer.split(/\r?\n/);
    for (const line of lines) {
      if (line.startsWith('data:')) {
        onChunk(line.replace(/^data:\s?/, '').replace(/\\n/g, '\n'));
      }
    }
  }
}

export async function generateEmail(context: string, prompt: string) {
  const stream = createStreamableValue('');

  (async () => {
    try {
      const upstream = await fetch('http://localhost:8001/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `You are an AI email assistant. TIME: ${new Date().toISOString()}\n\nCONTEXT:\n${context}\n\nPROMPT:\n${prompt}\n\nEmail:`,
          max_new_tokens: 320,
          temperature: 0.6,
        }),
      });

      if (!upstream.ok) {
        const txt = await upstream.text().catch(() => 'upstream error');
        stream.update(`\n[Error from generator: ${upstream.status}] ${txt}`);
        stream.done();
        return;
      }

      await streamSSEToCallback(upstream, (delta) => {
        stream.update(delta);
      });
      stream.done();
    } catch (err) {
      stream.update(`\n[Generation error] ${String(err)}`);
      stream.done();
    }
  })();

  return { output: stream.value };
}

export async function generate(input: string) {
  const stream = createStreamableValue('');

  (async () => {
    try {
      const upstream = await fetch('http://localhost:8001/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `You are a short autocomplete assistant. Continue the following text:\n\n${input}`,
          max_new_tokens: 64,
          temperature: 0.2,
        }),
      });

      if (!upstream.ok) {
        const txt = await upstream.text().catch(() => 'upstream error');
        stream.update(`\n[Error from generator: ${upstream.status}] ${txt}`);
        stream.done();
        return;
      }

      await streamSSEToCallback(upstream, (delta) => {
        stream.update(delta);
      });
      stream.done();
    } catch (err) {
      stream.update(`\n[Generation error] ${String(err)}`);
      stream.done();
    }
  })();

  return { output: stream.value };
}
