'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Row = {
  id: string;
  name: string;
  course: string | null;
  rating: number | null;
  text: string;
  image_url: string | null;
  display_order: number;
  published: boolean;
};

const empty: Omit<Row, 'id'> = { name: '', course: '', rating: 5, text: '', image_url: '', display_order: 0, published: true };

export default function ReviewsEditor({ initial }: { initial: Row[] }) {
  const router = useRouter();
  const [rows, setRows] = useState<Row[]>(initial);
  const [draft, setDraft] = useState<Omit<Row, 'id'>>(empty);
  const [busy, setBusy] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function add(e: React.FormEvent) {
    e.preventDefault();
    setBusy('add'); setErr(null);
    const res = await fetch('/api/admin/reviews', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(draft) });
    const j = await res.json().catch(() => ({}));
    setBusy(null);
    if (!res.ok) { setErr(j.error || 'Failed'); return; }
    setRows((r) => [j.row, ...r]);
    setDraft(empty);
    router.refresh();
  }
  async function remove(id: string) {
    if (!confirm('Delete this review?')) return;
    setBusy(id);
    const res = await fetch(`/api/admin/reviews/${id}`, { method: 'DELETE' });
    setBusy(null);
    if (!res.ok) return;
    setRows((r) => r.filter((x) => x.id !== id));
  }
  async function patch(id: string, partial: Partial<Row>) {
    const res = await fetch(`/api/admin/reviews/${id}`, { method: 'PATCH', headers: { 'content-type': 'application/json' }, body: JSON.stringify(partial) });
    if (!res.ok) return;
    setRows((r) => r.map((x) => (x.id === id ? { ...x, ...partial } as Row : x)));
  }

  return (
    <div className="space-y-6">
      <form onSubmit={add} className="bg-white rounded-xl border border-slate-200 p-5 space-y-3">
        <h2 className="font-semibold text-slate-900">Add review</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Inp label="Name" value={draft.name} onChange={(v) => setDraft({ ...draft, name: v })} required />
          <Inp label="Course" value={draft.course ?? ''} onChange={(v) => setDraft({ ...draft, course: v })} />
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Rating</label>
            <select value={draft.rating ?? 5} onChange={(e) => setDraft({ ...draft, rating: Number(e.target.value) })} className="border border-slate-300 rounded-md px-2 py-2 text-sm">
              {[1,2,3,4,5].map((n) => <option key={n}>{n}</option>)}
            </select>
          </div>
          <Inp label="Image URL" value={draft.image_url ?? ''} onChange={(v) => setDraft({ ...draft, image_url: v })} />
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Review text</label>
            <textarea required rows={3} value={draft.text} onChange={(e) => setDraft({ ...draft, text: e.target.value })} className="w-full border border-slate-300 rounded-md p-2 text-sm" />
          </div>
        </div>
        {err && <div className="text-sm text-red-600">{err}</div>}
        <button disabled={busy === 'add'} className="rounded-lg bg-sky-700 hover:bg-sky-800 text-white text-sm px-4 py-2 disabled:opacity-60">
          {busy === 'add' ? 'Adding…' : 'Add review'}
        </button>
      </form>

      <div className="space-y-3">
        {rows.map((r) => (
          <div key={r.id} className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col md:flex-row md:items-start gap-3">
            <div className="flex-1 min-w-0">
              <div className="font-medium text-slate-900">{r.name} <span className="text-slate-500 font-normal text-sm">· {r.course || '—'} · {r.rating ?? '—'}★</span></div>
              <p className="text-sm text-slate-700 mt-1 wrap-break-word">{r.text}</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <label className="inline-flex items-center gap-1 text-sm">
                <input type="checkbox" checked={r.published} onChange={(e) => patch(r.id, { published: e.target.checked })} />
                Published
              </label>
              <button onClick={() => remove(r.id)} disabled={busy === r.id} className="text-red-700 hover:underline text-sm">Delete</button>
            </div>
          </div>
        ))}
        {rows.length === 0 && <div className="text-slate-500 text-sm py-8 text-center">No reviews yet.</div>}
      </div>
    </div>
  );
}

function Inp({ label, value, onChange, required }: { label: string; value: string; onChange: (v: string) => void; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} required={required} className="w-full border border-slate-300 rounded-md px-2 py-2 text-sm" />
    </div>
  );
}
