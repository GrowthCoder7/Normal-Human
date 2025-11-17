// src/app/api/gen/route.ts  (app router)
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.text(); // forward raw body to local generator
    const upstream = await fetch('http://localhost:8001/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    });

    // forward status and body (supports streaming)
    const headers = new Headers(upstream.headers);
    headers.delete('transfer-encoding'); // next may not allow it
    return new NextResponse(upstream.body, {
      status: upstream.status,
      headers,
    });
  } catch (err) {
    console.error('/api/gen proxy error', err);
    return NextResponse.json({ error: 'proxy failed' }, { status: 500 });
  }
}
