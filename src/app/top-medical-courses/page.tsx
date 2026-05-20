'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { programs } from '@/lib/data';
import Link from 'next/link';
import { Search, FileText, Clock, BarChart2, ChevronLeft, ChevronRight } from 'lucide-react';

const PAGE_SIZE = 12;

const CATEGORIES = ['All Programs', 'Fellowship', 'PG Diploma', 'Certificate'];

// Dynamically calculate counts from the programs array to ensure accuracy
const COUNTS: Record<string, number> = {
  'All Programs': programs.length,
  Fellowship: programs.filter(p => p.category === 'Fellowship').length,
  'PG Diploma': programs.filter(p => p.category === 'PG Diploma').length,
  Certificate: programs.filter(p => p.category === 'Certificate').length,
};

const categoryColors: Record<string, { bg: string; text: string }> = {
  Fellowship: { bg: '#EBF4FA', text: '#2A6F97' },
  'PG Diploma': { bg: '#EAF4F1', text: '#3A8B78' },
  Certificate: { bg: '#FBF5EA', text: '#9A7A3A' },
};



function CoursesPageInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get('category');
  const initialTab = CATEGORIES.includes(categoryParam ?? '') ? categoryParam! : 'All Programs';

  const pageParam = parseInt(searchParams.get('page') ?? '1', 10);
  const page = isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;

  const [activeTab, setActiveTab] = useState(initialTab);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && CATEGORIES.includes(cat)) {
      setActiveTab(cat);
    } else {
      setActiveTab('All Programs');
    }
  }, [searchParams]);

  const filtered = useMemo(() => {
    return programs.filter((p) => {
      const matchCat = activeTab === 'All Programs' || p.category === activeTab;
      const matchSearch = search === '' ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeTab, search]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const safePage = Math.min(Math.max(1, page), Math.max(1, totalPages));
  const paginated = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  function buildUrl(newPage: number, cat?: string) {
    const c = cat ?? (activeTab === 'All Programs' ? '' : activeTab);
    const params = new URLSearchParams();
    if (c) params.set('category', c);
    if (newPage > 1) params.set('page', String(newPage));
    const qs = params.toString();
    return qs ? `/top-medical-courses?${qs}` : '/top-medical-courses';
  }

  function goPage(newPage: number) {
    router.push(buildUrl(newPage));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div>
      {/* Page Header */}
      <section style={{ backgroundColor: '#EEF3F7', padding: 'clamp(40px, 7vw, 64px) clamp(16px, 4vw, 24px) clamp(48px, 7vw, 80px)', marginBottom: '24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p style={{ fontSize: '12px', fontWeight: 600, color: '#6FB1A0', textTransform: 'uppercase', letterSpacing: '1.2px', fontFamily: 'Inter, sans-serif', marginBottom: '10px' }}>
              All Programs
            </p>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 5vw, 48px)', color: '#1A2A33', fontWeight: 700, marginBottom: '12px', lineHeight: 1.18 }}>
              Fellowship, PG Diploma &amp; Certificate Courses
            </h1>
            <p style={{ fontSize: '16px', color: '#5F6F7A', fontFamily: 'Inter, sans-serif', maxWidth: '520px', lineHeight: 1.7 }}>
              Choose from 74 internationally accredited programs designed specifically for practising medical professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Search */}
      <section style={{ backgroundColor: '#F9FBFC', borderBottom: '1px solid #E4EDF3', padding: '0 clamp(16px, 4vw, 24px)', position: 'sticky', top: '72px', zIndex: 30 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', padding: '0' }}>
          {/* Category tabs */}
          <div style={{ display: 'flex', gap: '4px', overflow: 'auto', padding: '16px 0' }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  router.push(buildUrl(1, cat === 'All Programs' ? '' : cat));
                }}
                style={{
                  padding: '8px 18px',
                  borderRadius: '8px',
                  border: '1.5px solid',
                  borderColor: activeTab === cat ? '#2A6F97' : '#D8E3EB',
                  backgroundColor: activeTab === cat ? '#2A6F97' : 'transparent',
                  color: activeTab === cat ? '#fff' : '#5F6F7A',
                  fontSize: '13px',
                  fontWeight: activeTab === cat ? 600 : 400,
                  fontFamily: 'Inter, sans-serif',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s',
                }}
              >
                {cat} <span style={{ opacity: 0.7, fontSize: '11px' }}>({COUNTS[cat]})</span>
              </button>
            ))}
          </div>

          {/* Search */}
          <div style={{ position: 'relative', minWidth: '260px' }}>
            <Search size={16} color="#5F6F7A" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search programs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px 10px 36px',
                border: '1.5px solid #D8E3EB',
                borderRadius: '10px',
                fontSize: '13px',
                fontFamily: 'Inter, sans-serif',
                color: '#1A2A33',
                backgroundColor: '#fff',
                outline: 'none',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#2A6F97')}
              onBlur={(e) => (e.target.style.borderColor = '#D8E3EB')}
            />
          </div>
        </div>
      </section>

      {/* Cards Grid */}
      <section style={{ backgroundColor: '#F9FBFC', padding: 'clamp(32px, 5vw, 52px) clamp(16px, 4vw, 24px) clamp(48px, 8vw, 80px)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {paginated.length === 0 && filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: '#5F6F7A', fontFamily: 'Inter, sans-serif' }}>
              <p style={{ fontSize: '32px', marginBottom: '12px' }}>🔍</p>
              <p style={{ fontSize: '16px' }}>No programs found matching &ldquo;{search}&rdquo;</p>
              <button onClick={() => setSearch('')} style={{ marginTop: '16px', color: '#2A6F97', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14px' }}>
                Clear search
              </button>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab + search + safePage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px', alignItems: 'stretch' }}
              >
                {paginated.map((prog, i) => {
                  const level = (prog as any).level || prog.category;
                  return (
                    <Link
                      key={prog.id}
                      href={`/courses/${prog.slug}`}
                      style={{ textDecoration: 'none', display: 'flex' }}
                    >
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid #E4EDF3',
                        display: 'flex',
                        flexDirection: 'column',
                        cursor: 'pointer',
                        width: '100%',
                      }}
                      whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(42,111,151,0.14)' }}
                    >
                      {/* Image */}
                      <div style={{ width: '100%', height: '200px', overflow: 'hidden', flexShrink: 0 }}>
                        {(prog as any).image ? (
                          <img
                            src={(prog as any).image}
                            alt={prog.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                          />
                        ) : (
                          <div style={{ width: '100%', height: '100%', backgroundColor: '#EEF3F7' }} />
                        )}
                      </div>

                      {/* Card body */}
                      <div style={{ padding: '20px 20px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <h3 style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '16px',
                          fontWeight: 700,
                          color: '#1A2A33',
                          lineHeight: 1.35,
                          marginBottom: '14px',
                        }}>
                          {prog.title}
                        </h3>

                        {/* Meta row */}
                        <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap', marginBottom: '16px' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#5F6F7A', fontFamily: 'Inter, sans-serif' }}>
                            <FileText size={13} color="#5F6F7A" />
                            {prog.lessons} Lessons
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#5F6F7A', fontFamily: 'Inter, sans-serif' }}>
                            <Clock size={13} color="#5F6F7A" />
                            {prog.duration}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#5F6F7A', fontFamily: 'Inter, sans-serif' }}>
                            <BarChart2 size={13} color="#5F6F7A" />
                            {level}
                          </span>
                        </div>
                      </div>

                      {/* Footer: logo + price */}
                      <div style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '12px 20px 16px',
                        borderTop: '1px solid #EEF3F7',
                        marginTop: 'auto',
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <img src="/logo.png" alt="DMHCA" style={{ height: '18px', width: 'auto', objectFit: 'contain', opacity: 0.7 }} />
                        </div>
                        {(prog as any).fee && (
                          <span style={{ fontSize: '16px', fontWeight: 700, color: '#2A6F97', fontFamily: 'Inter, sans-serif' }}>
                            {(prog as any).fee}
                          </span>
                        )}
                      </div>
                    </motion.div>
                    </Link>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '48px', flexWrap: 'wrap' }}>
              <button
                onClick={() => goPage(Math.max(1, safePage - 1))}
                disabled={safePage === 1}
                style={{
                  width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1.5px solid', borderColor: safePage === 1 ? '#E4EDF3' : '#D1D9E0',
                  backgroundColor: safePage === 1 ? '#F4F7FA' : '#fff',
                  cursor: safePage === 1 ? 'default' : 'pointer',
                }}
              >
                <ChevronLeft size={16} color={safePage === 1 ? '#C0CBD3' : '#2A6F97'} />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => goPage(p)}
                  style={{
                    width: '38px', height: '38px', borderRadius: '50%',
                    border: '1.5px solid', borderColor: safePage === p ? '#2A6F97' : '#D1D9E0',
                    backgroundColor: safePage === p ? '#2A6F97' : '#fff',
                    color: safePage === p ? '#fff' : '#1A2A33',
                    fontSize: '14px', fontWeight: safePage === p ? 700 : 400,
                    fontFamily: 'Inter, sans-serif',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {p}
                </button>
              ))}

              <button
                onClick={() => goPage(Math.min(totalPages, safePage + 1))}
                disabled={safePage === totalPages}
                style={{
                  width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1.5px solid', borderColor: safePage === totalPages ? '#E4EDF3' : '#D1D9E0',
                  backgroundColor: safePage === totalPages ? '#F4F7FA' : '#fff',
                  cursor: safePage === totalPages ? 'default' : 'pointer',
                }}
              >
                <ChevronRight size={16} color={safePage === totalPages ? '#C0CBD3' : '#2A6F97'} />
              </button>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
      <CoursesPageInner />
    </Suspense>
  );
}
