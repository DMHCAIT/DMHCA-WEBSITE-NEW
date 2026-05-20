'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ImageUploader from '@/components/admin/ImageUploader';
import { Trash2, Plus, MoveUp, MoveDown, Type, FileText, Image as ImageIcon, Link as LinkIcon, List } from 'lucide-react';

type PageRow = { id: string; title: string; content: any };

type Section = {
  id: string;
  type: 'heading' | 'paragraph' | 'image' | 'button' | 'list';
  content?: string;
  url?: string;
  alt?: string;
  items?: string[];
  buttonText?: string;
  buttonUrl?: string;
  level?: string;
};

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

export default function VisualPageEditor({ initial }: { initial: PageRow[] }) {
  const router = useRouter();
  const [rows, setRows] = useState<PageRow[]>(initial);
  const [active, setActive] = useState<string | null>(rows[0]?.id ?? null);
  const [draftTitle, setDraftTitle] = useState<string>('');
  const [sections, setSections] = useState<Section[]>([]);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  function parseSections(content: any): Section[] {
    if (!content || !content.sections || !Array.isArray(content.sections)) return [];
    return content.sections.map((s: any, i: number) => ({
      id: `section-${i}`,
      type: s.type || 'paragraph',
      content: s.content || '',
      url: s.url || '',
      alt: s.alt || '',
      items: s.items || [],
      buttonText: s.text || s.buttonText || '',
      buttonUrl: s.buttonUrl || s.url || '',
      level: s.level || 'h2',
    }));
  }

  function pick(id: string) {
    const row = rows.find((r) => r.id === id);
    if (!row) return;
    setActive(id);
    setDraftTitle(row.title);
    setSections(parseSections(row.content));
    setErr(null);
  }

  function addSection(type: Section['type']) {
    const newSection: Section = {
      id: `section-${Date.now()}`,
      type,
      content: '',
      items: type === 'list' ? [''] : [],
      level: 'h2',
    };
    setSections([...sections, newSection]);
  }

  function updateSection(id: string, updates: Partial<Section>) {
    setSections(sections.map(s => s.id === id ? { ...s, ...updates } : s));
  }

  function deleteSection(id: string) {
    setSections(sections.filter(s => s.id !== id));
  }

  function moveSection(id: string, direction: 'up' | 'down') {
    const idx = sections.findIndex(s => s.id === id);
    if (idx === -1) return;
    if (direction === 'up' && idx === 0) return;
    if (direction === 'down' && idx === sections.length - 1) return;
    
    const newSections = [...sections];
    const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
    [newSections[idx], newSections[targetIdx]] = [newSections[targetIdx], newSections[idx]];
    setSections(newSections);
  }

  async function save() {
    if (!active) return;
    setErr(null);

    const content = {
      sections: sections.map(s => {
        const base: any = { type: s.type };
        if (s.type === 'heading') {
          base.level = s.level;
          base.content = s.content;
        } else if (s.type === 'paragraph') {
          base.content = s.content;
        } else if (s.type === 'image') {
          base.url = s.url;
          base.alt = s.alt;
        } else if (s.type === 'button') {
          base.text = s.buttonText;
          base.url = s.buttonUrl;
        } else if (s.type === 'list') {
          base.items = s.items?.filter(item => item.trim());
        }
        return base;
      })
    };

    setBusy(true);
    const res = await fetch('/api/admin/pages', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ id: active, title: draftTitle, content })
    });
    setBusy(false);

    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      setErr(j.error || 'Save failed');
      return;
    }

    setRows((r) => {
      const exists = r.some((x) => x.id === active);
      if (exists) return r.map((x) => (x.id === active ? { ...x, title: draftTitle, content } : x));
      return [...r, { id: active, title: draftTitle, content }];
    });
    router.refresh();
  }

  function createKnown(id: string, title: string) {
    if (rows.some((r) => r.id === id)) { pick(id); return; }
    const newRow: PageRow = { id, title, content: { sections: [] } };
    setRows([...rows, newRow]);
    setActive(id);
    setDraftTitle(title);
    setSections([]);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
      <aside className="bg-white border border-slate-200 rounded-xl p-4 h-fit sticky top-4">
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
          
          {[
            { label: 'Home Sections', ids: KNOWN.filter(k => k.id.startsWith('home-')) },
            { label: 'About Pages', ids: KNOWN.filter(k => k.id.startsWith('about-')) },
            { label: 'Legal Pages', ids: KNOWN.filter(k => ['privacy-policy', 'terms-and-conditions', 'refund-policy'].includes(k.id)) },
            { label: 'Other', ids: KNOWN.filter(k => !k.id.startsWith('home-') && !k.id.startsWith('about-') && !['privacy-policy', 'terms-and-conditions', 'refund-policy'].includes(k.id)) },
          ].map(group => group.ids.filter((k) => !rows.some((r) => r.id === k.id)).length > 0 && (
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
            <div className="text-5xl mb-4">📝</div>
            <p className="text-slate-700 text-lg font-medium mb-2">Simple Page Editor</p>
            <p className="text-slate-500 text-sm mb-4">No code required - just fill in the fields!</p>
            <p className="text-slate-400 text-xs">Select a page from the sidebar to start editing</p>
          </div>
        ) : (
          <>
            <div className="mb-6 pb-6 border-b border-slate-200">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Page Title</label>
              <input 
                value={draftTitle} 
                onChange={(e) => setDraftTitle(e.target.value)} 
                placeholder="Enter page title..."
                className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent" 
              />
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-slate-700">Page Content</h3>
                <div className="flex gap-2">
                  <button onClick={() => addSection('heading')} className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-medium text-slate-700 flex items-center gap-1 transition">
                    <Type size={14} /> Heading
                  </button>
                  <button onClick={() => addSection('paragraph')} className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-medium text-slate-700 flex items-center gap-1 transition">
                    <FileText size={14} /> Text
                  </button>
                  <button onClick={() => addSection('image')} className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-medium text-slate-700 flex items-center gap-1 transition">
                    <ImageIcon size={14} /> Image
                  </button>
                  <button onClick={() => addSection('button')} className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-medium text-slate-700 flex items-center gap-1 transition">
                    <LinkIcon size={14} /> Button
                  </button>
                  <button onClick={() => addSection('list')} className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-medium text-slate-700 flex items-center gap-1 transition">
                    <List size={14} /> List
                  </button>
                </div>
              </div>

              {sections.length === 0 && (
                <div className="text-center py-12 bg-slate-50 rounded-lg border-2 border-dashed border-slate-300">
                  <p className="text-slate-600 text-sm mb-2">No content yet</p>
                  <p className="text-slate-400 text-xs">Click the buttons above to add content</p>
                </div>
              )}

              <div className="space-y-4">
                {sections.map((section, idx) => (
                  <div key={section.id} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-slate-600 uppercase flex items-center gap-2">
                        {section.type === 'heading' && <Type size={14} />}
                        {section.type === 'paragraph' && <FileText size={14} />}
                        {section.type === 'image' && <ImageIcon size={14} />}
                        {section.type === 'button' && <LinkIcon size={14} />}
                        {section.type === 'list' && <List size={14} />}
                        {section.type}
                      </span>
                      <div className="flex gap-1">
                        <button onClick={() => moveSection(section.id, 'up')} disabled={idx === 0} className="p-1 hover:bg-slate-200 rounded disabled:opacity-30 disabled:cursor-not-allowed transition">
                          <MoveUp size={14} />
                        </button>
                        <button onClick={() => moveSection(section.id, 'down')} disabled={idx === sections.length - 1} className="p-1 hover:bg-slate-200 rounded disabled:opacity-30 disabled:cursor-not-allowed transition">
                          <MoveDown size={14} />
                        </button>
                        <button onClick={() => deleteSection(section.id)} className="p-1 hover:bg-red-100 text-red-600 rounded transition">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>

                    {section.type === 'heading' && (
                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs font-medium text-slate-600 mb-1">Heading Size</label>
                          <select 
                            value={section.level || 'h2'} 
                            onChange={(e) => updateSection(section.id, { level: e.target.value })}
                            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                          >
                            <option value="h1">Large (H1)</option>
                            <option value="h2">Medium (H2)</option>
                            <option value="h3">Small (H3)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-600 mb-1">Heading Text</label>
                          <input 
                            value={section.content || ''} 
                            onChange={(e) => updateSection(section.id, { content: e.target.value })}
                            placeholder="Enter your heading..."
                            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                          />
                        </div>
                      </div>
                    )}

                    {section.type === 'paragraph' && (
                      <div>
                        <label className="block text-xs font-medium text-slate-600 mb-1">Text Content</label>
                        <textarea 
                          value={section.content || ''} 
                          onChange={(e) => updateSection(section.id, { content: e.target.value })}
                          placeholder="Enter your text content..."
                          rows={4}
                          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                      </div>
                    )}

                    {section.type === 'image' && (
                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs font-medium text-slate-600 mb-1">Image</label>
                          <ImageUploader 
                            currentUrl={section.url || ''} 
                            onUrlChange={(url) => updateSection(section.id, { url })}
                            label="Upload Image"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-600 mb-1">Image Description (Alt Text)</label>
                          <input 
                            value={section.alt || ''} 
                            onChange={(e) => updateSection(section.id, { alt: e.target.value })}
                            placeholder="Describe the image..."
                            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                          />
                        </div>
                      </div>
                    )}

                    {section.type === 'button' && (
                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs font-medium text-slate-600 mb-1">Button Text</label>
                          <input 
                            value={section.buttonText || ''} 
                            onChange={(e) => updateSection(section.id, { buttonText: e.target.value })}
                            placeholder="e.g., Learn More"
                            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-600 mb-1">Button Link</label>
                          <input 
                            value={section.buttonUrl || ''} 
                            onChange={(e) => updateSection(section.id, { buttonUrl: e.target.value })}
                            placeholder="/courses or https://..."
                            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                          />
                        </div>
                      </div>
                    )}

                    {section.type === 'list' && (
                      <div>
                        <label className="block text-xs font-medium text-slate-600 mb-2">List Items</label>
                        {(section.items || ['']).map((item, i) => (
                          <div key={i} className="flex gap-2 mb-2">
                            <input 
                              value={item} 
                              onChange={(e) => {
                                const newItems = [...(section.items || [''])];
                                newItems[i] = e.target.value;
                                updateSection(section.id, { items: newItems });
                              }}
                              placeholder={`Item ${i + 1}`}
                              className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                            <button 
                              onClick={() => {
                                const newItems = (section.items || ['']).filter((_, idx) => idx !== i);
                                updateSection(section.id, { items: newItems.length ? newItems : [''] });
                              }}
                              className="p-2 hover:bg-red-100 text-red-600 rounded-lg transition"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ))}
                        <button 
                          onClick={() => updateSection(section.id, { items: [...(section.items || ['']), ''] })}
                          className="w-full py-2 border-2 border-dashed border-slate-300 rounded-lg text-xs text-slate-600 hover:border-sky-400 hover:text-sky-600 hover:bg-sky-50 transition"
                        >
                          + Add Item
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {err && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-800 font-medium">❌ Error</p>
                <p className="text-xs text-red-700 mt-1">{err}</p>
              </div>
            )}

            <div className="flex items-center gap-3 pt-6 border-t border-slate-200">
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
