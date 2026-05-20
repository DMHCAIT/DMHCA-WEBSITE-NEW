import { supabaseConfigured } from '@/lib/supabase';
import MediaManager from './MediaManager';

export const dynamic = 'force-dynamic';

export default async function MediaPage() {
  if (!supabaseConfigured) {
    return (
      <div className="rounded-lg border border-amber-300 bg-amber-50 text-amber-900 px-4 py-3">
        Supabase not configured. Set up your environment variables first.
      </div>
    );
  }

  return (
    <div className="max-w-6xl">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-900 mb-1">Media Library</h1>
        <p className="text-slate-600 text-sm">
          Upload and manage images, videos, and other media files for your website.
        </p>
      </div>
      <MediaManager />
    </div>
  );
}
