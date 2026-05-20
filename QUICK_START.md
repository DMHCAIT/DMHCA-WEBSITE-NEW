# DMHCA Admin Panel - Quick Start Guide

## 🚀 Getting Started (5 Minutes)

### Step 1: Access Admin Panel

1. Make sure your development server is running:
   ```bash
   npm run dev
   ```

2. Open your browser and go to: **http://localhost:3000/admin**

3. Login with password: **Dmhca@2026**

### Step 2: Set Up Supabase Storage (Required for Media Uploads)

1. Go to: https://supabase.com/dashboard/project/ycglhgaovbncbbvnsvyg

2. Click **SQL Editor** in the left sidebar

3. Run these two SQL files in order:
   - First: `supabase/schema.sql` (creates database tables)
   - Second: `supabase/storage-setup.sql` (creates media storage bucket)

4. Click **"Run"** for each file

✅ **Setup Complete!** You can now upload media files.

### Step 3: Test Your Admin Panel

1. **Upload Your First Image:**
   - In admin panel, click **"Media Library"** in sidebar
   - Click **"Choose File"** and select an image
   - Click **"Upload"**
   - Your image should appear in the grid!

2. **Add a Course:**
   - Click **"Courses"** in sidebar
   - Click **"Add new course"** button
   - Fill in the details
   - Click **"Create course"**

3. **Add Faculty:**
   - Click **"Faculty"** in sidebar
   - Fill in the "Add new" form
   - Upload a faculty photo in Media Library first
   - Copy the URL and paste in "Image URL" field
   - Click **"Add faculty"**

## 📋 What You Can Do

### ✅ Full Content Management

- **Courses** - Add, edit, delete all your medical courses
- **Faculty** - Manage faculty profiles with photos
- **Reviews** - Add and moderate student testimonials  
- **Inquiries** - Track and respond to contact form submissions
- **Pages** - Edit About, Privacy Policy, Terms, etc.
- **Media** - Upload and organize images, videos, PDFs

### ✅ Media Management

- Drag & drop file uploads
- Image and video support
- Copy URLs instantly
- Filter by file type
- Delete unused files
- Add alt text for SEO

### ✅ SEO & Publishing

- Control published/draft status
- Add meta descriptions
- Manage display order
- Real-time preview

## 🎯 Common Tasks

### Adding Course with Image

1. Upload course image in **Media Library**
2. Click image → **Copy URL**
3. Go to **Courses** → **Add new course**
4. Paste URL in the `"image"` field in the JSON data:
   ```json
   {
     "image": "https://your-copied-url.jpg",
     ...
   }
   ```
5. Fill other fields and **Save**

### Managing Inquiries

1. Go to **Inquiries**
2. New submissions show as **Status: New**
3. Click on inquiry to view details
4. Update status as you follow up:
   - **Contacted** - After initial outreach
   - **Enrolled** - Student joined
   - **Closed** - Not interested/completed

### Editing Website Pages

1. Go to **Pages**
2. Select page (About, Privacy, etc.)
3. Edit content in JSON format
4. Click **Save changes**
5. Changes appear immediately on website

## 📱 Admin Panel Features

| Feature | Location | What It Does |
|---------|----------|--------------|
| Dashboard | `/admin` | Overview with stats |
| Courses | `/admin/courses` | Manage all courses |
| Faculty | `/admin/faculty` | Add/edit faculty profiles |
| Reviews | `/admin/reviews` | Moderate testimonials |
| Inquiries | `/admin/inquiries` | Track leads |
| Pages | `/admin/pages` | Edit static pages |
| Media Library | `/admin/media` | Upload & manage files |

## 🔧 Troubleshooting

### "Supabase not configured" Error
- Check `.env.local` exists with all variables
- Restart dev server: Stop (Ctrl+C) and run `npm run dev`

### Media Upload Fails
- Run `supabase/storage-setup.sql` in Supabase SQL Editor
- Check file size (must be under 50 MB)
- Verify file type (JPG, PNG, GIF, WebP, MP4, WebM)

### Can't Login
- Password is: `Dmhca@2026`
- Check `ADMIN_PASSWORD` in `.env.local`
- Clear browser cookies

### Changes Not Showing
- Refresh browser (Cmd/Ctrl + Shift + R)
- Check "Published" status is enabled
- Clear cache if needed

## 📚 Documentation

- **Full Admin Guide:** [ADMIN_PANEL_GUIDE.md](./ADMIN_PANEL_GUIDE.md)
- **Storage Setup:** [SUPABASE_STORAGE_SETUP.md](./SUPABASE_STORAGE_SETUP.md)
- **Database Schema:** [supabase/schema.sql](./supabase/schema.sql)

## 🆘 Need Help?

1. Check documentation files above
2. Look at browser console for errors (F12 → Console)
3. Verify all environment variables are set
4. Make sure Supabase SQL scripts were run

## ✨ Pro Tips

1. **Upload images before adding courses** - easier workflow
2. **Use consistent naming** - helps stay organized
3. **Add alt text to images** - better SEO and accessibility
4. **Set display order** - control how content appears
5. **Use draft status** - prepare content before publishing
6. **Regular backups** - export important data periodically

---

**You're all set!** 🎉 Start managing your DMHCA website content through the admin panel.
