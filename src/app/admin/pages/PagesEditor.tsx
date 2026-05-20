'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Row = { id: string; title: string; content: Record<string, unknown> };

const KNOWN: Array<{ id: string; title: string; description?: string }> = [
  // Home Page Sections
  { id: 'home-hero', title: 'Home - Hero Section', description: 'Main banner/hero section on homepage' },
  { id: 'home-programs', title: 'Home - Programs Section', description: 'Featured programs section' },
  { id: 'home-career', title: 'Home - Career Section', description: 'Career opportunities section' },
  { id: 'home-accreditation', title: 'Home - Accreditation', description: 'Accreditation badges and partners' },
  { id: 'home-learning', title: 'Home - Learning Experience', description: 'Learning features and benefits' },
  { id: 'home-universities', title: 'Home - University Partners', description: 'Partner universities and institutions' },
  { id: 'home-events', title: 'Home - Events', description: 'Upcoming events and webinars' },
  { id: 'home-trainers', title: 'Home - Top Trainers', description: 'Featured faculty/trainers' },
  { id: 'home-reviews', title: 'Home - Reviews', description: 'Student testimonials and reviews' },
  { id: 'home-training-partners', title: 'Home - Training Partners', description: 'Training partner organizations' },
  
  // About Pages
  { id: 'about-dmhca', title: 'About DMHCA', description: 'Main about page content' },
  { id: 'about-mission', title: 'About - Mission & Vision', description: 'Mission, vision, and values' },
  { id: 'about-team', title: 'About - Leadership Team', description: 'Management and leadership' },
  
  // Legal Pages
  { id: 'privacy-policy', title: 'Privacy Policy', description: 'Privacy policy and data protection' },
  { id: 'terms-and-conditions', title: 'Terms and Conditions', description: 'Terms of service' },
  { id: 'refund-policy', title: 'Refund Policy', description: 'Refund and cancellation policy' },
  
  // Contact & Info
  { id: 'contact-info', title: 'Contact Information', description: 'Address, phone, email, social media' },
  { id: 'faq', title: 'Frequently Asked Questions', description: 'Common questions and answers' },
];

export default function PagesEditor({ initial }: { initial: Row[] }) {
  const router = useRouter();
  const [rows, setRows] = useState<Row[]>(initial);
  const [active, setActive] = useState<string | null>(rows[0]?.id ?? null);
  const [draftJson, setDraftJson] = useState<string>('');
  const [draftTitle, setDraftTitle] = useState<string>('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  function pick(id: string) {
    const row = rows.find((r) => r.id === id);
    if (!row) return;
    setActive(id);
    setDraftTitle(row.title);
    setDraftJson(JSON.stringify(row.content, null, 2));
    setErr(null);
  }

  async function save() {
    if (!active) return;
    setErr(null);
    let parsed: Record<string, unknown>;
    try { parsed = JSON.parse(draftJson); } catch (e) { setErr('Invalid JSON: ' + (e as Error).message); return; }
    setBusy(true);
    const res = await fetch('/api/admin/pages', { method: 'PUT', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ id: active, title: draftTitle, content: parsed }) });
    setBusy(false);
    if (!res.ok) { const j = await res.json().catch(() => ({})); setErr(j.error || 'Save failed'); return; }
    setRows((r) => {
      const exists = r.some((x) => x.id === active);
      if (exists) return r.map((x) => (x.id === active ? { ...x, title: draftTitle, content: parsed } : x));
      return [...r, { id: active, title: draftTitle, content: parsed }];
    });
    router.refresh();
  }

  function createKnown(id: string, title: string) {
    if (rows.some((r) => r.id === id)) { pick(id); return; }
    const newRow: Row = { id, title, content: { sections: [] } };
    setRows([...rows, newRow]);
    setActive(id);
    setDraftTitle(title);
    setDraftJson(JSON.stringify(newRow.content, null, 2));
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
      <aside className="bg-white border border-slate-200 rounded-xl p-4 h-fit">
        <h3 className="text-xs uppercase text-slate-500 mb-3 px-2 font-semibold">Existing Pages</h3>
        <ul className="space-y-1 mb-6">
          {rows.map((r) => (
            <li key={r.id}>
              <button 
                onClick={() => pick(r.id)} 
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition ${
                  active === r.id 
                    ? 'bg-sky-600 text-white shadow-sm' 
                    : 'hover:bg-slate-100 text-slate-700'
                }`}
              >
                {r.title}
              </button>
            </li>
          ))}
          {rows.length === 0 && (
            <p className="text-sm text-slate-500 px-2 py-3">No pages yet. Add one below.</p>
          )}
        </ul>
        
        <div className="border-t border-slate-200 pt-4">
          <h3 className="text-xs uppercase text-slate-500 mb-3 px-2 font-semibold">Add New Page</h3>
          
          {/* Group by category */}
          {[
            { label: 'Home Page Sections', ids: KNOWN.filter(k => k.id.startsWith('home-')) },
            { label: 'About Pages', ids: KNOWN.filter(k => k.id.startsWith('about-')) },
            { label: 'Legal Pages', ids: KNOWN.filter(k => ['privacy-policy', 'terms-and-conditions', 'refund-policy'].includes(k.id)) },
            { label: 'Other', ids: KNOWN.filter(k => !k.id.startsWith('home-') && !k.id.startsWith('about-') && !['privacy-policy', 'terms-and-conditions', 'refund-policy'].includes(k.id)) },
          ].map(group => (
            <div key={group.label} className="mb-4">
              <p className="text-xs font-medium text-slate-600 mb-2 px-2">{group.label}</p>
              <ul className="space-y-1">
                {group.ids.filter((k) => !rows.some((r) => r.id === k.id)).map((k) => (
                  <li key={k.id}>
                    <button 
                      onClick={() => createKnown(k.id, k.title)} 
                      className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-600 hover:bg-sky-50 hover:text-sky-700 transition"
                      title={k.description}
                    >
                      + {k.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>

      <section className="bg-white border border-slate-200 rounded-xl p-6">
        {!active ? (
          <div className="text-center py-12">
            <p className="text-slate-500 text-sm mb-2">Select a page from the sidebar to edit</p>
            <p className="text-slate-400 text-xs mb-4">or create a new page to get started</p>
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg max-w-md mx-auto">
              <p className="text-sm text-blue-900 font-medium mb-2">📚 Need Help?</p>
              <p className="text-xs text-blue-700 mb-3">
                Check out the Page Editor Guide for examples and best practices
              </p>
              <a 
                href="/PAGE_EDITOR_GUIDE.md" 
                target="_blank"
                className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-800"
              >
                View Guide →
              </a>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Page Title</label>
                <input 
                  value={draftTitle} 
                  onChange={(e) => setDraftTitle(e.target.value)} 
                  placeholder="Enter page title..."
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent" 
                />
              </div>
              <div className="ml-4">
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                  {active}
                </span>
              </div>
            </div>
            
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Page Content (JSON Format)
              <span className="ml-2 text-xs font-normal text-slate-500">— Use JSON to structure your content</span>
            </label>
            <textarea
              value={draftJson}
              onChange={(e) => setDraftJson(e.target.value)}
              spellCheck={false}
              placeholder='{"sections": [{"type": "heading", "content": "Your heading"}, {"type": "paragraph", "content": "Your text..."}]}'
              className="font-mono text-xs w-full rounded-lg border border-slate-300 p-4 min-h-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              style={{ resize: 'vertical' }}
            />
            <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-xs text-blue-800 mb-2 font-medium">💡 Content Structure Examples:</p>
              <div className="space-y-1 text-xs text-blue-700 font-mono">
                <div>• Heading: {`{"type": "heading", "content": "Title"}`}</div>
                <div>• Paragraph: {`{"type": "paragraph", "content": "Text..."}`}</div>
                <div>• List: {`{"type": "list", "items": ["Item 1", "Item 2"]}`}</div>
                <div>• Image: {`{"type": "image", "url": "https://...", "alt": "Description"}`}</div>
              </div>
            </div>
            
            {err && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-800 font-medium">❌ Error</p>
                <p className="text-xs text-red-700 mt-1">{err}</p>
              </div>
            )}
            
            <div className="mt-6 flex items-center gap-3">
              <button 
                onClick={save} 
                disabled={busy} 
                className="rounded-lg bg-sky-600 hover:bg-sky-700 text-white px-6 py-2.5 text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed transition shadow-sm"
              >
                {busy ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Saving...
                  </span>
                ) : '💾 Save Changes'}
              </button>
              <p className="text-xs text-slate-500">Changes will update immediately on your website</p>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
