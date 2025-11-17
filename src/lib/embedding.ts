// src/lib/embedding.ts
// Server-side code (Next.js server runtime). Use global fetch in Next.js 15.
const EMBEDDING_URL = process.env.EMBEDDING_URL ?? 'http://localhost:8000/embed';
const EXPECTED_DIM = 384; // we choose 384

export async function getEmbeddings(text: string): Promise<number[]> {
  const res = await fetch(EMBEDDING_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Embedding server ${res.status}: ${body}`);
  }

  const json = await res.json();

  // Case A: simple flat embedding array: { embedding: [num, num, ...] }
  if (Array.isArray((json as any).embedding) && typeof (json as any).embedding[0] === 'number') {
    const arr = (json as any).embedding as number[];
    if (arr.length === EXPECTED_DIM) return arr;
    // if it's 1536, maybe it's flattened 4x384: try to split into chunks and average
    if (arr.length % EXPECTED_DIM === 0) {
      const rows = arr.length / EXPECTED_DIM;
      const out = new Array(EXPECTED_DIM).fill(0);
      for (let r = 0; r < rows; r++) {
        for (let i = 0; i < EXPECTED_DIM; i++) {
          out[i] += arr[r * EXPECTED_DIM + i];
        }
      }
      for (let i = 0; i < EXPECTED_DIM; i++) out[i] /= rows;
      return out;
    }
    // otherwise return as-is but warn
    console.warn(`Embedding length ${arr.length} != ${EXPECTED_DIM}; returning raw array`);
    return arr;
  }

  // Case B: xenova style: { embedding: [ { dims:[4,384], data: { "0":..., "1":... }, size:1536 } ] }
  if (Array.isArray((json as any).embedding) && typeof (json as any).embedding[0] === 'object') {
    const embObj = (json as any).embedding[0];

    // If embObj.data is an index->value map (like the long output you pasted)
    if (embObj.data && typeof embObj.data === 'object' && !Array.isArray(embObj.data)) {
      // reconstruct flattened array
      const size = embObj.size ?? Object.keys(embObj.data).length;
      const flat: number[] = new Array(size);
      for (let i = 0; i < size; i++) {
        flat[i] = Number(embObj.data[String(i)]) ?? 0;
      }

      // If size equals EXPECTED_DIM -> good
      if (flat.length === EXPECTED_DIM) return flat;

      // If flat is multiple rows (e.g. 4x384), average rows
      if (flat.length % EXPECTED_DIM === 0) {
        const rows = flat.length / EXPECTED_DIM;
        const out = new Array(EXPECTED_DIM).fill(0);
        for (let r = 0; r < rows; r++) {
          for (let i = 0; i < EXPECTED_DIM; i++) {
            out[i] += flat[r * EXPECTED_DIM + i];
          }
        }
        for (let i = 0; i < EXPECTED_DIM; i++) out[i] /= rows;
        return out;
      }

      // fallback: try to take first EXPECTED_DIM elements
      if (flat.length >= EXPECTED_DIM) return flat.slice(0, EXPECTED_DIM);

      throw new Error('Embedding returned fewer dimensions than expected');
    }

    // If embObj.data is an array
    if (Array.isArray(embObj.data)) {
      const arr = embObj.data as number[];
      if (arr.length === EXPECTED_DIM) return arr;
      if (arr.length % EXPECTED_DIM === 0) {
        const rows = arr.length / EXPECTED_DIM;
        const out = new Array(EXPECTED_DIM).fill(0);
        for (let r = 0; r < rows; r++) {
          for (let i = 0; i < EXPECTED_DIM; i++) out[i] += arr[r * EXPECTED_DIM + i];
        }
        for (let i = 0; i < EXPECTED_DIM; i++) out[i] /= rows;
        return out;
      }
    }

    // If embObj has nested arrays e.g. embedding: [[...],[...],[...],[...]]
    if (Array.isArray((json as any).embedding) && Array.isArray((json as any).embedding[0])) {
      const nested = (json as any).embedding as number[][];
      const rows = nested.length;
      const out = new Array(EXPECTED_DIM).fill(0);
      for (let r = 0; r < rows; r++) {
        for (let i = 0; i < Math.min(nested[r].length, EXPECTED_DIM); i++) {
          out[i] += nested[r][i];
        }
      }
      for (let i = 0; i < EXPECTED_DIM; i++) out[i] /= rows;
      return out;
    }
  }

  // Last-resort: collect numbers and try to create EXPECTED_DIM vector
  const nums: number[] = [];
  (function collect(o: any) {
    if (typeof o === 'number') nums.push(o);
    else if (Array.isArray(o)) for (const v of o) collect(v);
    else if (o && typeof o === 'object') for (const k of Object.keys(o)) collect(o[k]);
  })(json);

  if (nums.length >= EXPECTED_DIM) return nums.slice(0, EXPECTED_DIM);
  throw new Error('Unable to parse embedding response into 384-d vector');
}
