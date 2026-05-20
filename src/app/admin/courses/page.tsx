import Link from 'next/link';
import { supabaseConfigured, getAdminSupabase } from '@/lib/supabase';
import { programs as fileSeed } from '@/lib/data';
import SeedFromFileButton from './SeedFromFileButton';

export const dynamic = 'force-dynamic';

type Row = { id: string; slug: string; title: string; category: string; published: boolean; updated_at: string };

async function loadRows(): Promise<{ rows: Row[]; usingFallback: boolean; error?: string }> {
  if (!supabaseConfigured) {
    const rows = fileSeed
      .filter((p) => 'category' in p && (p as { category: string }).category)
      .map((p) => ({
        id: p.id as string,
        slug: (p as { slug: string }).slug,
        title: (p as { title: string }).title,
        category: (p as { category: string }).category,
        published: true,
        updated_at: '',
      }));
    return { rows, usingFallback: true };
  }
  try {
    const sb = getAdminSupabase();
    const { data, error } = await sb
      .from('programs')
      .select('id,slug,title,category,published,updated_at')
      .order('updated_at', { ascending: false });
    if (error) return { rows: [], usingFallback: false, error: error.message };
    return { rows: (data ?? []) as Row[], usingFallback: false };
  } catch (e) {
    return { rows: [], usingFallback: false, error: (e as Error).message };
  }
}

export default async function CoursesPage() {
  const { rows, usingFallback, error } = await loadRows();

  return (
    <div className="max-w-6xl">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Courses</h1>
          <p className="text-slate-600 text-sm">{rows.length} program{rows.length === 1 ? '' : 's'}</p>
        </div>
        <div className="flex gap-2">
          {supabaseConfigured && <SeedFromFileButton />}
          <Link href="/admin/courses/new" className="rounded-lg bg-sky-700 hover:bg-sky-800 text-white px-4 py-2 text-sm font-medium">+ New course</Link>
        </div>
      </div>

      {usingFallback && (
        <div className="mb-4 rounded-lg border border-amber-300 bg-amber-50 text-amber-900 px-4 py-3 text-sm">
          Showing local <code>data.ts</code> entries (Supabase not configured). Set env vars to enable editing.
        </div>
      )}
      {error && (
        <div className="mb-4 rounded-lg border border-red-300 bg-red-50 text-red-800 px-4 py-3 text-sm">
          Error loading courses: {error}
        </div>
      )}

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-slate-700">Title</th>
                <th className="text-left px-4 py-3 font-medium text-slate-700">Category</th>
                <th className="text-left px-4 py-3 font-medium text-slate-700">Slug</th>
                <th className="text-left px-4 py-3 font-medium text-slate-700">Status</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-3 text-slate-900">{r.title}</td>
                  <td className="px-4 py-3 text-slate-600">{r.category}</td>
                  <td className="px-4 py-3 text-slate-500">{r.slug}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-0.5 rounded text-xs ${r.published ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-600'}`}>
                      {r.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right whitespace-nowrap">
                    {usingFallback ? (
                      <span className="text-slate-400 text-xs">read-only</span>
                    ) : (
                      <Link href={`/admin/courses/${encodeURIComponent(r.id)}`} className="text-sky-700 hover:underline">
                        Edit
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr><td colSpan={5} className="px-4 py-12 text-center text-slate-500">No courses yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
