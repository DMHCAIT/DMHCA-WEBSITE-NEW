# How to Import All Courses to Your Database

This guide will help you add all 130+ medical courses to your database.

## Method 1: Using psql (Recommended)

1. **Open Terminal**

2. **Connect to Supabase**:
   ```bash
   PGPASSWORD=Santhu@2026 psql -h db.ycglhgaovbncbbvnsvyg.supabase.co -p 5432 -U postgres -d postgres
   ```

3. **Run the Import**:
   ```sql
   \i supabase/courses-import.sql
   ```

4. **Verify Import**:
   ```sql
   SELECT COUNT(*) FROM programs;
   SELECT title, category FROM programs LIMIT 10;
   ```

5. **Exit**:
   ```
   \q
   ```

## Method 2: Using Supabase Dashboard

1. Go to https://supabase.com/dashboard
2. Select your project (ycglhgaovbncbbvnsvyg)
3. Click "SQL Editor" in left sidebar
4. Click "New Query"
5. Copy contents of `supabase/courses-import.sql`
6. Paste into query editor
7. Click "Run"

## Method 3: Using Admin Panel (Manual)

If you prefer adding courses one by one:

1. Go to http://localhost:3000/admin
2. Login with password: `Dmhca@2026`
3. Click "Courses" in sidebar
4. Click "Add New Course"
5. Fill in details for each course

## What Gets Imported

The SQL file includes:

- ✅ **27 Certificate Courses** (6 months duration)
- ✅ **45 Fellowship Programs** (1-2 years)
- ✅ **32 PG Diploma Courses** (1-2 years)

**Total: 104 courses**

## After Import

Once imported, you need to add through admin panel:

1. **Course Descriptions** - Add detailed course information
2. **Eligibility Criteria** - Entry requirements for each course
3. **Fees** - Course pricing
4. **Images** - Upload course images from Media Library
5. **Curriculum** - Detailed syllabus and modules

## Course Categories Available

The courses are organized into these categories:

- Certificate
- Fellowship
- PG Diploma

You can also filter by specialization:
- Radiology
- Cardiology
- Obstetrics & Gynecology
- Critical Care
- Emergency Medicine
- Pediatrics
- Embryology
- Oncology
- Cosmetology
- And more...

## URL Structure Created

After import, all these URLs will work:

### Course Category Pages
- `/radiology-courses/`
- `/cardiology-courses/`
- `/cosmetology-courses/`
- etc. (16 categories)

### City-Wise Pages
- `/radiology-courses/delhi/`
- `/cardiology-courses/bangalore/`
- `/cosmetology-courses/mumbai/`
- etc. (70+ cities supported)

### Individual Course Pages
- `/courses/certificate-in-clinical-cardiology/`
- `/courses/fellowship-in-radiology/`
- `/courses/pg-diploma-in-dermatology/`
- etc.

### Blog Posts
- `/blog/how-to-crack-neet-pg/`
- `/blog/scope-of-radiology/`
- `/blog/how-to-become-a-cardiologist/`
- etc. (22 posts)

## Cities Supported

City-wise course pages work for all these locations:

**Major Cities**: Delhi, Mumbai, Bangalore, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad, Jaipur, Lucknow

**States**: Kerala, Tamil Nadu, Karnataka, Maharashtra, West Bengal, Gujarat, Telangana, Andhra Pradesh, Uttarakhand, Assam, Odisha, Chhattisgarh

**Other Cities**: Coimbatore, Madurai, Salem, Mysore, Nagpur, Indore, Bhopal, Chandigarh, Kochi, Goa, Visakhapatnam, and 50+ more

## Next Steps

1. ✅ Import courses using Method 1 above
2. ✅ Verify courses appear at http://localhost:3000/admin/courses
3. ✅ Edit each course to add descriptions and images
4. ✅ Test category pages (e.g., `/radiology-courses/`)
5. ✅ Test city pages (e.g., `/radiology-courses/delhi/`)
6. ✅ Push to GitHub when ready
7. ✅ Deploy to production (Vercel)

## Support

If you encounter any issues:

1. Check database connection in Supabase dashboard
2. Verify all environment variables in `.env.local`
3. Check terminal for error messages
4. Review the `programs` table structure matches schema

## Pro Tips

- ✨ Start with 10-15 complete courses (with images & descriptions)
- ✨ Use Media Library to organize course images
- ✨ Add real photos of facilities and faculty
- ✨ Write compelling course descriptions
- ✨ Keep fees competitive and clearly stated
- ✨ Add contact information for inquiries

---

**Remember**: The imported courses are placeholders. Add your own unique descriptions, images, and details to make them valuable to students!
