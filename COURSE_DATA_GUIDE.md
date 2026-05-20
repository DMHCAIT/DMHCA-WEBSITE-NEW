# Course Data Integrity Guide

## Summary
✅ **All 74 courses are now properly configured and will appear consistently every time you run the application.**

## What Was Done

### 1. Added 7 Missing Courses
Added the following courses that had images but were missing from data.ts:
- Certificate Course in HIV Medicine
- Fellowship in Breast Imaging  
- Fellowship in Obstetrics Ultrasound
- Fellowship in Pediatric Rheumatology
- Fellowship in Reproductive Endocrinology
- Fellowship in Women's Imaging
- PG Diploma in Nutrition and Dietetics

### 2. Fixed Image Path Issues
- Corrected "Pediatric Neurology" → "Pediatrics Neurology" (matching actual filename)
- Renamed "Women's Imaging" file to use standard apostrophe (web-safe)

### 3. Made Counts Dynamic
Updated [src/app/top-medical-courses/page.tsx](src/app/top-medical-courses/page.tsx) to calculate category counts dynamically from the programs array instead of hardcoding, ensuring accuracy even if courses are added/removed.

## Current Course Distribution

| Category | Count |
|----------|-------|
| **Certificate** | 12 |
| **Fellowship** | 51 |
| **PG Diploma** | 11 |
| **Total** | **74** |

## Validation Script

A validation script has been created at the root: `validate_courses.py`

### How to Use
```bash
python validate_courses.py
```

This will check:
- ✓ Total course count
- ✓ Category distribution
- ✓ Image file existence
- ✓ Unique IDs

Run this anytime to ensure data integrity!

## How to Ensure Courses Always Appear

### 1. **Static Data Approach (Current Setup)**
The application uses static data from [src/lib/data.ts](src/lib/data.ts). This means:
- ✅ Courses are **always available** - no database dependency
- ✅ **Fast loading** - no database queries needed
- ✅ **Consistent** - same data every time
- ✅ Changes are permanent once committed to the codebase

### 2. **Development Server**
Start the server:
```bash
npm run dev
```

Access at: **http://localhost:3000/top-medical-courses**

### 3. **If You See Missing Courses**
1. Run the validation script:
   ```bash
   python validate_courses.py
   ```

2. If validation fails, check:
   - Is the course in `src/lib/data.ts`?
   - Does the image file exist in `public/dmhca_images/`?
   - Is the image path correct (no special characters)?

3. Clear cache and restart:
   ```bash
   rm -rf .next
   npm run dev
   ```

## Course Data Structure

Each course in data.ts should have:
```typescript
{
  id: "course-slug",
  slug: "course-slug",
  title: "Course Title",
  category: "Fellowship" | "PG Diploma" | "Certificate",
  duration: "XX Week",
  lessons: number,
  fee: "₹XX,XXX",
  level: "Beginner" | "Intermediate" | "Expert",
  eligibility: "...",
  overview: "...",
  whatYouLearn: [...],
  modules: [...],
  enrolled: number,
  quizzes: number,
  maxStudents: number,
  language: "English",
  curriculum: [...],
  description: "...",
  image: "/dmhca_images/Category/Course Name.jfif",
  tag: "",
  externalUrl: "..."
}
```

## Image File Guidelines

### Directory Structure
```
public/
  dmhca_images/
    Certificate/
    Fellowship/
    PG Diploma/
```

### Naming Convention
- Use the **exact course title** as the filename
- Format: `Category Type in Course Name.jfif`
- Examples:
  - `Certificate Course in HIV Medicine.jfif`
  - `Fellowship in Breast Imaging.jfif`
  - `PG Diploma in Nutrition and Dietetics.jfif`

### Important Notes
- ⚠️ **Avoid special Unicode characters** in filenames (use straight quotes/apostrophes)
- ✓ Use standard apostrophes `'` not curly quotes `'`
- ✓ Match exact capitalization between filename and data.ts

## Troubleshooting

### Issue: Courses Not Showing
**Solution:** 
1. Check `src/lib/data.ts` has the course
2. Verify image exists and path matches
3. Clear cache: `rm -rf .next`
4. Restart: `npm run dev`

### Issue: Image 404 Errors
**Solution:**
1. Run validation: `python validate_courses.py`
2. Check filename matches exactly (including apostrophes/quotes)
3. Ensure image is in correct subfolder

### Issue: Count Mismatch
**Solution:**
- The counts are now calculated dynamically, so they should always be correct
- If showing wrong number, check for duplicate IDs: `python validate_courses.py`

## Maintenance

### Adding a New Course
1. Add course object to `export const programs = [...]` in [src/lib/data.ts](src/lib/data.ts)
2. Add corresponding image to `public/dmhca_images/[Category]/`
3. Run validation: `python validate_courses.py`
4. Restart dev server (it will auto-reload)

### Removing a Course
1. Remove course object from [src/lib/data.ts](src/lib/data.ts)
2. Optionally remove image file
3. Run validation: `python validate_courses.py`

## Production Deployment

Before deploying:
1. ✅ Run validation: `python validate_courses.py`
2. ✅ Test locally: `npm run dev`
3. ✅ Build: `npm run build`
4. ✅ Test build: `npm run start`

All course data will be bundled with the application, ensuring consistency across all environments.

---

**Last Validated:** $(date)
**Total Courses:** 74 (12 Certificate + 51 Fellowship + 11 PG Diploma)
**Status:** ✅ All systems operational
