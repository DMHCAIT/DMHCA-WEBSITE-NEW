'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { events } from '@/lib/data';
import { Calendar, MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const typeColors: Record<string, { bg: string; text: string }> = {
  Conference: { bg: '#EBF4FA', text: '#2A6F97' },
  Webinar: { bg: '#EAF4F1', text: '#3A8B78' },
  Workshop: { bg: '#FBF5EA', text: '#9A7A3A' },
};

const GAP = 16;

function useCardWidth() {
  const [width, setWidth] = useState(296);
  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      if (vw < 480) setWidth(Math.min(300, vw - 48));
      else if (vw < 768) setWidth(Math.min(300, vw - 64));
      else setWidth(296);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return width;
}

export default function EventsSection() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const CARD_WIDTH = useCardWidth();

  const scrollTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, events.length - 1));
    setActive(clamped);
    if (trackRef.current) {
      trackRef.current.scrollTo({
        left: clamped * (CARD_WIDTH + GAP),
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / (CARD_WIDTH + GAP));
      setActive(idx);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const ArrowBtn = ({ dir }: { dir: 'prev' | 'next' }) => {
    const disabled = dir === 'prev' ? active === 0 : active === events.length - 1;
    return (
      <button
        onClick={() => scrollTo(active + (dir === 'next' ? 1 : -1))}
        disabled={disabled}
        style={{
          width: '40px', height: '40px',
          borderRadius: '50%',
          backgroundColor: disabled ? '#EEF3F7' : '#fff',
          border: `1.5px solid ${disabled ? '#E4EDF3' : '#D1D9E0'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: disabled ? 'default' : 'pointer',
          transition: 'all 0.2s',
          flexShrink: 0,
        }}
        onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.backgroundColor = '#EBF4FA'; }}
        onMouseLeave={(e) => { if (!disabled) e.currentTarget.style.backgroundColor = '#fff'; }}
      >
        {dir === 'prev'
          ? <ChevronLeft size={18} color={disabled ? '#C0CBD3' : '#2A6F97'} />
          : <ChevronRight size={18} color={disabled ? '#C0CBD3' : '#2A6F97'} />}
      </button>
    );
  };

  return (
    <section style={{ backgroundColor: '#F9FBFC', padding: 'clamp(36px, 5vw, 64px) 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p style={{ fontSize: '12px', fontWeight: 600, color: '#6FB1A0', textTransform: 'uppercase', letterSpacing: '1.2px', fontFamily: 'Inter, sans-serif', marginBottom: '10px' }}>
              Events &amp; Webinars
            </p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3.5vw, 36px)', color: '#1A2A33', fontWeight: 700, lineHeight: 1.25 }}>
              Stay Connected &amp; Keep Learning
            </h2>
          </div>
          <Link href="/simple-event" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            color: '#2A6F97', fontWeight: 600, fontSize: '14px',
            fontFamily: 'Inter, sans-serif',
            textDecoration: 'none',
            borderBottom: '1.5px solid #2A6F97', paddingBottom: '2px',
          }}>
            View All Events <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Scrollable track */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: `${GAP}px`,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {events.map((event, i) => {
            const colors = typeColors[event.type] || typeColors.Conference;
            const ev = event as typeof event & { image?: string; location?: string };
            return (
              <Link
                key={event.id}
                href={`/simple-event/${event.slug}`}
                style={{ flex: `0 0 ${CARD_WIDTH}px`, scrollSnapAlign: 'start', textDecoration: 'none', display: 'block' }}
              >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(42,111,151,0.12)' }}
                style={{
                  width: '100%',
                  backgroundColor: '#fff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #E4EDF3',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  height: '100%',
                }}
              >
                <div style={{ width: '100%', height: '200px', overflow: 'hidden', flexShrink: 0, backgroundColor: '#EEF3F7' }}>
                  {ev.image && (
                    <img
                      src={ev.image}
                      alt={event.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  )}
                </div>
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span style={{
                    alignSelf: 'flex-start',
                    backgroundColor: colors.bg, color: colors.text,
                    fontSize: '11px', fontWeight: 600,
                    padding: '3px 10px', borderRadius: '20px',
                    fontFamily: 'Inter, sans-serif', marginBottom: '12px',
                  }}>
                    {event.type}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                    <Calendar size={13} color="#5F6F7A" />
                    <span style={{ fontSize: '13px', color: '#5F6F7A', fontFamily: 'Inter, sans-serif' }}>{event.date}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 700, color: '#2A6F97', lineHeight: 1.4, marginBottom: '12px', flex: 1 }}>
                    {event.title}
                  </h3>
                  {ev.location && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
                      <MapPin size={13} color="#5F6F7A" />
                      <span style={{ fontSize: '13px', color: '#5F6F7A', fontFamily: 'Inter, sans-serif' }}>{ev.location}</span>
                    </div>
                  )}
                </div>
              </motion.div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Controls: prev arrow + dots + next arrow */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '32px' }}>
          <ArrowBtn dir="prev" />
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {[-1, 0, 1].map((offset) => {
              const i = active + offset;
              if (i < 0 || i >= events.length) return <span key={offset} style={{ width: '10px' }} />;
              const isActive = offset === 0;
              return (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  style={{
                    width: isActive ? '28px' : '10px',
                    height: '10px',
                    borderRadius: '5px',
                    backgroundColor: isActive ? '#1A2A33' : '#D1D9E0',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.3s ease',
                  }}
                />
              );
            })}
          </div>
          <ArrowBtn dir="next" />
        </div>
      </div>
    </section>
  );
}
