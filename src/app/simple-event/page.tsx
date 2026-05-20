'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { events } from '@/lib/data';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const typeColors: Record<string, { bg: string; text: string }> = {
  Conference: { bg: '#EBF4FA', text: '#2A6F97' },
  Webinar: { bg: '#EAF4F1', text: '#3A8B78' },
  Workshop: { bg: '#FBF5EA', text: '#9A7A3A' },
};

export default function EventsPage() {
  return (
    <div style={{ backgroundColor: '#F9FBFC', minHeight: '100vh' }}>
      {/* Page Header */}
      <section style={{ backgroundColor: '#EEF3F7', padding: 'clamp(40px, 7vw, 64px) clamp(16px, 4vw, 24px) clamp(32px, 5vw, 52px)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p style={{ fontSize: '12px', fontWeight: 600, color: '#6FB1A0', textTransform: 'uppercase', letterSpacing: '1.2px', fontFamily: 'Inter, sans-serif', marginBottom: '10px' }}>
              Events &amp; Webinars
            </p>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 5vw, 48px)', color: '#1A2A33', fontWeight: 700, marginBottom: '12px', lineHeight: 1.18 }}>
              Stay Connected &amp; Keep Learning
            </h1>
            <p style={{ fontSize: '16px', color: '#5F6F7A', fontFamily: 'Inter, sans-serif', maxWidth: '520px', lineHeight: 1.7 }}>
              Browse our upcoming workshops, webinars, and conferences designed for medical professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section style={{ padding: 'clamp(32px, 5vw, 56px) clamp(16px, 4vw, 24px)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}
          >
                {events.map((event, i) => {
                  const colors = typeColors[event.type] || typeColors.Conference;
                  const ev = event as typeof event & { image?: string; location?: string; slug?: string };
                  return (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(42,111,151,0.12)' }}
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid #E4EDF3',
                        display: 'flex',
                        flexDirection: 'column',
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
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
                            <MapPin size={13} color="#5F6F7A" />
                            <span style={{ fontSize: '13px', color: '#5F6F7A', fontFamily: 'Inter, sans-serif' }}>{ev.location}</span>
                          </div>
                        )}
                        <Link
                          href={`/simple-event/${ev.slug || ''}`}
                          style={{
                            display: 'inline-flex', alignItems: 'center', gap: '6px',
                            padding: '9px 18px',
                            backgroundColor: '#2A6F97', color: '#fff',
                            borderRadius: '10px', textDecoration: 'none',
                            fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600,
                            alignSelf: 'flex-start', transition: 'background 0.2s',
                          }}
                          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#1d5278')}
                          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#2A6F97')}
                        >
                          View Details <ArrowRight size={13} />
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
