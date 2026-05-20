import { getAdminSupabase, supabaseConfigured } from '@/lib/supabase';
import VisualPageEditor from './VisualPageEditor';

export const dynamic = 'force-dynamic';

export default async function PagesPage() {
  if (!supabaseConfigured) {
    return <div className="rounded-lg border border-amber-300 bg-amber-50 text-amber-900 px-4 py-3">Supabase not configured.</div>;
  }
  const sb = getAdminSupabase();
  const { data } = await sb.from('pages').select('*').order('id');
  return (
    <div className="max-w-7xl">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-900 mb-2">Website Pages</h1>
        <p className="text-slate-600 text-sm max-w-3xl">
          Simple page editor - no code required! Just fill in the fields, add images, and click save. 
          Build your pages with headings, text, images, buttons, and lists.
        </p>
      </div>
      <VisualPageEditor initial={data ?? []} />
    </div>
  );
}
