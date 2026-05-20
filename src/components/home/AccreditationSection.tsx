'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function AccreditationSection() {
  return (
    <section style={{ backgroundColor: '#F9FBFC', padding: 'clamp(28px, 4vw, 52px) clamp(16px, 4vw, 24px)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '52px' }}>
          <ShieldCheck size={32} color="#2A6F97" style={{ marginBottom: '16px' }} />
          <p style={{ fontSize: '12px', fontWeight: 600, color: '#6FB1A0', textTransform: 'uppercase', letterSpacing: '1.2px', fontFamily: 'Inter, sans-serif', marginBottom: '10px' }}>
            International Accreditation
          </p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3.5vw, 36px)', color: '#1A2A33', fontWeight: 700, maxWidth: '560px', lineHeight: 1.25 }}>
            Programs recognized globally by leading accreditation bodies
          </h2>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
          {[
            {
              name: 'IBMP',
              fullName: 'International Board of Medicine and Public Health',
              desc: 'Our Fellowship and PG Diploma programs are recognized by IBMP — a premier global body for medical education standards.',
              logo: '/ibmp logo.png'
            },
            {
              name: 'CPD',
              fullName: 'Continuing Professional Development',
              desc: 'CPD-accredited programs ensure that every course contributes meaningfully to your ongoing professional learning record.',
              logo: '/cpd logo.png'
            },
          ].map((body, i) => (
            <motion.div
              key={body.name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{
                backgroundColor: '#fff',
                border: '1px solid #D8E3EB',
                borderRadius: '18px',
                padding: '48px 40px',
                maxWidth: '500px',
                minHeight: '580px',
                width: '100%',
                textAlign: 'center',
                boxShadow: '0 2px 20px rgba(42,111,151,0.06)',
              }}
            >
              {body.logo ? (
                <div style={{
                  width: body.name === 'IBMP' ? '300px' : '240px', height: body.name === 'IBMP' ? '300px' : '240px',
                  margin: '0 auto 20px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <img 
                    src={body.logo} 
                    alt={body.name}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </div>
              ) : (
                <div style={{
                  width: '72px', height: '72px',
                  background: 'linear-gradient(135deg, #2A6F97 0%, #6FB1A0 100%)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  <span style={{ color: '#fff', fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700 }}>
                    {body.name}
                  </span>
                </div>
              )}
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#1A2A33', marginBottom: '10px' }}>
                {body.name} Accredited
              </h3>
              <p style={{ fontSize: '12px', fontWeight: 600, color: '#2A6F97', fontFamily: 'Inter, sans-serif', marginBottom: '14px', letterSpacing: '0.3px' }}>
                {body.fullName}
              </p>
              <p style={{ fontSize: '13px', color: '#5F6F7A', lineHeight: 1.7, fontFamily: 'Inter, sans-serif' }}>
                {body.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
