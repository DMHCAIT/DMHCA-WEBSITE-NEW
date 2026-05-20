'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { reviews } from '@/lib/data';

// Group reviews into pairs: [0,1], [2,3], [4,5]
const PAIRS = [
  [reviews[0], reviews[1]],
  [reviews[2], reviews[3]],
  [reviews[4], reviews[5]],
];

// Single reviews for mobile
const SINGLES = reviews;

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 48 48">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.35-8.16 2.35-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}

function StarRow({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#FBBC05">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="review-card-container" style={{
      display: 'flex',
      gap: '0',
      backgroundColor: '#fff',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 4px 24px rgba(42,111,151,0.10)',
      border: '1px solid #E8F0F7',
      flex: 1,
      minWidth: 0,
    }}>
      {/* Left strip — person info */}
      <div className="review-card-profile" style={{
        width: '160px',
        flexShrink: 0,
        background: 'linear-gradient(160deg, #EBF4FA 0%, #E4F0EA 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '28px 16px',
        gap: '10px',
        borderRight: '1px solid #D8E8F0',
      }}>
        {/* Photo with Google badge */}
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <div style={{
            width: '80px', height: '80px',
            borderRadius: '50%',
            border: '3px solid #fff',
            boxShadow: '0 4px 16px rgba(42,111,151,0.20)',
            overflow: 'hidden',
            backgroundColor: '#D8E8F0',
          }}>
            <img
              src={review.image}
              alt={review.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          {/* Google badge */}
          <div style={{
            position: 'absolute', bottom: '-2px', right: '-2px',
            backgroundColor: '#fff',
            borderRadius: '50%',
            width: '24px', height: '24px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
          }}>
            <GoogleIcon />
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: '#2A6F97', lineHeight: 1.3 }}>
            {review.name}
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#5F7A8A', marginTop: '4px' }}>
            {review.location}
          </div>
        </div>

        <StarRow count={review.rating} />
      </div>

      {/* Right — quote text */}
      <div className="review-card-text" style={{ flex: 1, padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative quote mark */}
        <div style={{
          position: 'absolute', top: '10px', left: '18px',
          fontFamily: 'Georgia, serif',
          fontSize: '72px',
          color: '#D8E8F0',
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
        }}>&ldquo;</div>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          color: '#2C3E50',
          lineHeight: 1.75,
          fontStyle: 'italic',
          position: 'relative',
          zIndex: 1,
          margin: 0,
        }}>
          {review.text}
        </p>
      </div>
    </div>
  );
}

export default function GoogleReviews() {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const totalPages = isMobile ? SINGLES.length : PAIRS.length;

  const goTo = (next: number) => {
    setDir(next > page ? 1 : -1);
    setPage(next);
  };

  // Reset page when switching between mobile/desktop
  useEffect(() => {
    if (page >= totalPages) {
      setPage(0);
    }
  }, [isMobile, page, totalPages]);

  return (
    <section style={{ backgroundColor: '#F4F8FB', padding: 'clamp(36px, 5vw, 64px) clamp(16px, 4vw, 24px)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <GoogleIcon />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#5F6F7A', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Google Reviews
            </span>
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3.5vw, 38px)', color: '#1A2A33', fontWeight: 700, marginBottom: '10px' }}>
            What Doctors Say About DMHCA
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            <StarRow count={5} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 700, color: '#2A6F97' }}>4.9</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#5F6F7A' }}>/ 5 · 600+ reviews</span>
          </div>
        </div>

        {/* Reviewer avatar strip */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '36px', flexWrap: 'wrap' }}>
          {reviews.map((r, i) => {
            const pairIdx = Math.floor(i / 2);
            const isActive = isMobile ? i === page : pairIdx === page;
            return (
              <button
                key={r.id}
                onClick={() => goTo(isMobile ? i : pairIdx)}
                style={{
                  padding: 0, border: 'none', background: 'none', cursor: 'pointer',
                  transition: 'transform 0.2s',
                  transform: isActive ? 'scale(1.10)' : 'scale(1)',
                }}
                title={r.name}
              >
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  border: `2.5px solid ${isActive ? '#2A6F97' : '#D8E3EB'}`,
                  overflow: 'hidden',
                  boxShadow: isActive ? '0 0 0 3px rgba(42,111,151,0.18)' : 'none',
                  transition: 'all 0.3s',
                  backgroundColor: '#EEF3F7',
                }}>
                  <img src={r.image} alt={r.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Carousel */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={page}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="review-carousel-content"
              style={{ display: 'flex', gap: '20px' }}
            >
              {isMobile ? (
                SINGLES[page] && <ReviewCard key={SINGLES[page].id} review={SINGLES[page]} />
              ) : (
                PAIRS[page].map((review) => review && <ReviewCard key={review.id} review={review} />)
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Nav: arrows + dots */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '32px' }}>
          <button
            onClick={() => goTo(Math.max(0, page - 1))}
            disabled={page === 0}
            style={{
              width: '40px', height: '40px', borderRadius: '50%',
              border: '1.5px solid',
              borderColor: page === 0 ? '#E4EDF3' : '#2A6F97',
              backgroundColor: page === 0 ? '#F4F8FB' : '#fff',
              cursor: page === 0 ? 'default' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}
          >
            <ChevronLeft size={18} color={page === 0 ? '#C0CBD3' : '#2A6F97'} />
          </button>

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === page ? '28px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  backgroundColor: i === page ? '#2A6F97' : '#C4D4DF',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(Math.min(totalPages - 1, page + 1))}
            disabled={page === totalPages - 1}
            style={{
              width: '40px', height: '40px', borderRadius: '50%',
              border: '1.5px solid',
              borderColor: page === totalPages - 1 ? '#E4EDF3' : '#2A6F97',
              backgroundColor: page === totalPages - 1 ? '#F4F8FB' : '#fff',
              cursor: page === totalPages - 1 ? 'default' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}
          >
            <ChevronRight size={18} color={page === totalPages - 1 ? '#C0CBD3' : '#2A6F97'} />
          </button>
        </div>
      </div>
    </section>
  );
}

