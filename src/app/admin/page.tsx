import Link from 'next/link';
import { supabaseConfigured, getAdminSupabase } from '@/lib/supabase';
import { adminAuthEnvReady } from '@/lib/admin-auth';

export const dynamic = 'force-dynamic';

async function getCounts() {
  if (!supabaseConfigured) return null;
  try {
    const sb = getAdminSupabase();
    const [programs, faculty, reviews, inquiries, media] = await Promise.all([
      sb.from('programs').select('id', { count: 'exact', head: true }),
      sb.from('faculty').select('id', { count: 'exact', head: true }),
      sb.from('reviews').select('id', { count: 'exact', head: true }),
      sb.from('inquiries').select('id', { count: 'exact', head: true }),
      sb.from('media').select('id', { count: 'exact', head: true }),
    ]);
    return {
      programs: programs.count ?? 0,
      faculty: faculty.count ?? 0,
      reviews: reviews.count ?? 0,
      inquiries: inquiries.count ?? 0,
      media: media.count ?? 0,
    };
  } catch {
    return null;
  }
}

export default async function AdminHome() {
  const env = adminAuthEnvReady();
  const counts = await getCounts();

  return (
    <div className="max-w-5xl">
      <h1 className="text-2xl font-semibold text-slate-900 mb-1">Dashboard</h1>
      <p className="text-slate-600 mb-6">Welcome back. Manage your DMHCA website here.</p>

      {!env.ready && (
        <Banner tone="warn" title="Auth env vars missing">
          Set <code>ADMIN_PASSWORD</code> and <code>ADMIN_SECRET</code> in <code>.env.local</code>, then restart the server.
        </Banner>
      )}
      {!supabaseConfigured && (
        <Banner tone="warn" title="Supabase not configured">
          Set <code>NEXT_PUBLIC_SUPABASE_URL</code>, <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code>, and <code>SUPABASE_SERVICE_ROLE_KEY</code> in <code>.env.local</code>. Then run <code>supabase/schema.sql</code> in the Supabase SQL editor.
        </Banner>
      )}

      {env.ready && supabaseConfigured && counts && (
        <div className="mb-6 p-5 bg-linear-to-br from-blue-50 to-sky-50 border-2 border-blue-200 rounded-xl">
          <div className="flex items-start gap-3">
            <div className="text-2xl">🎉</div>
            <div className="flex-1">
              <h2 className="text-base font-semibold text-blue-900 mb-2">
                Your Admin Panel is Fully Configured!
              </h2>
              <p className="text-sm text-blue-800 mb-3">
                You can now edit ALL website content from here. No code knowledge required!
              </p>
              <div className="flex gap-2 flex-wrap">
                <Link 
                  href="/admin/pages" 
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-medium hover:bg-blue-700 transition"
                >
                  ✏️ Edit Pages
                </Link>
                <Link 
                  href="/admin/media" 
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-600 text-white rounded-lg text-xs font-medium hover:bg-sky-700 transition"
                >
                  📁 Upload Media
                </Link>
                <a 
                  href="/PAGE_EDITOR_GUIDE.md" 
                  target="_blank"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-blue-600 text-blue-600 rounded-lg text-xs font-medium hover:bg-blue-50 transition"
                >
                  📚 View Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="Courses" value={counts?.programs} href="/admin/courses" />
        <Stat label="Faculty" value={counts?.faculty} href="/admin/faculty" />
        <Stat label="Reviews" value={counts?.reviews} href="/admin/reviews" />
        <Stat label="Inquiries" value={counts?.inquiries} href="/admin/inquiries" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        <Stat label="Media Files" value={counts?.media} href="/admin/media" />
      </div>

      <div className="mt-8 bg-white rounded-xl border border-slate-200 p-5">
        <h2 className="text-base font-semibold text-slate-900 mb-2">Quick Actions</h2>
        <ul className="text-sm text-sky-700 space-y-1">
          <li><Link href="/admin/pages" className="hover:underline font-medium">✏️ Edit website pages (home, about, etc.)</Link></li>
          <li><Link href="/admin/courses/new" className="hover:underline">+ Add a new course/program</Link></li>
          <li><Link href="/admin/media" className="hover:underline">📁 Upload images & videos</Link></li>
          <li><Link href="/admin/faculty/new" className="hover:underline">+ Add faculty member</Link></li>
          <li><Link href="/admin/inquiries" className="hover:underline">📬 View contact inquiries</Link></li>
        </ul>
      </div>
    </div>
  );
}

function Stat({ label, value, href }: { label: string; value: number | undefined; href: string }) {
  return (
    <Link href={href} className="block bg-white rounded-xl border border-slate-200 p-5 hover:border-sky-400 hover:shadow-sm transition">
      <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-1 text-3xl font-semibold text-slate-900">{value ?? '—'}</div>
    </Link>
  );
}

function Banner({ tone, title, children }: { tone: 'warn' | 'info'; title: string; children: React.ReactNode }) {
  const cls =
    tone === 'warn'
      ? 'bg-amber-50 border-amber-300 text-amber-900'
      : 'bg-sky-50 border-sky-300 text-sky-900';
  return (
    <div className={`mb-5 rounded-lg border px-4 py-3 ${cls}`}>
      <div className="font-medium">{title}</div>
      <div className="text-sm mt-1">{children}</div>
    </div>
  );
}
