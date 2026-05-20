import Link from 'next/link';

export const dynamic = 'force-dynamic';

const BLOG_POSTS = [
  { slug: 'how-to-crack-neet-pg', title: 'How to Crack NEET PG', category: 'Exam Preparation' },
  { slug: 'courses-after-mbbs-in-india', title: 'Courses After MBBS in India', category: 'Career Guide' },
  { slug: 'scope-of-radiology', title: 'Scope of Radiology', category: 'Career Scope' },
  { slug: 'scope-of-cardiology', title: 'Scope of Cardiology', category: 'Career Scope' },
  { slug: 'scope-of-obstetrics-and-gynecology', title: 'Scope of Obstetrics and Gynecology', category: 'Career Scope' },
  { slug: 'scope-of-cosmetology', title: 'Scope of Cosmetology', category: 'Career Scope' },
  { slug: 'scope-of-paediatrics', title: 'Scope of Paediatrics', category: 'Career Scope' },
  { slug: 'scope-of-oncology', title: 'Scope of Oncology', category: 'Career Scope' },
  { slug: 'scope-of-neurology', title: 'Scope of Neurology', category: 'Career Scope' },
  { slug: 'scope-of-echocardiography', title: 'Scope of Echocardiography', category: 'Career Scope' },
  { slug: 'scope-of-diabetology', title: 'Scope of Diabetology', category: 'Career Scope' },
  { slug: 'scope-of-endocrinology', title: 'Scope of Endocrinology', category: 'Career Scope' },
  { slug: 'how-to-become-a-radiologist', title: 'How to Become a Radiologist', category: 'Career Path' },
  { slug: 'how-to-become-a-cardiologist', title: 'How to Become a Cardiologist', category: 'Career Path' },
  { slug: 'how-to-become-a-cosmetologist', title: 'How to Become a Cosmetologist', category: 'Career Path' },
  { slug: 'how-to-become-an-oncologist', title: 'How to Become an Oncologist', category: 'Career Path' },
  { slug: 'how-to-become-a-neurologist', title: 'How to Become a Neurologist', category: 'Career Path' },
  { slug: 'how-to-become-a-diabetologist', title: 'How to Become a Diabetologist', category: 'Career Path' },
  { slug: 'how-to-become-an-endocrinologist', title: 'How to Become an Endocrinologist', category: 'Career Path' },
  { slug: 'how-to-become-an-embryologist', title: 'How to Become an Embryologist', category: 'Career Path' },
  { slug: 'how-to-become-a-pediatrician', title: 'How to Become a Pediatrician', category: 'Career Path' },
  { slug: 'how-to-become-an-obstetrician-gynecologist', title: 'How to Become an Obstetrician-Gynecologist', category: 'Career Path' },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Medical Education Blog</h1>
        <p className="text-slate-600 mb-8">
          Latest insights, career guides, and medical education resources
        </p>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition"
            >
              <span className="inline-block px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-medium mb-3">
                {post.category}
              </span>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">{post.title}</h2>
              <span className="text-sky-600 text-sm font-medium">Read More →</span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-sky-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to Advance Your Medical Career?</h2>
          <p className="mb-6 opacity-90">Explore our comprehensive range of medical courses</p>
          <Link
            href="/top-medical-courses"
            className="inline-block px-6 py-3 bg-white text-sky-600 rounded-lg font-semibold hover:bg-slate-50 transition"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </main>
  );
}
