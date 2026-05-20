# Admin Panel - Complete Guide

## Overview

The DMHCA admin panel provides a comprehensive content management system for your website. You can manage courses, faculty, reviews, inquiries, pages, and media files.

## Getting Started

### 1. Access the Admin Panel

Navigate to: `http://localhost:3000/admin` (or your production domain + `/admin`)

**Login Credentials:**
- Password: `Dmhca@2026`

### 2. Dashboard

The dashboard shows:
- Total counts for Courses, Faculty, Reviews, Inquiries, and Media Files
- Quick links to common actions
- Overview of your content

## Features

### 📚 Courses Management

**Location:** `/admin/courses`

- **View all courses** organized by category (Fellowship, PG Diploma, Certificate)
- **Add new courses** with complete details:
  - Basic info (ID, slug, title, category)
  - Course data in JSON format (overview, modules, curriculum, FAQs)
  - Images and media
  - Published status
- **Edit existing courses** - Update any field
- **Delete courses** - Remove courses you no longer offer
- **Bulk import** - Seed courses from JSON file

**Course Data Structure:**
```json
{
  "duration": "12 months",
  "lessons": 50,
  "fee": "₹2,50,000",
  "level": "Advanced",
  "eligibility": "MBBS/MD",
  "overview": "Program description...",
  "whatYouLearn": ["Point 1", "Point 2"],
  "modules": [],
  "curriculum": [],
  "description": "Detailed description",
  "image": "https://your-image-url.jpg",
  "faqs": []
}
```

### 👨‍⚕️ Faculty Management

**Location:** `/admin/faculty`

- **Add faculty members** with:
  - Name, role, qualification
  - Biography
  - Profile image (upload or URL)
  - Display order
  - Published status
- **Edit faculty** profiles
- **Reorder** faculty display
- **Delete** faculty members

### ⭐ Reviews Management

**Location:** `/admin/reviews`

- **Add student reviews** with:
  - Student name
  - Course taken
  - Rating (1-5 stars)
  - Review text
  - Student photo (optional)
  - Display order
- **Edit reviews**
- **Moderate** - Publish/unpublish
- **Delete** reviews

### 📧 Inquiries

**Location:** `/admin/inquiries`

- **View all inquiries** from contact forms
- **Filter by status:** New, Contacted, Enrolled, Closed
- **Track lead status**
- **View inquiry details:** Name, email, phone, course interest, message
- **Update status** as you follow up

### 📄 Pages Management

**Location:** `/admin/pages`

Edit static pages like:
- About Us
- Privacy Policy
- Terms & Conditions
- Refund Policy

**Features:**
- Rich content editing with JSON structure
- Preview changes
- Update page content directly

### 📁 Media Library

**Location:** `/admin/media`

**Upload & Manage Media:**
- **Upload images and videos** - Drag & drop or click to upload
- **Organize files** - Filter by type (images, videos, documents)
- **Add alt text** - For accessibility
- **Copy URLs** - For use in courses, pages, etc.
- **Delete files** - Remove unused media
- **Preview** - View full-size images and play videos

**Supported Formats:**
- Images: JPG, PNG, GIF, WebP, SVG
- Videos: MP4, WebM, MOV
- Max file size: 50 MB

**Using Media in Content:**
1. Upload media in Media Library
2. Click on the media item to view details
3. Copy the public URL
4. Paste URL in course image field, faculty photo, etc.

**OR** use the built-in image uploader:
1. In any form with image upload
2. Click "Choose from Library"
3. Select from existing media
4. OR click "Upload New" to upload directly

## Common Tasks

### Adding a New Course

1. Go to `/admin/courses`
2. Click "Add new course"
3. Fill in basic information:
   - ID: unique identifier (e.g., `fellowship-cardiology`)
   - Slug: URL-friendly name (e.g., `fellowship-cardiology`)
   - Title: Display name
   - Category: Fellowship, PG Diploma, or Certificate
4. Add course data in JSON format (see structure above)
5. Set published status
6. Click "Create course"

### Uploading Media

1. Go to `/admin/media`
2. Click "Choose File" or drag & drop
3. Add alt text (optional but recommended)
4. Click "Upload"
5. Copy the public URL for use elsewhere

### Managing Inquiries

1. Go to `/admin/inquiries`
2. Review new inquiries (Status: New)
3. Click on an inquiry to see details
4. Update status to:
   - **Contacted** - When you've reached out
   - **Enrolled** - When they join a course
   - **Closed** - When no longer pursuing

### Editing Static Pages

1. Go to `/admin/pages`
2. Select the page to edit
3. Modify content in the editor
4. Click "Save changes"

## Tips & Best Practices

### Images
- Use web-optimized images (WebP recommended)
- Keep images under 2 MB for faster loading
- Add descriptive alt text for accessibility
- Use consistent image sizes for better UI

### Courses
- Keep course IDs lowercase with hyphens
- Ensure slugs match IDs for consistency
- Test JSON formatting before saving
- Upload course images before adding courses

### SEO
- Write clear, descriptive course titles
- Add comprehensive course descriptions
- Use relevant keywords naturally
- Keep URLs clean and readable

### Security
- Never share admin credentials
- Log out when done
- Use strong passwords
- Regularly review and clean up old content

## Troubleshooting

### "Supabase not configured" Error
- Check `.env.local` has all Supabase variables
- Restart development server after changes
- Verify credentials are correct

### Upload Fails
- Check file size (must be under 50 MB)
- Verify file type is supported
- Check Supabase storage bucket exists
- Review storage policies (see SUPABASE_STORAGE_SETUP.md)

### Changes Not Appearing
- Clear browser cache
- Check published status is enabled
- Refresh the page
- Verify data was saved (check dashboard counts)

### Login Issues
- Verify password: `Dmhca@2026`
- Check `ADMIN_PASSWORD` in `.env.local`
- Clear cookies and try again

## Technical Details

### Database Tables
- `programs` - Course data
- `faculty` - Faculty members
- `reviews` - Student reviews
- `inquiries` - Contact form submissions
- `pages` - Static page content
- `media` - Uploaded files metadata

### Storage
- Media files stored in Supabase Storage
- Bucket: `media`
- Public read access
- Admin write/delete access

### API Endpoints
- `/api/admin/courses` - Course CRUD
- `/api/admin/faculty` - Faculty CRUD
- `/api/admin/reviews` - Reviews CRUD
- `/api/admin/inquiries` - Inquiry management
- `/api/admin/pages` - Page editing
- `/api/admin/media` - Media upload/management

## Support

For technical issues or questions:
1. Check this documentation
2. Review `SUPABASE_STORAGE_SETUP.md` for storage setup
3. Check browser console for errors
4. Verify environment variables in `.env.local`

## Updates & Maintenance

- Regularly back up your database
- Review and respond to inquiries weekly
- Update course information as needed
- Clean up unused media files monthly
- Monitor storage usage in Supabase dashboard
