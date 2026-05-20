import { notFound } from 'next/navigation';
import { getAdminSupabase, supabaseConfigured } from '@/lib/supabase';
import CourseForm from '../CourseForm';

export const dynamic = 'force-dynamic';

export default async function EditCoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!supabaseConfigured) {
    return <div className="max-w-3xl text-amber-800 bg-amber-50 border border-amber-300 rounded-lg p-4">Supabase not configured.</div>;
  }
  const sb = getAdminSupabase();
  const { data, error } = await sb.from('programs').select('*').eq('id', id).maybeSingle();
  if (error) return <div className="text-red-700">Error: {error.message}</div>;
  if (!data) notFound();

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-semibold text-slate-900 mb-1">Edit course</h1>
      <p className="text-sm text-slate-500 mb-6">{data.title}</p>
      <CourseForm
        mode="edit"
        initial={{
          id: data.id,
          slug: data.slug,
          title: data.title,
          category: data.category,
          published: data.published,
          data: data.data,
        }}
      />
    </div>
  );
}
