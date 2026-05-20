import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createSessionToken, ADMIN_COOKIE, SESSION_MAX_AGE, adminAuthEnvReady } from '@/lib/admin-auth';

export async function POST(request: Request) {
  const env = adminAuthEnvReady();
  if (!env.ready) {
    return NextResponse.json(
      { error: 'Admin auth not configured. Missing env: ' + env.missing.join(', ') },
      { status: 500 }
    );
  }

  let body: { password?: string };
  try { body = await request.json(); } catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400 }); }

  const password = body.password ?? '';
  const expected = process.env.ADMIN_PASSWORD ?? '';

  // constant-time compare
  if (password.length !== expected.length) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
  let diff = 0;
  for (let i = 0; i < password.length; i++) diff |= password.charCodeAt(i) ^ expected.charCodeAt(i);
  if (diff !== 0) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

  const token = await createSessionToken();
  const store = await cookies();
  store.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: SESSION_MAX_AGE,
  });

  return NextResponse.json({ ok: true });
}
