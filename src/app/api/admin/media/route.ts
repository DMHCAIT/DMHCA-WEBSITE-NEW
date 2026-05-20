import { NextResponse } from 'next/server';
import { getAdminSupabase, supabaseConfigured } from '@/lib/supabase';
import { isAdminAuthenticated } from '@/lib/admin-auth';

async function guard() {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!supabaseConfigured) return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 });
  return null;
}

// GET - List all media
export async function GET(req: Request) {
  const g = await guard(); if (g) return g;
  
  const url = new URL(req.url);
  const fileType = url.searchParams.get('type');
  
  const sb = getAdminSupabase();
  let query = sb.from('media').select('*').order('created_at', { ascending: false });
  
  if (fileType) {
    query = query.eq('file_type', fileType);
  }
  
  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ media: data });
}

// POST - Upload new media
export async function POST(req: Request) {
  const g = await guard(); if (g) return g;
  
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const altText = formData.get('altText') as string || '';
    const uploadedBy = formData.get('uploadedBy') as string || 'admin';
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }
    
    // Validate file type
    const fileType = file.type.startsWith('image/') ? 'image' 
                   : file.type.startsWith('video/') ? 'video' 
                   : 'document';
    
    // Generate unique filename
    const timestamp = Date.now();
    const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const filename = `${timestamp}_${sanitizedName}`;
    const storagePath = `${fileType}s/${filename}`;
    
    const sb = getAdminSupabase();
    
    // Upload to Supabase Storage
    const fileBuffer = await file.arrayBuffer();
    const { data: uploadData, error: uploadError } = await sb.storage
      .from('media')
      .upload(storagePath, fileBuffer, {
        contentType: file.type,
        upsert: false
      });
    
    if (uploadError) {
      console.error('Storage upload error:', uploadError);
      return NextResponse.json({ error: `Upload failed: ${uploadError.message}` }, { status: 500 });
    }
    
    // Get public URL
    const { data: { publicUrl } } = sb.storage
      .from('media')
      .getPublicUrl(storagePath);
    
    // Get image dimensions if it's an image
    let width = null;
    let height = null;
    if (fileType === 'image' && typeof Image !== 'undefined') {
      try {
        // For server-side, we'll skip dimension detection or use a library
        // Client can send dimensions or we can extract on client side
      } catch (e) {
        console.log('Could not get image dimensions:', e);
      }
    }
    
    // Save metadata to database
    const { data: mediaRecord, error: dbError } = await sb
      .from('media')
      .insert({
        filename,
        original_name: file.name,
        file_type: fileType,
        mime_type: file.type,
        file_size: file.size,
        storage_path: storagePath,
        public_url: publicUrl,
        alt_text: altText,
        width,
        height,
        uploaded_by: uploadedBy
      })
      .select()
      .single();
    
    if (dbError) {
      // Clean up uploaded file
      await sb.storage.from('media').remove([storagePath]);
      return NextResponse.json({ error: `Database error: ${dbError.message}` }, { status: 500 });
    }
    
    return NextResponse.json({ media: mediaRecord, message: 'Upload successful' });
    
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ 
      error: `Upload failed: ${error instanceof Error ? error.message : 'Unknown error'}` 
    }, { status: 500 });
  }
}
