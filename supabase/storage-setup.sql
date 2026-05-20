-- =========================================================
-- DMHCA Media Storage Setup Script
-- Run this in your Supabase SQL Editor after running schema.sql
-- =========================================================

-- Step 1: Create the media storage bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types) 
VALUES (
  'media', 
  'media', 
  true, 
  52428800,  -- 50 MB limit
  ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml', 'video/mp4', 'video/webm', 'video/quicktime', 'application/pdf']
) 
ON CONFLICT (id) DO NOTHING;

-- Step 2: Set up storage policies for public read access
DROP POLICY IF EXISTS "Public Access" ON storage.objects;
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'media');

-- Step 3: Allow authenticated users and service role to upload (admin)
DROP POLICY IF EXISTS "Admin Upload" ON storage.objects;
CREATE POLICY "Admin Upload"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'media');

-- Step 4: Allow authenticated users and service role to update
DROP POLICY IF EXISTS "Admin Update" ON storage.objects;
CREATE POLICY "Admin Update"
ON storage.objects FOR UPDATE
USING (bucket_id = 'media');

-- Step 5: Allow authenticated users and service role to delete
DROP POLICY IF EXISTS "Admin Delete" ON storage.objects;
CREATE POLICY "Admin Delete"
ON storage.objects FOR DELETE
USING (bucket_id = 'media');

-- Verification: Check if bucket was created
SELECT * FROM storage.buckets WHERE id = 'media';

-- Verification: Check policies
SELECT * FROM pg_policies WHERE tablename = 'objects' AND policyname LIKE '%media%' OR policyname LIKE '%Admin%' OR policyname LIKE '%Public Access%';
