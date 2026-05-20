import { getAdminSupabase, supabaseConfigured } from '@/lib/supabase';
import ReviewsEditor from './ReviewsEditor';

export const dynamic = 'force-dynamic';

export default async function ReviewsPage() {
  if (!supabaseConfigured) {
    return <div className="rounded-lg border border-amber-300 bg-amber-50 text-amber-900 px-4 py-3">Supabase not configured.</div>;
  }
  const sb = getAdminSupabase();
  const { data, error } = await sb.from('reviews').select('*').order('display_order').order('created_at', { ascending: false });
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-semibold text-slate-900 mb-6">Reviews</h1>
      {error && <div className="mb-4 text-red-700 text-sm">{error.message}</div>}
      <ReviewsEditor initial={data ?? []} />
    </div>
  );
}
