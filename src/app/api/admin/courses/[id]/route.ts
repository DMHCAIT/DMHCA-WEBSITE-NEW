import { NextResponse } from 'next/server';
import { getAdminSupabase, supabaseConfigured } from '@/lib/supabase';
import { isAdminAuthenticated } from '@/lib/admin-auth';

async function guard() {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!supabaseConfigured) return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 });
  return null;
}

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const g = await guard(); if (g) return g;
  const { id } = await params;
  const sb = getAdminSupabase();
  const { data, error } = await sb.from('programs').select('*').eq('id', id).maybeSingle();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!data) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(data);
}

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const g = await guard(); if (g) return g;
  const { id } = await params;
  const body = await req.json();
  const update: Record<string, unknown> = {};
  for (const k of ['slug', 'title', 'category', 'published', 'data'] as const) {
    if (k in body) update[k] = body[k];
  }
  const sb = getAdminSupabase();
  const { error } = await sb.from('programs').update(update).eq('id', id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const g = await guard(); if (g) return g;
  const { id } = await params;
  const sb = getAdminSupabase();
  const { error } = await sb.from('programs').delete().eq('id', id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
