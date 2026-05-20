'use client';

import { motion } from 'framer-motion';

const universities = [
  {
    name: 'Himalayan University',
    location: 'Itanagar, Arunachal Pradesh',
    desc: 'A UGC-recognized university providing academic validation for DMHCA\'s fellowship and diploma programs.',
    logo: '/himalayan university logo.jpg',
  },
  {
    name: 'BIR Tikendrajit University',
    location: 'Imphal, Manipur',
    desc: 'An emerging state university offering co-credentialed postgraduate medical education programs with DMHCA.',
    logo: '/BIR Tikendrajit University.jpg',
  },
];

export default function UniversityPartners() {
  return (
    <section style={{ backgroundColor: '#F9FBFC', padding: 'clamp(28px, 4vw, 52px) clamp(16px, 4vw, 24px)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <p style={{ fontSize: '12px', fontWeight: 600, color: '#6FB1A0', textTransform: 'uppercase', letterSpacing: '1.2px', fontFamily: 'Inter, sans-serif', marginBottom: '10px' }}>
            University Partners
          </p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3.5vw, 36px)', color: '#1A2A33', fontWeight: 700 }}>
            Backed by Recognized Universities
          </h2>
          <p style={{ fontSize: '15px', color: '#5F6F7A', fontFamily: 'Inter, sans-serif', marginTop: '12px', maxWidth: '480px', margin: '12px auto 0' }}>
            Our programs are co-credentialed with UGC-recognized universities, ensuring your qualification holds national and international weight.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
          {universities.map((uni, i) => (
            <motion.div
              key={uni.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
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
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0 2px 16px rgba(42,111,151,0.06)',
              }}
            >
              {uni.logo ? (
                <div style={{ width: uni.name === 'Himalayan University' ? '340px' : '280px', height: uni.name === 'Himalayan University' ? '340px' : '280px', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={uni.logo} alt={uni.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                </div>
              ) : (
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎓</div>
              )}
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#1A2A33', marginBottom: '6px' }}>
                {uni.name}
              </h3>
              <p style={{ fontSize: '12px', color: '#6FB1A0', fontFamily: 'Inter, sans-serif', fontWeight: 600, marginBottom: '14px' }}>
                {uni.location}
              </p>
              <p style={{ fontSize: '13px', color: '#5F6F7A', lineHeight: 1.7, fontFamily: 'Inter, sans-serif' }}>
                {uni.desc}
              </p>
              <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '8px', height: '8px', backgroundColor: '#6FB1A0', borderRadius: '50%' }} />
                <span style={{ fontSize: '12px', color: '#5F6F7A', fontFamily: 'Inter, sans-serif' }}>UGC Recognized</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
