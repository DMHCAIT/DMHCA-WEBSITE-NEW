'use client';

import { motion } from 'framer-motion';
import { categories } from '@/lib/data';
import Link from 'next/link';

export default function TopCategories() {
  return (
    <section style={{ backgroundColor: '#F9FBFC', padding: '96px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <p style={{ fontSize: '12px', fontWeight: 600, color: '#6FB1A0', textTransform: 'uppercase', letterSpacing: '1.2px', fontFamily: 'Inter, sans-serif', marginBottom: '10px' }}>
            Explore by Specialty
          </p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3.5vw, 36px)', color: '#1A2A33', fontWeight: 700 }}>
            Top Program Categories
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                href={`/top-medical-courses?search=${encodeURIComponent(cat.label)}`}
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    backgroundColor: '#fff',
                    border: '1.5px solid #E4EDF3',
                    borderRadius: '14px',
                    padding: '24px 20px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    textAlign: 'center',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = cat.color;
                    el.style.boxShadow = `0 8px 32px ${cat.color}22`;
                    el.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = '#E4EDF3';
                    el.style.boxShadow = 'none';
                    el.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{
                    width: '44px', height: '44px',
                    backgroundColor: i % 2 === 0 ? '#EBF4FA' : '#EAF4F1',
                    borderRadius: '12px',
                    margin: '0 auto 14px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '18px',
                  }}>
                    {['🏥', '❤️', '🩺', '✨', '🔬', '🏨', '🌿', '🔊'][i % 8]}
                  </div>
                  <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#1A2A33', marginBottom: '6px', lineHeight: 1.3 }}>
                    {cat.label}
                  </h4>
                  <p style={{ fontSize: '11px', color: cat.color, fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    {cat.count} Programs
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
