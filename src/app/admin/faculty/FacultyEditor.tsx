'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Row = {
  id: string;
  name: string;
  role: string | null;
  qualification: string | null;
  bio: string | null;
  image_url: string | null;
  display_order: number;
  published: boolean;
};

const empty: Omit<Row, 'id'> = { name: '', role: '', qualification: '', bio: '', image_url: '', display_order: 0, published: true };

export default function FacultyEditor({ initial }: { initial: Row[] }) {
  const router = useRouter();
  const [rows, setRows] = useState<Row[]>(initial);
  const [draft, setDraft] = useState<Omit<Row, 'id'>>(empty);
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function add(e: React.FormEvent) {
    e.preventDefault();
    setBusy('add'); setError(null);
    const res = await fetch('/api/admin/faculty', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(draft) });
    const j = await res.json().catch(() => ({}));
    setBusy(null);
    if (!res.ok) { setError(j.error || 'Failed'); return; }
    setRows((r) => [...r, j.row]);
    setDraft(empty);
    router.refresh();
  }

  async function remove(id: string) {
    if (!confirm('Delete this faculty entry?')) return;
    setBusy(id);
    const res = await fetch(`/api/admin/faculty/${id}`, { method: 'DELETE' });
    setBusy(null);
    if (!res.ok) { const j = await res.json().catch(() => ({})); setError(j.error || 'Failed'); return; }
    setRows((r) => r.filter((x) => x.id !== id));
    router.refresh();
  }

  async function patch(id: string, partial: Partial<Row>) {
    setBusy(id); setError(null);
    const res = await fetch(`/api/admin/faculty/${id}`, { method: 'PATCH', headers: { 'content-type': 'application/json' }, body: JSON.stringify(partial) });
    setBusy(null);
    if (!res.ok) { const j = await res.json().catch(() => ({})); setError(j.error || 'Failed'); return; }
    setRows((r) => r.map((x) => (x.id === id ? { ...x, ...partial } as Row : x)));
  }

  return (
    <div className="space-y-6">
      <form onSubmit={add} className="bg-white rounded-xl border border-slate-200 p-5 space-y-3">
        <h2 className="font-semibold text-slate-900">Add new</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Inp label="Name" value={draft.name} onChange={(v) => setDraft({ ...draft, name: v })} required />
          <Inp label="Role / Department" value={draft.role ?? ''} onChange={(v) => setDraft({ ...draft, role: v })} />
          <Inp label="Qualification" value={draft.qualification ?? ''} onChange={(v) => setDraft({ ...draft, qualification: v })} />
          <Inp label="Image URL" value={draft.image_url ?? ''} onChange={(v) => setDraft({ ...draft, image_url: v })} />
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Bio</label>
            <textarea rows={3} value={draft.bio ?? ''} onChange={(e) => setDraft({ ...draft, bio: e.target.value })} className="w-full border border-slate-300 rounded-md p-2 text-sm" />
          </div>
        </div>
        {error && <div className="text-sm text-red-600">{error}</div>}
        <button disabled={busy === 'add'} className="rounded-lg bg-sky-700 hover:bg-sky-800 text-white text-sm px-4 py-2 disabled:opacity-60">
          {busy === 'add' ? 'Adding…' : 'Add faculty'}
        </button>
      </form>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left px-3 py-2">Name</th>
                <th className="text-left px-3 py-2">Role</th>
                <th className="text-left px-3 py-2">Order</th>
                <th className="text-left px-3 py-2">Status</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-t border-slate-100">
                  <td className="px-3 py-2">{r.name}</td>
                  <td className="px-3 py-2 text-slate-600">{r.role}</td>
                  <td className="px-3 py-2 w-24">
                    <input
                      type="number"
                      defaultValue={r.display_order}
                      onBlur={(e) => {
                        const n = Number(e.target.value);
                        if (n !== r.display_order) patch(r.id, { display_order: n });
                      }}
                      className="w-20 border border-slate-300 rounded px-2 py-1 text-sm"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <label className="inline-flex items-center gap-2 text-sm">
                      <input type="checkbox" checked={r.published} onChange={(e) => patch(r.id, { published: e.target.checked })} />
                      Published
                    </label>
                  </td>
                  <td className="px-3 py-2 text-right">
                    <button onClick={() => remove(r.id)} disabled={busy === r.id} className="text-red-700 hover:underline text-sm">Delete</button>
                  </td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr><td colSpan={5} className="px-3 py-10 text-center text-slate-500">No faculty yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
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
