'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Initial = {
  id: string;
  slug: string;
  title: string;
  category: string;
  published: boolean;
  data: Record<string, unknown>;
};

const EMPTY: Initial = {
  id: '',
  slug: '',
  title: '',
  category: 'Fellowship',
  published: true,
  data: {
    duration: '',
    lessons: 0,
    fee: '',
    level: '',
    eligibility: '',
    overview: '',
    whatYouLearn: [],
    modules: [],
    curriculum: [],
    description: '',
    image: '',
    faqs: [],
  },
};

export default function CourseForm({ mode, initial }: { mode: 'create' | 'edit'; initial?: Initial }) {
  const router = useRouter();
  const [model, setModel] = useState<Initial>(initial ?? EMPTY);
  const [dataJson, setDataJson] = useState<string>(JSON.stringify(model.data, null, 2));
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function set<K extends keyof Initial>(k: K, v: Initial[K]) {
    setModel((m) => ({ ...m, [k]: v }));
  }

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    let parsed: Record<string, unknown>;
    try { parsed = JSON.parse(dataJson); }
    catch (err) { setError('Invalid JSON in “Course data”: ' + (err as Error).message); setBusy(false); return; }

    const body = { ...model, data: parsed };
    try {
      const url = mode === 'create' ? '/api/admin/courses' : `/api/admin/courses/${encodeURIComponent(model.id)}`;
      const method = mode === 'create' ? 'POST' : 'PATCH';
      const res = await fetch(url, { method, headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) { setError(json.error || 'Save failed'); return; }
      router.push('/admin/courses');
      router.refresh();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  }

  async function remove() {
    if (mode !== 'edit') return;
    if (!confirm(`Delete “${model.title}”? This cannot be undone.`)) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/admin/courses/${encodeURIComponent(model.id)}`, { method: 'DELETE' });
      if (!res.ok) { const j = await res.json().catch(() => ({})); setError(j.error || 'Delete failed'); return; }
      router.push('/admin/courses');
      router.refresh();
    } finally { setBusy(false); }
  }

  return (
    <form onSubmit={save} className="space-y-5 bg-white border border-slate-200 rounded-xl p-5 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="ID (unique)">
          <input
            value={model.id}
            onChange={(e) => set('id', e.target.value)}
            required
            disabled={mode === 'edit'}
            className="input"
            placeholder="fellowship-in-cardiology"
          />
        </Field>
        <Field label="Slug">
          <input
            value={model.slug}
            onChange={(e) => set('slug', e.target.value)}
            required
            className="input"
            placeholder="fellowship-in-cardiology"
          />
        </Field>
        <Field label="Title" wide>
          <input value={model.title} onChange={(e) => set('title', e.target.value)} required className="input" />
        </Field>
        <Field label="Category">
          <select value={model.category} onChange={(e) => set('category', e.target.value)} className="input">
            <option>Fellowship</option>
            <option>PG Diploma</option>
            <option>Certificate</option>
          </select>
        </Field>
        <Field label="Published">
          <label className="inline-flex items-center gap-2 mt-2">
            <input type="checkbox" checked={model.published} onChange={(e) => set('published', e.target.checked)} />
            <span className="text-sm">Visible on the website</span>
          </label>
        </Field>
      </div>

      <Field label="Course data (JSON)">
        <textarea
          value={dataJson}
          onChange={(e) => setDataJson(e.target.value)}
          spellCheck={false}
          className="font-mono text-xs w-full rounded-md border border-slate-300 p-3 min-h-105"
        />
        <p className="text-xs text-slate-500 mt-1">
          Includes <code>overview</code>, <code>whatYouLearn</code>, <code>modules</code>, <code>curriculum</code>, <code>faqs</code>, <code>image</code>, etc.
        </p>
      </Field>

      {error && <div className="text-sm text-red-600">{error}</div>}

      <div className="flex flex-wrap items-center gap-2">
        <button type="submit" disabled={busy} className="rounded-lg bg-sky-700 hover:bg-sky-800 text-white px-4 py-2 text-sm font-medium disabled:opacity-60">
          {busy ? 'Saving…' : mode === 'create' ? 'Create course' : 'Save changes'}
        </button>
        {mode === 'edit' && (
          <button type="button" onClick={remove} disabled={busy} className="rounded-lg border border-red-300 text-red-700 hover:bg-red-50 px-4 py-2 text-sm font-medium ml-auto">
            Delete
          </button>
        )}
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid rgb(203 213 225);
          border-radius: 8px;
          padding: 8px 10px;
          font-size: 14px;
          background: white;
        }
        .input:focus { outline: 2px solid rgb(14 165 233); outline-offset: 1px; }
      `}</style>
    </form>
  );
}

function Field({ label, children, wide = false }: { label: string; children: React.ReactNode; wide?: boolean }) {
  return (
    <div className={wide ? 'md:col-span-2' : ''}>
      <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
      {children}
    </div>
  );
}
