# DMHCA Admin Panel - Complete Guide

## 🎉 Your Website is Now Fully Editable!

You can change ANY content on your DMHCA website without touching code. Everything is managed through your admin panel at: `http://localhost:3000/admin`

**Login:** Use password `Dmhca@2026`

---

## What Can You Edit?

### ✅ Complete Website Pages
- **Home Page**: All 10 sections (hero, programs, career, accreditation, learning, partners, events, trainers, reviews, training partners)
- **About Pages**: Main about page, mission & vision, leadership team
- **Legal Pages**: Privacy policy, terms & conditions, refund policy
- **Contact**: Contact information, FAQ
- **Any Custom Page**: Create new pages as needed

### ✅ Content Management
- **Courses/Programs**: Add fellowships, PG diplomas, certificates
- **Faculty**: Add faculty members with photos and bios
- **Reviews**: Manage student testimonials
- **Media Library**: Upload and organize images, videos, documents
- **Contact Inquiries**: View form submissions

---

## How To Use Each Section

### 1. Pages Editor (Edit All Website Content)

**Location:** Admin → Pages

**What You Can Do:**
- Edit home page sections individually
- Change about page content
- Update legal pages (privacy, terms, refund)
- Create new custom pages

**How It Works:**
1. Click on a page from the sidebar (or create new)
2. Edit the page title
3. Edit content in JSON format (structured data)
4. Click "Save Changes"
5. Changes appear instantly on website

**Content Format:**
Pages use JSON format which looks like this:
```json
{
  "sections": [
    {
      "type": "heading",
      "content": "Your Heading"
    },
    {
      "type": "paragraph",
      "content": "Your text here..."
    },
    {
      "type": "image",
      "url": "https://your-image-url.jpg",
      "alt": "Image description"
    }
  ]
}
```

**💡 Tip:** Check [PAGE_EDITOR_GUIDE.md](/PAGE_EDITOR_GUIDE.md) for complete examples and structure templates.

---

### 2. Media Library (Images & Videos)

**Location:** Admin → Media Library

**What You Can Do:**
- Upload images, videos, and documents
- Organize files by type (images/videos/documents)
- Get public URLs for use in pages
- Add alt text for SEO
- Delete unused files

**How To Use:**
1. Click "Upload Media"
2. Select files (images, videos, PDFs, etc.)
3. Click on any file to view details and copy URL
4. Use the URL in your page content

**Best Practices:**
- Upload high-quality images (but not too large - optimize first)
- Use descriptive alt text for each image
- Organize files with clear names
- Delete unused media to save space

---

### 3. Courses/Programs

**Location:** Admin → Courses

**What You Can Do:**
- Add new medical programs
- Edit existing courses
- Set program details (duration, fees, eligibility)
- Upload course images
- Mark courses as featured

**Course Types:**
- Fellowship programs
- PG Diploma courses
- Certificate programs

---

### 4. Faculty

**Location:** Admin → Faculty

**What You Can Do:**
- Add faculty members
- Upload faculty photos
- Add bio and qualifications
- Set specializations
- Mark as featured faculty

---

### 5. Reviews/Testimonials

**Location:** Admin → Reviews

**What You Can Do:**
- Add student testimonials
- Include student photos
- Set ratings (1-5 stars)
- Publish/unpublish reviews

---

### 6. Inquiries

**Location:** Admin → Inquiries

**What You Can Do:**
- View contact form submissions
- See student queries
- Check contact details
- Monitor inquiry trends

---

## Common Tasks

### Task 1: Change Home Page Hero Section

1. Go to **Admin → Pages**
2. Click "+ Home - Hero Section" (if not created yet)
3. Add content like:
```json
{
  "title": "Transform Your Medical Career",
  "subtitle": "World-class fellowships and diploma programs for doctors",
  "backgroundImage": "https://your-image-url.jpg",
  "buttons": [
    {
      "text": "Explore Programs",
      "url": "/courses",
      "style": "primary"
    },
    {
      "text": "Contact Us",
      "url": "/contact",
      "style": "secondary"
    }
  ]
}
```
4. Click "Save Changes"

### Task 2: Upload an Image

1. Go to **Admin → Media Library**
2. Click "Upload Media"
3. Select your image file
4. Add alt text (description)
5. Click on uploaded image to copy URL
6. Use URL in your page content

### Task 3: Add a New Course

1. Go to **Admin → Courses**
2. Click "+ Add New Course"
3. Fill in course details:
   - Title
   - Category (Fellowship/PG Diploma/Certificate)
   - Duration
   - Fees
   - Description
   - Eligibility
4. Upload course image
5. Save

### Task 4: Update About Page

1. Go to **Admin → Pages**
2. Click "About DMHCA" or create "+ About DMHCA"
3. Edit content:
```json
{
  "sections": [
    {
      "type": "heading",
      "level": "h1",
      "content": "About DMHCA"
    },
    {
      "type": "paragraph",
      "content": "Delhi Medical Health Care Academy is..."
    },
    {
      "type": "image",
      "url": "https://your-image-url.jpg",
      "alt": "DMHCA Campus"
    },
    {
      "type": "heading",
      "level": "h2",
      "content": "Our Mission"
    },
    {
      "type": "list",
      "items": [
        "Excellence in medical education",
        "Practical hands-on training",
        "Career advancement support"
      ]
    }
  ]
}
```
4. Save changes

---

## Important Tips

### ✅ DO:
- **Upload images first** to Media Library, then use their URLs
- **Save frequently** while editing
- **Use descriptive titles** and alt text
- **Preview changes** on the live website
- **Keep JSON syntax valid** (proper quotes, commas)
- **Read the Page Editor Guide** for examples

### ❌ DON'T:
- Don't use single quotes in JSON (use double quotes: `"text"`)
- Don't forget commas between items
- Don't leave trailing commas at end of lists
- Don't use very large uncompressed images
- Don't delete pages that are linked from other pages

---

## JSON Format Quick Reference

### Basic Structure
```json
{
  "sections": [
    { "type": "heading", "content": "Title" },
    { "type": "paragraph", "content": "Text..." }
  ]
}
```

### Common Content Types

**Heading:**
```json
{
  "type": "heading",
  "level": "h1",
  "content": "Main Heading"
}
```

**Paragraph:**
```json
{
  "type": "paragraph",
  "content": "Your text content here..."
}
```

**Image:**
```json
{
  "type": "image",
  "url": "https://your-cdn.com/image.jpg",
  "alt": "Description for accessibility"
}
```

**List:**
```json
{
  "type": "list",
  "items": ["Item 1", "Item 2", "Item 3"]
}
```

**Button:**
```json
{
  "type": "button",
  "text": "Click Here",
  "url": "/your-page",
  "style": "primary"
}
```

---

## Troubleshooting

### "Invalid JSON" Error
**Problem:** Content won't save  
**Solution:** Check for:
- Missing or extra commas
- Single quotes instead of double quotes
- Unclosed brackets or braces
- Use jsonlint.com to validate

### Changes Not Showing
**Problem:** Edited page but website looks the same  
**Solution:**
- Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)
- Clear browser cache
- Wait 30 seconds (caching delay)

### Image Not Displaying
**Problem:** Image URL shows broken image  
**Solution:**
- Check if URL is accessible in new browser tab
- Upload image to Media Library first
- Copy correct public URL
- Ensure URL starts with `https://`

### Can't Login to Admin
**Problem:** Wrong password error  
**Solution:**
- Use password: `Dmhca@2026`
- Check caps lock is off
- Clear browser cookies
- Try different browser

---

## File Structure (Technical Reference)

```
/admin/                       # Admin panel
  /pages                      # Page editor
  /courses                    # Course management
  /faculty                    # Faculty management
  /reviews                    # Review management
  /media                      # Media library
  /inquiries                  # Contact inquiries

Database Tables:
  - pages                     # Website page content
  - programs                  # Courses/programs
  - faculty                   # Faculty members
  - reviews                   # Student reviews
  - inquiries                 # Contact form submissions
  - media                     # Uploaded files

Storage:
  - media bucket              # Stores uploaded images/videos
```

---

## Support & Resources

### Documentation
- **[PAGE_EDITOR_GUIDE.md](./PAGE_EDITOR_GUIDE.md)** - Detailed content structure examples
- **[QUICK_START.md](./QUICK_START.md)** - 5-minute setup guide
- **[ADMIN_PANEL_GUIDE.md](./ADMIN_PANEL_GUIDE.md)** - Admin features guide

### Quick Links
- Admin Panel: http://localhost:3000/admin
- Website: http://localhost:3000
- Supabase Dashboard: https://supabase.com/dashboard/project/ycglhgaovbncbbvnsvyg

### Contact
If you need help:
1. Check the guide documents first
2. Verify JSON syntax at jsonlint.com
3. Check browser console for errors (F12 → Console tab)

---

## Next Steps

1. **Start with Pages**: Go to Admin → Pages and create your first page
2. **Upload Some Media**: Add images to use in your content
3. **Add a Course**: Create your first medical program
4. **Customize Home Page**: Edit the hero section with your content
5. **Add Faculty**: Include your teaching staff
6. **Get Familiar**: Explore each section and test features

---

**Remember:** All changes are REAL and go live immediately. No "demo mode" - you're editing the actual website! 🚀

**Your admin panel is ready to use. Start creating amazing content for DMHCA!**
