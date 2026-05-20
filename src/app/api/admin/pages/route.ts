import { NextResponse } from 'next/server';
import { getAdminSupabase, supabaseConfigured } from '@/lib/supabase';
import { isAdminAuthenticated } from '@/lib/admin-auth';

async function guard() {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!supabaseConfigured) return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 });
  return null;
}

export async function PUT(req: Request) {
  const g = await guard(); if (g) return g;
  const body = await req.json();
  const { id, title, content } = body ?? {};
  if (!id || !title) return NextResponse.json({ error: 'id and title are required' }, { status: 400 });
  const sb = getAdminSupabase();
  const { error } = await sb.from('pages').upsert({ id, title, content: content ?? {} });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
