import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabaseConfigured = Boolean(url && anonKey);

let _admin: SupabaseClient | null = null;
let _anon: SupabaseClient | null = null;

/** Server-only client with full DB access. Never import in client components. */
export function getAdminSupabase(): SupabaseClient {
  if (!url || !serviceKey) {
    throw new Error('Supabase not configured: set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY');
  }
  if (!_admin) {
    _admin = createClient(url, serviceKey, { auth: { persistSession: false } });
  }
  return _admin;
}

/** Anon (public) client for reads on the website. */
export function getAnonSupabase(): SupabaseClient {
  if (!url || !anonKey) {
    throw new Error('Supabase not configured');
  }
  if (!_anon) {
    _anon = createClient(url, anonKey, { auth: { persistSession: false } });
  }
  return _anon;
}
