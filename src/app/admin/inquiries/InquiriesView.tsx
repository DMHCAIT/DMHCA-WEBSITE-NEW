'use client';

import { useState } from 'react';

type Row = {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  course: string | null;
  message: string | null;
  source_page: string | null;
  status: 'new' | 'contacted' | 'enrolled' | 'closed';
  created_at: string;
};

const STATUSES: Row['status'][] = ['new', 'contacted', 'enrolled', 'closed'];

export default function InquiriesView({ initial }: { initial: Row[] }) {
  const [rows, setRows] = useState<Row[]>(initial);
  const [filter, setFilter] = useState<'all' | Row['status']>('all');

  async function setStatus(id: string, status: Row['status']) {
    setRows((r) => r.map((x) => (x.id === id ? { ...x, status } : x)));
    await fetch(`/api/admin/inquiries/${id}`, { method: 'PATCH', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ status }) });
  }
  async function remove(id: string) {
    if (!confirm('Delete this inquiry?')) return;
    setRows((r) => r.filter((x) => x.id !== id));
    await fetch(`/api/admin/inquiries/${id}`, { method: 'DELETE' });
  }

  const filtered = filter === 'all' ? rows : rows.filter((r) => r.status === filter);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <FilterBtn active={filter === 'all'} onClick={() => setFilter('all')}>All ({rows.length})</FilterBtn>
        {STATUSES.map((s) => (
          <FilterBtn key={s} active={filter === s} onClick={() => setFilter(s)}>
            {s} ({rows.filter((r) => r.status === s).length})
          </FilterBtn>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left px-3 py-2">When</th>
                <th className="text-left px-3 py-2">Name</th>
                <th className="text-left px-3 py-2">Contact</th>
                <th className="text-left px-3 py-2">Course</th>
                <th className="text-left px-3 py-2">Message</th>
                <th className="text-left px-3 py-2">Status</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={r.id} className="border-t border-slate-100 align-top">
                  <td className="px-3 py-2 whitespace-nowrap text-slate-500">{new Date(r.created_at).toLocaleString()}</td>
                  <td className="px-3 py-2 font-medium text-slate-900">{r.name}</td>
                  <td className="px-3 py-2 text-slate-700">
                    {r.email && <div><a href={`mailto:${r.email}`} className="text-sky-700 hover:underline">{r.email}</a></div>}
                    {r.phone && <div><a href={`tel:${r.phone}`} className="text-sky-700 hover:underline">{r.phone}</a></div>}
                  </td>
                  <td className="px-3 py-2 text-slate-600">{r.course || '—'}</td>
                  <td className="px-3 py-2 text-slate-700 max-w-xs"><div className="line-clamp-3 wrap-break-word">{r.message || '—'}</div></td>
                  <td className="px-3 py-2">
                    <select value={r.status} onChange={(e) => setStatus(r.id, e.target.value as Row['status'])} className="border border-slate-300 rounded px-2 py-1 text-sm">
                      {STATUSES.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </td>
                  <td className="px-3 py-2 text-right">
                    <button onClick={() => remove(r.id)} className="text-red-700 hover:underline text-sm">Delete</button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={7} className="px-3 py-10 text-center text-slate-500">No inquiries.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function FilterBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className={`px-3 py-1.5 rounded-md text-sm border ${active ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'}`}>
      {children}
    </button>
  );
}
