import { NextResponse } from 'next/server';
import { getAdminSupabase, supabaseConfigured } from '@/lib/supabase';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { programs as fileSeed } from '@/lib/data';

type AnyProg = Record<string, unknown> & { id?: string; slug?: string; title?: string; category?: string };

export async function POST() {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!supabaseConfigured) return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 });

  const rows = (fileSeed as AnyProg[])
    .filter((p) => typeof p.id === 'string' && typeof p.slug === 'string' && typeof p.title === 'string' && typeof p.category === 'string')
    .map((p) => ({
      id: p.id as string,
      slug: p.slug as string,
      title: p.title as string,
      category: p.category as string,
      published: true,
      data: p, // store whole object as jsonb for fidelity
    }));

  if (rows.length === 0) return NextResponse.json({ count: 0 });

  const sb = getAdminSupabase();
  const { error } = await sb.from('programs').upsert(rows, { onConflict: 'id' });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ count: rows.length });
}
