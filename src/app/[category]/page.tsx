import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAdminSupabase, supabaseConfigured } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

const CATEGORIES: Record<string, string> = {
  'radiology-courses': 'Radiology Courses',
  'cardiology-courses': 'Cardiology Courses',
  'internal-medicine-courses': 'Internal Medicine Courses',
  'obstetrics-and-gynecology-courses': 'Obstetrics and Gynecology Courses',
  'critical-care-medicine-courses': 'Critical Care Medicine Courses',
  'emergency-medicine-courses': 'Emergency Medicine Courses',
  'paediatrics-courses': 'Paediatrics Courses',
  'embryology-courses': 'Embryology Courses',
  'oncology-courses': 'Oncology Courses',
  'cosmetology-courses': 'Cosmetology Courses',
  'clinical-cardiology-courses': 'Clinical Cardiology Courses',
  'clinical-embryology-courses': 'Clinical Embryology Courses',
  'neurology-courses': 'Neurology Courses',
  'echocardiography-courses': 'Echocardiography Courses',
  'endocrinology-courses': 'Endocrinology Courses',
  'diabetology-courses': 'Diabetology Courses',
};

async function getCoursesByCategory(category: string) {
  if (!supabaseConfigured) return [];
  try {
    const sb = getAdminSupabase();
    const { data } = await sb
      .from('programs')
      .select('*')
      .ilike('category', `%${category}%`)
      .order('title');
    return data || [];
  } catch {
    return [];
  }
}

export default async function CategoryPage(props: { params: Promise<{ category: string }> }) {
  const params = await props.params;
  const { category } = params;
  
  const categoryName = CATEGORIES[category];
  if (!categoryName) {
    notFound();
  }

  const courses = await getCoursesByCategory(categoryName);

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-4 text-sm text-slate-600">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/top-medical-courses" className="hover:text-sky-600">Medical Courses</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">{categoryName}</span>
        </div>

        {/* Header */}
        <h1 className="text-4xl font-bold text-slate-900 mb-4">{categoryName}</h1>
        <p className="text-slate-600 mb-8">
          Explore our comprehensive {categoryName.toLowerCase()} programs including fellowships, 
          PG diplomas, and certificates designed for practicing doctors.
        </p>

        {/* Courses Grid */}
        {courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.slug}`}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition"
              >
                {course.image && (
                  <div className="h-48 overflow-hidden bg-slate-100">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900 mb-2">{course.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                    <span>⏱️ {course.duration}</span>
                    <span>📚 {course.category}</span>
                  </div>
                  {course.description && (
                    <p className="text-sm text-slate-600 line-clamp-2">{course.description}</p>
                  )}
                  <div className="mt-4">
                    <span className="text-sky-600 font-medium text-sm">View Details →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
            <div className="text-5xl mb-4">📚</div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">No Courses Yet</h2>
            <p className="text-slate-600 mb-4">
              Courses for this category will be added soon. Check back later or contact us for more information.
            </p>
            <Link
              href="/contact-us"
              className="inline-block px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
            >
              Contact Us
            </Link>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 bg-sky-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to Advance Your Career?</h2>
          <p className="mb-6 opacity-90">
            Join thousands of doctors who have enhanced their skills with our programs
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact-us"
              className="px-6 py-3 bg-white text-sky-600 rounded-lg font-semibold hover:bg-slate-50 transition"
            >
              Get Started
            </Link>
            <Link
              href="/top-medical-courses"
              className="px-6 py-3 bg-sky-700 text-white rounded-lg font-semibold hover:bg-sky-800 transition"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
