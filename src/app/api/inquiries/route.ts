import { NextResponse } from 'next/server';
import { getAdminSupabase, supabaseConfigured } from '@/lib/supabase';

// PUBLIC endpoint: anyone can submit a contact / enroll inquiry.
// No auth required. Validates basic shape.
export async function POST(req: Request) {
  if (!supabaseConfigured) return NextResponse.json({ error: 'Not configured' }, { status: 500 });
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); }

  const name = String(body.name ?? '').trim();
  const email = body.email ? String(body.email).trim() : null;
  const phone = body.phone ? String(body.phone).trim() : null;
  const course = body.course ? String(body.course).trim() : null;
  const message = body.message ? String(body.message).trim() : null;
  const source_page = body.source_page ? String(body.source_page).trim().slice(0, 200) : null;

  if (!name || name.length < 2) return NextResponse.json({ error: 'Name is required' }, { status: 400 });
  if (!email && !phone) return NextResponse.json({ error: 'Email or phone is required' }, { status: 400 });
  if (name.length > 200 || (email?.length ?? 0) > 200 || (phone?.length ?? 0) > 50 || (message?.length ?? 0) > 2000) {
    return NextResponse.json({ error: 'Field too long' }, { status: 400 });
  }

  const sb = getAdminSupabase();
  const { error } = await sb.from('inquiries').insert({ name, email, phone, course, message, source_page });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
