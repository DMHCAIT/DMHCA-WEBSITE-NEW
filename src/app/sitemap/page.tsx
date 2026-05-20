import Link from 'next/link';
import { getAdminSupabase, supabaseConfigured } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

const COURSE_CATEGORIES = [
  { name: 'Radiology Courses', slug: 'radiology-courses' },
  { name: 'Cardiology Courses', slug: 'cardiology-courses' },
  { name: 'Internal Medicine Courses', slug: 'internal-medicine-courses' },
  { name: 'Obstetrics and Gynecology Courses', slug: 'obstetrics-and-gynecology-courses' },
  { name: 'Critical Care Medicine Courses', slug: 'critical-care-medicine-courses' },
  { name: 'Emergency Medicine Courses', slug: 'emergency-medicine-courses' },
  { name: 'Paediatrics Courses', slug: 'paediatrics-courses' },
  { name: 'Embryology Courses', slug: 'embryology-courses' },
  { name: 'Oncology Courses', slug: 'oncology-courses' },
  { name: 'Cosmetology Courses', slug: 'cosmetology-courses' },
  { name: 'Clinical Cardiology Courses', slug: 'clinical-cardiology-courses' },
  { name: 'Clinical Embryology Courses', slug: 'clinical-embryology-courses' },
  { name: 'Neurology Courses', slug: 'neurology-courses' },
  { name: 'Echocardiography Courses', slug: 'echocardiography-courses' },
  { name: 'Endocrinology Courses', slug: 'endocrinology-courses' },
  { name: 'Diabetology Courses', slug: 'diabetology-courses' },
];

const OTHER_PAGES = [
  { name: 'Blog', href: '/blog' },
  { name: 'About Us', href: '/about-dmhca' },
  { name: 'Contact Us', href: '/contact-us' },
  { name: 'Terms and Conditions', href: '/terms-and-conditions' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Refund Policy', href: '/refund-policy' },
];

async function getCourses() {
  if (!supabaseConfigured) return [];
  try {
    const sb = getAdminSupabase();
    const { data } = await sb
      .from('programs')
      .select('id, title, slug')
      .order('title');
    return data || [];
  } catch {
    return [];
  }
}

export default async function SitemapPage() {
  const courses = await getCourses();

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Sitemap</h1>
        <p className="text-slate-600 mb-8">Complete list of all pages on DMHCA website</p>

        {/* Top Medical Courses */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            <Link href="/top-medical-courses" className="text-sky-700 hover:text-sky-800">
              Top Medical Courses
            </Link>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {COURSE_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="text-sky-600 hover:text-sky-800 hover:underline text-sm"
              >
                • {cat.name}
              </Link>
            ))}
          </div>
        </section>

        {/* List of Medical Courses */}
        {courses.length > 0 && (
          <section className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">List of Medical Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {courses.map((course) => (
                <Link
                  key={course.id}
                  href={`/courses/${course.slug}`}
                  className="text-sky-600 hover:text-sky-800 hover:underline text-sm"
                >
                  • {course.title}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* City-Wise Courses */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">City-Wise Medical Courses</h2>
          <p className="text-sm text-slate-600 mb-4">
            All course categories are available for the following cities:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 text-sm mb-4">
            {[
              'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad',
              'Kerala', 'Tamil Nadu', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow',
              'Coimbatore', 'Mysore', 'Nagpur', 'Kochi', 'Chandigarh', 'Indore'
            ].map((city) => (
              <span key={city} className="text-slate-700">{city}</span>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Example city pages:</p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link href="/radiology-courses/delhi" className="text-sky-600 hover:underline">
                Radiology in Delhi
              </Link>
              <Link href="/cardiology-courses/bangalore" className="text-sky-600 hover:underline">
                Cardiology in Bangalore
              </Link>
              <Link href="/cosmetology-courses/mumbai" className="text-sky-600 hover:underline">
                Cosmetology in Mumbai
              </Link>
              <Link href="/embryology-courses/chennai" className="text-sky-600 hover:underline">
                Embryology in Chennai
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            <Link href="/blog" className="text-sky-700 hover:text-sky-800">Blog</Link>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              'how-to-crack-neet-pg',
              'courses-after-mbbs-in-india',
              'scope-of-radiology',
              'scope-of-cardiology',
              'scope-of-cosmetology',
              'scope-of-paediatrics',
              'scope-of-oncology',
              'scope-of-neurology',
              'how-to-become-a-radiologist',
              'how-to-become-a-cardiologist',
              'how-to-become-an-embryologist',
              'how-to-become-a-pediatrician',
            ].map((slug) => (
              <Link 
                key={slug} 
                href={`/blog/${slug}`} 
                className="text-sky-600 hover:text-sky-800 hover:underline text-sm"
              >
                • {slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
              </Link>
            ))}
          </div>
        </section>

        {/* Other Pages */}
        <section className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Other Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {OTHER_PAGES.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="text-sky-600 hover:text-sky-800 hover:underline text-sm"
              >
                • {page.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Note */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Add more courses, blog posts, and pages through your admin panel. 
            They will automatically appear in this sitemap.
          </p>
        </div>
      </div>
    </main>
  );
}
