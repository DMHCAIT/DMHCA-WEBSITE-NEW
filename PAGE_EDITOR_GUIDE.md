# Website Content Editor Guide

## How to Edit Website Pages

The Pages section in your admin panel allows you to edit ALL content on your DMHCA website, including:
- Home page sections
- About pages  
- Legal pages (Privacy, Terms, Refund)
- Contact information
- Any custom pages

## Page Types Available

### Home Page Sections
- **Home - Hero Section**: Main banner with headline and call-to-action
- **Home - Programs Section**: Featured medical programs/courses
- **Home - Career Section**: Career opportunities and placement info
- **Home - Accreditation**: Accreditation badges and certifications
- **Home - Learning Experience**: Learning features and benefits
- **Home - University Partners**: Partner universities and institutions
- **Home - Events**: Upcoming events and webinars
- **Home - Top Trainers**: Featured faculty members
- **Home - Reviews**: Student testimonials
- **Home - Training Partners**: Partner organizations

### About Pages
- **About DMHCA**: Main about page
- **About - Mission & Vision**: Mission, vision, values
- **About - Leadership Team**: Management team

### Legal Pages  
- **Privacy Policy**
- **Terms and Conditions**
- **Refund Policy**

### Other
- **Contact Information**: Address, phone, email
- **FAQ**: Frequently asked questions

## Content Structure (JSON Format)

Your page content is stored in JSON format, which allows flexible structuring. Here are common patterns:

### Basic Structure
```json
{
  "sections": [
    {
      "type": "heading",
      "content": "Your Heading Text"
    },
    {
      "type": "paragraph",  
      "content": "Your paragraph text goes here..."
    }
  ]
}
```

### Content Types

#### 1. Heading
```json
{
  "type": "heading",
  "level": "h1",
  "content": "Main Heading"
}
```

#### 2. Paragraph
```json
{
  "type": "paragraph",
  "content": "Your text content with full details..."
}
```

#### 3. List
```json
{
  "type": "list",
  "style": "bullet",
  "items": [
    "First item",
    "Second item",
    "Third item"
  ]
}
```

#### 4. Image
```json
{
  "type": "image",
  "url": "https://your-image-url.jpg",
  "alt": "Description for accessibility",
  "caption": "Optional caption text"
}
```

#### 5. Button/Link
```json
{
  "type": "button",
  "text": "Learn More",
  "url": "/courses",
  "style": "primary"
}
```

#### 6. Hero Section Example
```json
{
  "hero": {
    "title": "Transform Your Medical Career",
    "subtitle": "World-class fellowship and diploma programs",
    "backgroundImage": "https://...",
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
}
```

#### 7. Features/Cards Section
```json
{
  "features": [
    {
      "icon": "📚",
      "title": "Expert Faculty",
      "description": "Learn from leading medical professionals"
    },
    {
      "icon": "🏥",
      "title": "Practical Training",
      "description": "Hands-on clinical experience"
    },
    {
      "icon": "🎓",
      "title": "Recognized Certification",
      "description": "Globally accepted certifications"
    }
  ]
}
```

#### 8. Statistics/Numbers
```json
{
  "stats": [
    {
      "value": "12,000+",
      "label": "Doctors Enrolled"
    },
    {
      "value": "74",
      "label": "Programs Offered"
    },
    {
      "value": "4.9",
      "label": "Average Rating"
    }
  ]
}
```

## Complete Page Examples

### Example 1: About Page
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
      "content": "Delhi Medical Health Care Academy (DMHCA) is a premier institution dedicated to advancing medical education..."
    },
    {
      "type": "image",
      "url": "https://your-cdn.com/about-image.jpg",
      "alt": "DMHCA Campus"
    },
    {
      "type": "heading",
      "level": "h2",
      "content": "Our Mission"
    },
    {
      "type": "paragraph",
      "content": "To provide world-class medical training..."
    },
    {
      "type": "list",
      "items": [
        "Excellence in education",
        "Practical skill development",
        "Research and innovation"
      ]
    }
  ]
}
```

### Example 2: Contact Information
```json
{
  "contact": {
    "address": {
      "line1": "Dr. MGR Hospital Courses Academy",
      "line2": "123 Medical Street",
      "city": "New Delhi",
      "state": "Delhi",
      "pincode": "110001"
    },
    "phone": [
      "+91 9876543210",
      "+91 9876543211"
    ],
    "email": "info@dmhca.in",
    "hours": {
      "weekdays": "9:00 AM - 6:00 PM",
      "weekends": "10:00 AM - 4:00 PM"
    },
    "social": {
      "facebook": "https://facebook.com/dmhca",
      "instagram": "https://instagram.com/dmhca",
      "linkedin": "https://linkedin.com/company/dmhca",
      "youtube": "https://youtube.com/@dmhca"
    }
  }
}
```

### Example 3: FAQ Page
```json
{
  "faqs": [
    {
      "question": "How long are the fellowship programs?",
      "answer": "Our fellowship programs typically range from 6 months to 2 years, depending on the specialization."
    },
    {
      "question": "Are the certifications recognized?",
      "answer": "Yes, all our programs are accredited and recognized by leading medical boards."
    },
    {
      "question": "Do you provide placement assistance?",
      "answer": "We offer comprehensive career support including placement assistance, resume building, and interview preparation."
    }
  ]
}
```

## Step-by-Step: Editing a Page

1. **Navigate to Pages**: Click "Pages" in the admin sidebar

2. **Select or Create**: 
   - Click on an existing page to edit it
   - Or click "+ [Page Name]" to create a new page

3. **Edit Title**: Update the page title in the "Page Title" field

4. **Edit Content**: 
   - Modify the JSON content in the content area
   - Follow the structure examples above
   - Make sure JSON syntax is valid (proper quotes, commas, brackets)

5. **Save**: Click "💾 Save Changes" button

6. **Verify**: Changes appear immediately on your website

## Tips for Success

### ✅ DO:
- Keep JSON syntax valid (use proper quotes and commas)
- Upload images to Media Library first, then copy URLs
- Use descriptive alt text for images (SEO + accessibility)
- Preview changes on the live site after saving
- Keep content organized with sections

### ❌ DON'T:
- Don't forget commas between items
- Don't use single quotes (use double quotes: `"text"`)
- Don't leave trailing commas at the end of lists
- Don't use special characters without escaping

## Uploading Images for Pages

1. Go to **Media Library** in admin panel
2. Upload your image
3. Click on uploaded image to view details
4. Copy the public URL
5. Use URL in your page JSON:
   ```json
   {
     "type": "image",
     "url": "paste-copied-url-here",
     "alt": "Description"
   }
   ```

## Troubleshooting

### "Invalid JSON" Error
- Check for missing/extra commas
- Ensure all quotes are double quotes (`"`)
- Validate JSON using online tools like jsonlint.com

### Changes Not Appearing
- Hard refresh the page (Cmd+Shift+R or Ctrl+Shift+R)
- Clear browser cache
- Check if page is published

### Content Not Displaying Correctly
- Verify JSON structure matches examples
- Check that all required fields are present
- Ensure image URLs are accessible

## Need Help?

- Refer to the examples in this guide
- Copy and modify existing page structures
- Use the Media Library for all images
- Contact support if you encounter issues

---

**Pro Tip**: Start by editing existing pages to understand the structure, then create new pages using similar patterns.
