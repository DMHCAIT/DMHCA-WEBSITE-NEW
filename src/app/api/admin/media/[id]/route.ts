import { NextResponse } from 'next/server';
import { getAdminSupabase, supabaseConfigured } from '@/lib/supabase';
import { isAdminAuthenticated } from '@/lib/admin-auth';

async function guard() {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!supabaseConfigured) return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 });
  return null;
}

// DELETE - Remove media item
export async function DELETE(
  req: Request,
  props: { params: Promise<{ id: string }> }
) {
  const g = await guard(); if (g) return g;
  
  const params = await props.params;
  const { id } = params;
  const sb = getAdminSupabase();
  
  // Get media record to find storage path
  const { data: media, error: fetchError } = await sb
    .from('media')
    .select('storage_path')
    .eq('id', id)
    .single();
  
  if (fetchError || !media) {
    return NextResponse.json({ error: 'Media not found' }, { status: 404 });
  }
  
  // Delete from storage
  const { error: storageError } = await sb.storage
    .from('media')
    .remove([media.storage_path]);
  
  if (storageError) {
    console.error('Storage delete error:', storageError);
    // Continue anyway to clean up database
  }
  
  // Delete from database
  const { error: dbError } = await sb
    .from('media')
    .delete()
    .eq('id', id);
  
  if (dbError) {
    return NextResponse.json({ error: dbError.message }, { status: 500 });
  }
  
  return NextResponse.json({ message: 'Media deleted successfully' });
}

// PATCH - Update media metadata
export async function PATCH(
  req: Request,
  props: { params: Promise<{ id: string }> }
) {
  const g = await guard(); if (g) return g;
  
  const params = await props.params;
  const { id } = params;
  const body = await req.json();
  const { alt_text } = body;
  
  const sb = getAdminSupabase();
  const { data, error } = await sb
    .from('media')
    .update({ alt_text })
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  
  return NextResponse.json({ media: data });
}
