import { getAdminSupabase, supabaseConfigured } from '@/lib/supabase';
import FacultyEditor from './FacultyEditor';

export const dynamic = 'force-dynamic';

export default async function FacultyPage() {
  if (!supabaseConfigured) {
    return <NotConfigured />;
  }
  const sb = getAdminSupabase();
  const { data, error } = await sb.from('faculty').select('*').order('display_order').order('created_at');
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-semibold text-slate-900 mb-1">Faculty</h1>
      <p className="text-slate-600 text-sm mb-6">Manage faculty profiles shown on the website.</p>
      {error && <Err msg={error.message} />}
      <FacultyEditor initial={data ?? []} />
    </div>
  );
}

function NotConfigured() {
  return (
    <div className="rounded-lg border border-amber-300 bg-amber-50 text-amber-900 px-4 py-3">
      Supabase not configured. Set the env vars in <code>.env.local</code>.
    </div>
  );
}
function Err({ msg }: { msg: string }) {
  return <div className="mb-4 rounded-lg border border-red-300 bg-red-50 text-red-800 px-4 py-3 text-sm">{msg}</div>;
}
