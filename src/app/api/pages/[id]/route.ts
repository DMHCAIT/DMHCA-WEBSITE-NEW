import { NextRequest, NextResponse } from 'next/server';
import { getAdminSupabase, supabaseConfigured } from '@/lib/supabase';

export async function GET(
  req: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const { id } = params;
  
  if (!supabaseConfigured) {
    return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 });
  }

  try {
    const sb = getAdminSupabase();
    const { data, error } = await sb
      .from('pages')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      // If page doesn't exist, return null (not an error)
      if (error.code === 'PGRST116') {
        return NextResponse.json({ data: null }, { status: 200 });
      }
      throw error;
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error('Error fetching page:', error);
    return NextResponse.json(
      { error: 'Failed to fetch page' },
      { status: 500 }
    );
  }
}
