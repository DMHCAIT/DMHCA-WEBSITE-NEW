import Link from 'next/link';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

const BLOG_POSTS = [
  // Career Guides
  { slug: 'how-to-crack-neet-pg', title: 'How to Crack NEET PG', category: 'Exam Preparation' },
  { slug: 'courses-after-mbbs-in-india', title: 'Courses After MBBS in India', category: 'Career Guide' },
  
  // Scope Articles
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
  
  // How to Become
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

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { slug } = params;
  
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <article className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-slate-600">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-sky-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">{post.title}</span>
        </div>

        {/* Post Header */}
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <span>📅 Published: May 2026</span>
            <span>⏱️ 5 min read</span>
          </div>
        </div>

        {/* Content Placeholder */}
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
          <div className="text-6xl mb-4">📝</div>
          <h2 className="text-xl font-semibold text-slate-900 mb-2">Content Coming Soon</h2>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            This blog post is being prepared with comprehensive information about {post.title.toLowerCase()}. 
            Add your content through the admin panel.
          </p>
          <Link
            href="/admin"
            className="inline-block px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
          >
            Go to Admin Panel
          </Link>
        </div>

        {/* Related Posts */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.filter(p => p.category === post.category && p.slug !== slug)
              .slice(0, 3)
              .map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="bg-white rounded-lg border border-slate-200 p-5 hover:shadow-lg transition"
                >
                  <span className="text-xs font-medium text-sky-600">{related.category}</span>
                  <h3 className="font-semibold text-slate-900 mt-2">{related.title}</h3>
                  <span className="text-sm text-sky-600 mt-2 inline-block">Read More →</span>
                </Link>
              ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-sky-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to Start Your Medical Career?</h2>
          <p className="mb-6 opacity-90">
            Explore our medical courses and take the first step
          </p>
          <Link
            href="/top-medical-courses"
            className="inline-block px-6 py-3 bg-white text-sky-600 rounded-lg font-semibold hover:bg-slate-50 transition"
          >
            View Courses
          </Link>
        </div>
      </article>
    </main>
  );
}
