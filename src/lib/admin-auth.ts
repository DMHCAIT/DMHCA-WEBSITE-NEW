import { cookies } from 'next/headers';

export const ADMIN_COOKIE = 'dmhca_admin';
const SESSION_TTL_SECONDS = 60 * 60 * 12; // 12 hours

function getSecret(): string {
  const s = process.env.ADMIN_SECRET;
  if (!s || s.length < 16) {
    throw new Error('ADMIN_SECRET env var is missing or too short (need ≥ 16 chars)');
  }
  return s;
}

function b64url(bytes: ArrayBuffer | Uint8Array): string {
  const u8 = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  let str = '';
  for (let i = 0; i < u8.length; i++) str += String.fromCharCode(u8[i]);
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function hmac(message: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(message));
  return b64url(sig);
}

/** Build a signed token: base64(timestamp).hmac(timestamp, secret) */
export async function createSessionToken(): Promise<string> {
  const ts = Date.now().toString();
  const tsB64 = b64url(new TextEncoder().encode(ts));
  const sig = await hmac(ts, getSecret());
  return `${tsB64}.${sig}`;
}

export async function verifySessionToken(token: string | undefined): Promise<boolean> {
  if (!token || !token.includes('.')) return false;
  const [tsB64, sig] = token.split('.');
  if (!tsB64 || !sig) return false;
  let ts: string;
  try {
    const padded = tsB64.replace(/-/g, '+').replace(/_/g, '/');
    ts = atob(padded + '==='.slice((padded.length + 3) % 4));
  } catch {
    return false;
  }
  const expected = await hmac(ts, getSecret());
  // constant-time-ish compare
  if (expected.length !== sig.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ sig.charCodeAt(i);
  if (diff !== 0) return false;
  const tsNum = Number(ts);
  if (!Number.isFinite(tsNum)) return false;
  return Date.now() - tsNum < SESSION_TTL_SECONDS * 1000;
}

/** Server Component / Route Handler helper. */
export async function isAdminAuthenticated(): Promise<boolean> {
  const store = await cookies();
  const c = store.get(ADMIN_COOKIE);
  return verifySessionToken(c?.value);
}

export function adminAuthEnvReady(): { ready: boolean; missing: string[] } {
  const missing: string[] = [];
  if (!process.env.ADMIN_PASSWORD) missing.push('ADMIN_PASSWORD');
  if (!process.env.ADMIN_SECRET || (process.env.ADMIN_SECRET ?? '').length < 16) missing.push('ADMIN_SECRET (≥16 chars)');
  return { ready: missing.length === 0, missing };
}

export const SESSION_MAX_AGE = SESSION_TTL_SECONDS;
