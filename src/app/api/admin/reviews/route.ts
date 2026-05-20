import { NextResponse } from 'next/server';
import { getAdminSupabase, supabaseConfigured } from '@/lib/supabase';
import { isAdminAuthenticated } from '@/lib/admin-auth';

async function guard() {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!supabaseConfigured) return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 });
  return null;
}

export async function POST(req: Request) {
  const g = await guard(); if (g) return g;
  const body = await req.json();
  const { name, course = null, rating = null, text, image_url = null, display_order = 0, published = true } = body ?? {};
  if (!name || !text) return NextResponse.json({ error: 'name and text are required' }, { status: 400 });
  const sb = getAdminSupabase();
  const { data, error } = await sb.from('reviews').insert({ name, course, rating, text, image_url, display_order, published }).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ row: data });
}
