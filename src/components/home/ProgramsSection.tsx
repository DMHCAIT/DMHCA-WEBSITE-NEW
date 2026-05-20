'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { programs } from '@/lib/data';
import { ArrowRight, FileText, Clock, BarChart2 } from 'lucide-react';

export default function ProgramsSection() {
  const featured = programs.slice(0, 6);

  return (
    <section style={{ backgroundColor: '#F9FBFC', padding: 'clamp(36px, 5vw, 64px) clamp(16px, 4vw, 24px)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '52px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p style={{ fontSize: '12px', fontWeight: 600, color: '#6FB1A0', textTransform: 'uppercase', letterSpacing: '1.2px', fontFamily: 'Inter, sans-serif', marginBottom: '10px' }}>
              Our Programs
            </p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 4vw, 40px)', color: '#1A2A33', fontWeight: 700, lineHeight: 1.2, maxWidth: '480px' }}>
              Fellowship, PG Diploma &amp; Certificate Programs
            </h2>
          </div>
          <Link
            href="/top-medical-courses"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              color: '#2A6F97', textDecoration: 'none', fontSize: '14px', fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
              borderBottom: '1.5px solid #2A6F97', paddingBottom: '2px',
            }}
          >
            View All Programs <ArrowRight size={15} />
          </Link>
        </div>

        {/* Cards Grid — responsive: 3 cols desktop, 2 tablet, 1 mobile */}
        <div className="programs-grid">
          {featured.map((prog, i) => (
            <Link
              key={prog.id}
              href={`/courses/${prog.slug}`}
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(42,111,151,0.13)' }}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #E4EDF3',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
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

                {/* Body */}
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
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '16px' }}>
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
                      {(prog as any).level || prog.category}
                    </span>
                  </div>
                </div>

                {/* Footer */}
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
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginTop: '52px' }}
        >
          <Link
            href="/top-medical-courses"
            style={{
              backgroundColor: '#2A6F97',
              color: '#fff',
              padding: '14px 36px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1E5276')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2A6F97')}
          >
            View All 74 Programs <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
