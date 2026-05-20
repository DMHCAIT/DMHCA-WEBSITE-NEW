import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAdminSupabase, supabaseConfigured } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

const VALID_CATEGORIES = [
  'radiology-courses', 'cardiology-courses', 'internal-medicine-courses',
  'obstetrics-and-gynecology-courses', 'critical-care-medicine-courses',
  'emergency-medicine-courses', 'paediatrics-courses', 'embryology-courses',
  'oncology-courses', 'cosmetology-courses', 'clinical-cardiology-courses',
  'clinical-embryology-courses', 'neurology-courses', 'echocardiography-courses',
  'endocrinology-courses', 'diabetology-courses'
];

const CITIES = [
  // Major cities
  'delhi', 'mumbai', 'bangalore', 'chennai', 'kolkata', 'hyderabad', 'pune', 
  'ahmedabad', 'jaipur', 'lucknow', 'kerala', 'tamilnadu', 'karnataka', 'maharashtra',
  'west-bengal', 'gujarat', 'telangana', 'andhra-pradesh', 'uttarakhand',
  // Other cities
  'coimbatore', 'madurai', 'salem', 'tiruchirappalli', 'tirunelveli',
  'guwahati', 'patna', 'bhubaneswar', 'dehradun', 'raipur', 'calicut',
  'kochi', 'ghaziabad', 'mangaluru', 'mysore', 'nagpur', 'indore', 'bhopal',
  'chandigarh', 'ludhiana', 'amritsar', 'jalandhar', 'patiala', 'kapurthala',
  'noida', 'gurugram', 'faridabad', 'nashik', 'aurangabad', 'kolhapur',
  'thane', 'surat', 'vadodara', 'goa', 'pondicherry', 'vijayawada',
  'visakhapatnam', 'ernakulam', 'thrissur', 'kollam', 'kottayam',
  'kozhikode', 'malappuram', 'kannur', 'chettinad', 'chengalpattu',
  'gorakhpur', 'jabalpur', 'jamshedpur', 'ranchi', 'silchar', 'mysuru',
  'mangalore', 'dilsukhnagar', 'dombivli', 'assam', 'odisha', 'chhattisgarh'
];

function getCategoryName(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function getCityName(city: string): string {
  return city
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

async function getCoursesByLocation(category: string, city: string) {
  if (!supabaseConfigured) return [];
  try {
    const sb = getAdminSupabase();
    const categoryName = getCategoryName(category);
    const { data } = await sb
      .from('programs')
      .select('*')
      .ilike('category', `%${categoryName.split(' ')[0]}%`)
      .order('title');
    return data || [];
  } catch {
    return [];
  }
}

export default async function CategoryCityPage(props: { 
  params: Promise<{ category: string; city: string }> 
}) {
  const params = await props.params;
  const { category, city } = params;
  
  if (!VALID_CATEGORIES.includes(category) || !CITIES.includes(city)) {
    notFound();
  }

  const categoryName = getCategoryName(category);
  const cityName = getCityName(city);
  const courses = await getCoursesByLocation(category, city);

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-4 text-sm text-slate-600">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href={`/${category}`} className="hover:text-sky-600">{categoryName}</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">{cityName}</span>
        </div>

        {/* Header */}
        <h1 className="text-4xl font-bold text-slate-900 mb-2">
          {categoryName} in {cityName}
        </h1>
        <p className="text-slate-600 mb-8">
          Find the best {categoryName.toLowerCase()} programs in {cityName}. 
          Advance your medical career with our specialized courses.
        </p>

        {/* Courses Grid */}
        {courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                  <div className="mt-4">
                    <span className="text-sky-600 font-medium text-sm">View Details →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center mb-12">
            <div className="text-5xl mb-4">📍</div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              Courses Available
            </h2>
            <p className="text-slate-600 mb-4">
              We offer {categoryName.toLowerCase()} programs that can be pursued from {cityName}. 
              Contact us for more information about enrollment and schedules.
            </p>
            <Link
              href="/contact-us"
              className="inline-block px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
            >
              Inquire Now
            </Link>
          </div>
        )}

        {/* Why Choose Section */}
        <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Why Choose DMHCA for {categoryName} in {cityName}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: '👨‍⚕️', title: 'Expert Faculty', desc: 'Learn from experienced medical professionals' },
              { icon: '🏥', title: 'Practical Training', desc: 'Hands-on clinical experience' },
              { icon: '📜', title: 'Recognized Certification', desc: 'Globally accepted certificates' },
              { icon: '💼', title: 'Career Support', desc: 'Placement assistance and guidance' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-sky-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Start Your Journey in {cityName}</h2>
          <p className="mb-6 opacity-90">
            Enroll in our {categoryName.toLowerCase()} programs today
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact-us"
              className="px-6 py-3 bg-white text-sky-600 rounded-lg font-semibold hover:bg-slate-50 transition"
            >
              Contact Us
            </Link>
            <Link
              href={`/${category}`}
              className="px-6 py-3 bg-sky-700 text-white rounded-lg font-semibold hover:bg-sky-800 transition"
            >
              View All {categoryName}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
