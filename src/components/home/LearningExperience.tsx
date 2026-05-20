'use client';

import { motion } from 'framer-motion';
import { PlayCircle, BookOpen, Users, Clock } from 'lucide-react';

export default function LearningExperience() {
  return (
    <section style={{ backgroundColor: '#EEF3F7', padding: 'clamp(36px, 5vw, 64px) clamp(16px, 4vw, 24px)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p style={{ fontSize: '12px', fontWeight: 600, color: '#6FB1A0', textTransform: 'uppercase', letterSpacing: '1.2px', fontFamily: 'Inter, sans-serif', marginBottom: '12px' }}>
              Learning Experience
            </p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 4vw, 40px)', color: '#1A2A33', fontWeight: 700, lineHeight: 1.25, marginBottom: '20px' }}>
              A learning model built for practising doctors
            </h2>
            <p style={{ fontSize: '15px', color: '#5F6F7A', lineHeight: 1.8, fontFamily: 'Inter, sans-serif', marginBottom: '36px' }}>
              Our blended learning approach combines structured video lectures with live case discussions, mentorship sessions, and evidence-based clinical content — delivered at your own pace.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { icon: BookOpen, title: 'Structured Curriculum', desc: 'Each program follows a clinical-first, evidence-based curriculum developed by practising specialists.' },
                { icon: Users, title: 'Expert Faculty', desc: 'Learn directly from senior clinicians, researchers, and specialists with decades of frontline experience.' },
                { icon: Clock, title: 'Flexible Schedule', desc: 'Complete your program on weekends and evenings — no need to pause your clinical practice.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{
                    width: '40px', height: '40px',
                    backgroundColor: '#EBF4FA', borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={18} color="#2A6F97" />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 600, color: '#1A2A33', marginBottom: '4px' }}>{title}</h4>
                    <p style={{ fontSize: '13px', color: '#5F6F7A', lineHeight: 1.6, fontFamily: 'Inter, sans-serif', margin: 0 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            style={{ position: 'relative' }}
          >
            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(42,111,151,0.15)', position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80&fit=crop"
                alt="Medical education session"
                style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'rgba(26,42,51,0.35)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{
                  width: '72px', height: '72px',
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
                  transition: 'transform 0.2s',
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <PlayCircle size={40} color="#2A6F97" fill="#EBF4FA" />
                </div>
              </div>
            </div>
            {/* Floating card — hidden on mobile via CSS */}
            <div className="float-card-desktop">
              <div style={{ fontSize: '22px', fontWeight: 700, color: '#2A6F97', fontFamily: 'Playfair Display, serif' }}>4.9★</div>
              <div style={{ fontSize: '12px', color: '#5F6F7A', fontFamily: 'Inter, sans-serif', marginTop: '4px' }}>Average program rating</div>
              <div style={{ fontSize: '11px', color: '#6FB1A0', fontFamily: 'Inter, sans-serif', marginTop: '2px' }}>from 3,000+ reviews</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
