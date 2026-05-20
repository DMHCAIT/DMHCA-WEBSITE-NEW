'use client';

import { useEffect, useRef } from 'react';
import { trainingPartners } from '@/lib/data';

export default function TrainingPartners() {
  const trackRef = useRef<HTMLDivElement>(null);

  // GSAP-free infinite CSS scroll (GSAP would require canvas; CSS is equivalent here)
  const doubled = [...trainingPartners, ...trainingPartners];

  return (
    <section style={{ backgroundColor: '#EEF3F7', padding: 'clamp(28px, 4vw, 52px) clamp(16px, 4vw, 24px)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ fontSize: '12px', fontWeight: 600, color: '#6FB1A0', textTransform: 'uppercase', letterSpacing: '1.2px', fontFamily: 'Inter, sans-serif', marginBottom: '10px' }}>
            Training Partners
          </p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(22px, 3vw, 32px)', color: '#1A2A33', fontWeight: 700 }}>
            Trusted by India's Leading Hospitals
          </h2>
        </div>

        {/* Infinite scroll strip */}
        <div style={{ overflow: 'hidden', position: 'relative' }}>
          {/* Fade edges */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to right, #EEF3F7, transparent)', zIndex: 10 }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to left, #EEF3F7, transparent)', zIndex: 10 }} />

          <div
            ref={trackRef}
            className="animate-scroll-left"
            style={{ display: 'flex', gap: '20px', width: 'max-content' }}
          >
            {[
              '/Training partners/KIMS_Main_Logo_Col-01.jpg',
              '/Training partners/Logo-medicover.png',
              '/Training partners/Noora-Logo-01.png',
              '/Training partners/VPH_New-Logo-1024x462.png',
              '/Training partners/Untitled-design.png',
              '/Training partners/images.png',
              '/Training partners/images (1).png',
              '/Training partners/logo.png',
              '/Training partners/1678526353_7823551bcf91d278e567.jpg',
              '/Training partners/skinfinity-skin-hair-laser-and-aesthetic-clinic-noida-625ce89ba1d3f.png',
            ].concat([
              '/Training partners/KIMS_Main_Logo_Col-01.jpg',
              '/Training partners/Logo-medicover.png',
              '/Training partners/Noora-Logo-01.png',
              '/Training partners/VPH_New-Logo-1024x462.png',
              '/Training partners/Untitled-design.png',
              '/Training partners/images.png',
              '/Training partners/images (1).png',
              '/Training partners/logo.png',
              '/Training partners/1678526353_7823551bcf91d278e567.jpg',
              '/Training partners/skinfinity-skin-hair-laser-and-aesthetic-clinic-noida-625ce89ba1d3f.png',
            ]).map((partner, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid #D8E3EB',
                  borderRadius: '12px',
                  padding: '20px 32px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(42,111,151,0.06)',
                  minWidth: '180px',
                  height: '80px',
                }}
              >
                <img 
                  src={partner} 
                  alt="Training Partner"
                  style={{ maxWidth: '140px', maxHeight: '60px', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
