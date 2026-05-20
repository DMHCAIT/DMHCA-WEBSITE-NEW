# Supabase Storage Setup Guide

Follow these steps to enable media uploads in your admin panel:

## 1. Run Database Schema

1. Go to your Supabase project: https://supabase.com/dashboard/project/ycglhgaovbncbbvnsvyg
2. Navigate to **SQL Editor** in the left sidebar
3. Open and run the `supabase/schema.sql` file
4. This will create all necessary tables including the `media` table

## 2. Create Storage Bucket

1. In your Supabase dashboard, go to **Storage** in the left sidebar
2. Click **"New bucket"**
3. Name it: `media`
4. Make it **public** (check the "Public bucket" option)
5. Click **"Create bucket"**

## 3. Set Storage Policies

After creating the bucket, set up the storage policies:

1. Click on the `media` bucket
2. Go to **Policies** tab
3. Click **"New Policy"** and add these policies:

### Policy 1: Public Read Access
- **Policy name:** "Public Access"
- **Allowed operation:** SELECT
- **Policy definition:**
```sql
bucket_id = 'media'
```

### Policy 2: Admin Upload
- **Policy name:** "Admin Upload"  
- **Allowed operation:** INSERT
- **Policy definition:**
```sql
bucket_id = 'media'
```

### Policy 3: Admin Update
- **Policy name:** "Admin Update"
- **Allowed operation:** UPDATE
- **Policy definition:**
```sql
bucket_id = 'media'
```

### Policy 4: Admin Delete
- **Policy name:** "Admin Delete"
- **Allowed operation:** DELETE
- **Policy definition:**
```sql
bucket_id = 'media'
```

## Alternative: Quick SQL Setup

You can also run these SQL commands in the SQL Editor to set up storage policies:

```sql
-- Create storage bucket
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types) 
values ('media', 'media', true, 52428800, array['image/*', 'video/*', 'application/pdf']) 
on conflict (id) do nothing;

-- Storage policies
create policy "Public Access"
  on storage.objects for select
  using (bucket_id = 'media');

create policy "Admin Upload"
  on storage.objects for insert
  with check (bucket_id = 'media');

create policy "Admin Update"
  on storage.objects for update
  using (bucket_id = 'media');

create policy "Admin Delete"
  on storage.objects for delete
  using (bucket_id = 'media');
```

## 4. Test the Setup

1. Start your development server: `npm run dev`
2. Login to admin panel: http://localhost:3000/admin
   - Password: `Dmhca@2026`
3. Navigate to **Media Library** in the sidebar
4. Try uploading an image
5. The image should appear in the grid and be accessible via its public URL

## File Size and Type Limits

- **Max file size:** 50 MB (configurable in bucket settings)
- **Supported types:** 
  - Images: JPG, PNG, GIF, WebP, SVG
  - Videos: MP4, WebM, MOV
  - Documents: PDF (if needed)

## Troubleshooting

If uploads fail:

1. Check that the `media` bucket exists and is public
2. Verify storage policies are set correctly
3. Check browser console for detailed error messages
4. Ensure your Supabase environment variables are set in `.env.local`
5. Restart the development server after any environment changes

## Admin Panel Features

Once set up, you can:

- ✅ Upload images and videos through a drag-and-drop interface
- ✅ View all media in a grid layout
- ✅ Filter by type (images, videos, documents)
- ✅ Copy public URLs for use in content
- ✅ Delete unused media files
- ✅ Add alt text for accessibility
- ✅ Use the media browser when editing courses, faculty, etc.
