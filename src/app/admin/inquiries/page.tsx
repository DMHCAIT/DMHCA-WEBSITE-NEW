import { getAdminSupabase, supabaseConfigured } from '@/lib/supabase';
import InquiriesView from './InquiriesView';

export const dynamic = 'force-dynamic';

export default async function InquiriesPage() {
  if (!supabaseConfigured) {
    return <div className="rounded-lg border border-amber-300 bg-amber-50 text-amber-900 px-4 py-3">Supabase not configured.</div>;
  }
  const sb = getAdminSupabase();
  const { data, error } = await sb.from('inquiries').select('*').order('created_at', { ascending: false }).limit(500);
  return (
    <div className="max-w-6xl">
      <h1 className="text-2xl font-semibold text-slate-900 mb-1">Inquiries</h1>
      <p className="text-slate-600 text-sm mb-6">Latest leads from the contact / enroll forms.</p>
      {error && <div className="mb-4 text-red-700 text-sm">{error.message}</div>}
      <InquiriesView initial={data ?? []} />
    </div>
  );
}
