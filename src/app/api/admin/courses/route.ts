import { NextResponse } from 'next/server';
import { getAdminSupabase, supabaseConfigured } from '@/lib/supabase';
import { isAdminAuthenticated } from '@/lib/admin-auth';

async function guard() {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!supabaseConfigured) return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 });
  return null;
}

export async function GET() {
  const g = await guard(); if (g) return g;
  const sb = getAdminSupabase();
  const { data, error } = await sb.from('programs').select('*').order('updated_at', { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ rows: data });
}

export async function POST(req: Request) {
  const g = await guard(); if (g) return g;
  const body = await req.json();
  const { id, slug, title, category, published = true, data } = body ?? {};
  if (!id || !slug || !title || !category) {
    return NextResponse.json({ error: 'id, slug, title, category are required' }, { status: 400 });
  }
  const sb = getAdminSupabase();
  const { error } = await sb.from('programs').insert({ id, slug, title, category, published, data: data ?? {} });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, id });
}
