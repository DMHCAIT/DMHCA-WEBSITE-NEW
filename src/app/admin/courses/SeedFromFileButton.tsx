'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SeedFromFileButton() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function run() {
    if (!confirm('Import all courses from data.ts into Supabase? Existing rows with the same id will be UPDATED (upsert).')) return;
    setBusy(true);
    setMsg(null);
    try {
      const res = await fetch('/api/admin/courses/seed', { method: 'POST' });
      const data = await res.json();
      if (!res.ok) {
        setMsg(data.error || 'Seed failed');
      } else {
        setMsg(`Imported ${data.count} courses`);
        router.refresh();
      }
    } catch (e) {
      setMsg((e as Error).message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex items-center gap-2">
      {msg && <span className="text-xs text-slate-600">{msg}</span>}
      <button onClick={run} disabled={busy} className="rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-sm px-3 py-2 disabled:opacity-50">
        {busy ? 'Importing…' : 'Import from data.ts'}
      </button>
    </div>
  );
}
