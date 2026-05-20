'use client';

import { notFound } from 'next/navigation';
import { use, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { events } from '@/lib/data';
import { Calendar, MapPin, ArrowLeft, CheckCircle, BookOpen, X, MessageCircle, Send } from 'lucide-react';

const typeColors: Record<string, { bg: string; text: string }> = {
  Conference: { bg: '#EBF4FA', text: '#2A6F97' },
  Webinar: { bg: '#EAF4F1', text: '#3A8B78' },
  Workshop: { bg: '#FBF5EA', text: '#9A7A3A' },
};

type EventData = (typeof events)[number] & {
  slug: string;
  about?: string;
  whyAttend?: string;
  whatYouLearn?: string[];
  whoShouldAttend?: string[];
  eventContent?: string[];
  speakers?: { name: string; designation: string; topic?: string; image?: string }[];
  price?: string | null;
  originalPrice?: string;
  registerUrl?: string;
};

function RegisterModal({ event, onClose }: { event: EventData; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', profession: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open the original registration URL in a new tab
    window.open(event.registerUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div
      style={{
        position: 'fixed', inset: 0, backgroundColor: 'rgba(26,42,51,0.6)',
        zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px',
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#fff', borderRadius: '20px',
          width: '100%', maxWidth: '480px',
          maxHeight: '90vh', overflowY: 'auto',
          padding: '32px', position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '16px', right: '16px',
            background: '#F4F7FA', border: 'none', borderRadius: '50%',
            width: '32px', height: '32px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <X size={16} color="#5F6F7A" />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <CheckCircle size={56} color="#3A8B78" style={{ margin: '0 auto 16px' }} />
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#1A2A33', marginBottom: '8px' }}>
              Redirecting to Registration
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#5F6F7A', lineHeight: 1.6 }}>
              You have been redirected to the official registration page. Complete your booking there.
            </p>
            <button
              onClick={onClose}
              style={{
                marginTop: '20px', padding: '10px 28px',
                backgroundColor: '#2A6F97', color: '#fff',
                border: 'none', borderRadius: '10px',
                fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14px',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <p style={{ fontSize: '11px', fontWeight: 600, color: '#6FB1A0', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'Inter, sans-serif', marginBottom: '6px' }}>
              Register Now
            </p>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: '#1A2A33', marginBottom: '4px', lineHeight: 1.3 }}>
              {event.title}
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#5F6F7A', marginBottom: '24px' }}>
              {event.date} · {event.location}
            </p>

            {event.price && (
              <div style={{ backgroundColor: '#EBF4FA', borderRadius: '12px', padding: '12px 16px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#2A6F97' }}>Registration Fee</span>
                <div>
                  {event.originalPrice && (
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#9AACB8', textDecoration: 'line-through', marginRight: '8px' }}>
                      {event.originalPrice}
                    </span>
                  )}
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: 700, color: '#2A6F97' }}>
                    {event.price}
                  </span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { label: 'Full Name', key: 'name', type: 'text', placeholder: 'Dr. John Smith' },
                { label: 'Email Address', key: 'email', type: 'email', placeholder: 'john@example.com' },
                { label: 'Phone Number', key: 'phone', type: 'tel', placeholder: '+91 98765 43210' },
                { label: 'Profession / Specialty', key: 'profession', type: 'text', placeholder: 'e.g. Cardiologist, MBBS Student' },
              ].map(({ label, key, type, placeholder }) => (
                <div key={key}>
                  <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: '#1A2A33', marginBottom: '5px' }}>
                    {label}
                  </label>
                  <input
                    type={type}
                    required
                    placeholder={placeholder}
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm(f => ({ ...f, [key]: e.target.value }))}
                    style={{
                      width: '100%', padding: '10px 14px',
                      border: '1.5px solid #D8E3EB', borderRadius: '10px',
                      fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A2A33',
                      outline: 'none', boxSizing: 'border-box',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#2A6F97')}
                    onBlur={(e) => (e.target.style.borderColor = '#D8E3EB')}
                  />
                </div>
              ))}
              <button
                type="submit"
                style={{
                  marginTop: '4px', padding: '13px',
                  backgroundColor: '#2A6F97', color: '#fff',
                  border: 'none', borderRadius: '12px',
                  fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '15px',
                  cursor: 'pointer', transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1d5278')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2A6F97')}
              >
                {event.price ? `Register — ${event.price}` : 'Register for Free'}
              </button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const event = events.find((e) => (e as EventData).slug === slug) as EventData | undefined;
  const [showModal, setShowModal] = useState(false);

  if (!event) return notFound();

  const colors = typeColors[event.type] || typeColors.Conference;

  return (
    <div style={{ backgroundColor: '#F9FBFC', minHeight: '100vh' }}>
      {/* HERO — cinematic banner with overlay */}
      <section
        style={{
          position: 'relative',
          minHeight: 'clamp(340px, 46vw, 460px)',
          overflow: 'hidden',
          backgroundColor: '#0F2230',
        }}
      >
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={event.image}
          alt={event.title}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'blur(2px) saturate(1.05)',
            transform: 'scale(1.05)',
            opacity: 0.45,
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(15,34,48,0.88) 0%, rgba(42,111,151,0.75) 55%, rgba(15,34,48,0.85) 100%)',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '1200px',
            margin: '0 auto',
            padding: 'clamp(28px, 5vw, 56px) clamp(20px, 5vw, 48px) clamp(40px, 6vw, 72px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: 'clamp(340px, 46vw, 460px)',
          }}
        >
          <Link
            href="/simple-event"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.85)',
              textDecoration: 'none',
              marginBottom: '20px',
              fontWeight: 600,
              width: 'fit-content',
            }}
          >
            <ArrowLeft size={14} /> Back to Events
          </Link>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <span
              style={{
                display: 'inline-block',
                backgroundColor: 'rgba(255,255,255,0.95)',
                color: colors.text,
                fontSize: '11px',
                fontWeight: 700,
                padding: '5px 14px',
                borderRadius: '20px',
                fontFamily: 'Inter, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                marginBottom: '18px',
              }}
            >
              {event.type}
            </span>
            <h1
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(26px, 4.2vw, 46px)',
                color: '#fff',
                fontWeight: 700,
                lineHeight: 1.18,
                marginBottom: '22px',
                maxWidth: '820px',
                textShadow: '0 2px 20px rgba(0,0,0,0.3)',
              }}
            >
              {event.title}
            </h1>
            <div
              style={{
                display: 'flex',
                gap: '22px',
                flexWrap: 'wrap',
                marginBottom: '28px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Calendar size={16} color="#fff" />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#fff', fontWeight: 500 }}>
                  {event.date}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} color="#fff" />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#fff', fontWeight: 500 }}>
                  {event.location}
                </span>
              </div>
              {event.eventContent && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <BookOpen size={16} color="#fff" />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#fff', fontWeight: 500 }}>
                    {event.eventContent.length} Sessions
                  </span>
                </div>
              )}
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
              <button
                onClick={() => setShowModal(true)}
                style={{
                  padding: '14px 32px',
                  backgroundColor: '#fff',
                  color: '#2A6F97',
                  border: 'none',
                  borderRadius: '12px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '15px',
                  cursor: 'pointer',
                  transition: 'transform 0.15s, box-shadow 0.2s',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 14px 36px rgba(0,0,0,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                }}
              >
                {event.price ? `Register — ${event.price}` : 'Register for Free'}
              </button>
              {event.price && event.originalPrice && (
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'line-through',
                  }}
                >
                  {event.originalPrice}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* BODY */}
      <section style={{ padding: 'clamp(40px, 5vw, 64px) clamp(16px, 4vw, 32px)' }}>
        <div
          className="event-grid"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 340px)',
            gap: 'clamp(24px, 3vw, 44px)',
            alignItems: 'start',
          }}
        >
          {/* Main column */}
          <div>
            {/* About */}
            {event.about && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid #E4EDF3',
                  borderRadius: '18px',
                  padding: 'clamp(24px, 3vw, 36px)',
                  marginBottom: '24px',
                  boxShadow: '0 2px 14px rgba(42,111,151,0.05)',
                }}
              >
                <p style={{ fontSize: '11px', fontWeight: 700, color: '#2A6F97', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'Inter, sans-serif' }}>
                  Overview
                </p>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(20px, 2.4vw, 26px)', color: '#1A2A33', fontWeight: 700, marginBottom: '16px', lineHeight: 1.3 }}>
                  About the Event
                </h2>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#4A5F6A', lineHeight: 1.85, margin: 0 }}>
                  {event.about}
                </p>
              </motion.div>
            )}

            {/* Why Attend */}
            {event.whyAttend && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{
                  background: 'linear-gradient(135deg, #EBF4FA 0%, #E4F0EA 100%)',
                  border: '1px solid #D8E8F0',
                  borderRadius: '18px',
                  padding: 'clamp(24px, 3vw, 36px)',
                  marginBottom: '24px',
                }}
              >
                <p style={{ fontSize: '11px', fontWeight: 700, color: '#2A6F97', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'Inter, sans-serif' }}>
                  Highlight
                </p>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(20px, 2.4vw, 26px)', color: '#1A2A33', fontWeight: 700, marginBottom: '16px', lineHeight: 1.3 }}>
                  Why Attend?
                </h2>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#2C3E50', lineHeight: 1.85, margin: 0 }}>
                  {event.whyAttend}
                </p>
              </motion.div>
            )}

            {/* What You'll Learn */}
            {event.whatYouLearn && event.whatYouLearn.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{ marginBottom: '24px' }}
              >
                <div style={{ marginBottom: '18px' }}>
                  <p style={{ fontSize: '11px', fontWeight: 700, color: '#2A6F97', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '6px', fontFamily: 'Inter, sans-serif' }}>
                    Takeaways
                  </p>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(20px, 2.4vw, 26px)', color: '#1A2A33', fontWeight: 700, lineHeight: 1.3, margin: 0 }}>
                    What You&apos;ll Learn
                  </h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px' }}>
                  {event.whatYouLearn.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'flex-start',
                        backgroundColor: '#fff',
                        border: '1px solid #E4EDF3',
                        borderRadius: '14px',
                        padding: '16px 18px',
                        boxShadow: '0 1px 6px rgba(42,111,151,0.04)',
                      }}
                    >
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '8px',
                          backgroundColor: '#EAF4F1',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <CheckCircle size={15} color="#3A8B78" />
                      </div>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13.5px', color: '#1A2A33', lineHeight: 1.6 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Event Content / Curriculum */}
            {event.eventContent && event.eventContent.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{ marginBottom: '24px' }}
              >
                <div style={{ marginBottom: '18px' }}>
                  <p style={{ fontSize: '11px', fontWeight: 700, color: '#2A6F97', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '6px', fontFamily: 'Inter, sans-serif' }}>
                    Curriculum
                  </p>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(20px, 2.4vw, 26px)', color: '#1A2A33', fontWeight: 700, lineHeight: 1.3, margin: 0 }}>
                    Event Content
                  </h2>
                </div>
                <div
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid #E4EDF3',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 14px rgba(42,111,151,0.05)',
                  }}
                >
                  {event.eventContent.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        padding: '16px 22px',
                        borderBottom: i < event.eventContent!.length - 1 ? '1px solid #EEF3F7' : 'none',
                        transition: 'background 0.15s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F9FBFC')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#fff')}
                    >
                      <span
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '10px',
                          background: 'linear-gradient(135deg, #2A6F97 0%, #1E5276 100%)',
                          color: '#fff',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '13px',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1A2A33', lineHeight: 1.5 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Speakers */}
            {event.speakers && event.speakers.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{ marginBottom: '8px' }}
              >
                <div style={{ marginBottom: '18px' }}>
                  <p style={{ fontSize: '11px', fontWeight: 700, color: '#2A6F97', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '6px', fontFamily: 'Inter, sans-serif' }}>
                    Faculty
                  </p>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(20px, 2.4vw, 26px)', color: '#1A2A33', fontWeight: 700, lineHeight: 1.3, margin: 0 }}>
                    Our Speakers
                  </h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
                  {event.speakers.map((sp, i) => (
                    <div
                      key={i}
                      style={{
                        backgroundColor: '#fff',
                        border: '1px solid #E4EDF3',
                        borderRadius: '16px',
                        padding: '24px 18px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        boxShadow: '0 2px 12px rgba(42,111,151,0.06)',
                      }}
                    >
                      {sp.image && (
                        <div
                          style={{
                            width: '96px',
                            height: '96px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '3px solid #EEF3F7',
                            boxShadow: '0 6px 18px rgba(42,111,151,0.18)',
                            marginBottom: '14px',
                          }}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={sp.image} alt={sp.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        </div>
                      )}
                      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '16px', color: '#1A2A33', fontWeight: 700, marginBottom: '4px', lineHeight: 1.3 }}>
                        {sp.name}
                      </h3>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12.5px', color: '#2A6F97', fontWeight: 600, margin: 0, lineHeight: 1.4 }}>
                        {sp.designation}
                      </p>
                      {sp.topic && (
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#5F6F7A', margin: '10px 0 0', lineHeight: 1.5 }}>
                          {sp.topic}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {/* Registration card */}
            <div
              style={{
                backgroundColor: '#fff',
                border: '1px solid #E4EDF3',
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 6px 24px rgba(42,111,151,0.08)',
              }}
            >
              <div
                style={{
                  background: 'linear-gradient(135deg, #2A6F97 0%, #1E5276 100%)',
                  padding: '20px 24px',
                  color: '#fff',
                }}
              >
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                  Register Now
                </p>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '17px', color: '#fff', fontWeight: 700, lineHeight: 1.3, margin: 0 }}>
                  Secure Your Spot
                </h3>
              </div>
              <div style={{ padding: '22px 24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '18px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#EBF4FA', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Calendar size={15} color="#2A6F97" />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10.5px', color: '#9AACB8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '2px' }}>
                        Date
                      </p>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A2A33', fontWeight: 600, margin: 0 }}>
                        {event.date}
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#EBF4FA', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MapPin size={15} color="#2A6F97" />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10.5px', color: '#9AACB8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '2px' }}>
                        Location
                      </p>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A2A33', fontWeight: 600, margin: 0 }}>
                        {event.location}
                      </p>
                    </div>
                  </div>
                  {event.eventContent && (
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#EBF4FA', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <BookOpen size={15} color="#2A6F97" />
                      </div>
                      <div>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10.5px', color: '#9AACB8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '2px' }}>
                          Sessions
                        </p>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#1A2A33', fontWeight: 600, margin: 0 }}>
                          {event.eventContent.length} Topics
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {event.price && (
                  <div
                    style={{
                      textAlign: 'center',
                      marginBottom: '16px',
                      padding: '14px',
                      backgroundColor: '#F9FBFC',
                      borderRadius: '12px',
                      border: '1px dashed #D8E3EB',
                    }}
                  >
                    {event.originalPrice && (
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#9AACB8', textDecoration: 'line-through', marginBottom: '2px' }}>
                        {event.originalPrice}
                      </p>
                    )}
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '26px', fontWeight: 700, color: '#2A6F97', margin: 0 }}>
                      {event.price}
                    </p>
                  </div>
                )}

                <button
                  onClick={() => setShowModal(true)}
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: 'linear-gradient(135deg, #2A6F97 0%, #1E5276 100%)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '12px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '15px',
                    cursor: 'pointer',
                    transition: 'transform 0.15s, box-shadow 0.2s',
                    boxShadow: '0 8px 22px rgba(42,111,151,0.25)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(42,111,151,0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 22px rgba(42,111,151,0.25)';
                  }}
                >
                  {event.price ? `Register — ${event.price}` : 'Register for Free'}
                </button>

                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11.5px', color: '#9AACB8', textAlign: 'center', marginTop: '12px', margin: '12px 0 0' }}>
                  For queries:{' '}
                  <a href="tel:+917042011441" style={{ color: '#2A6F97', textDecoration: 'none', fontWeight: 600 }}>
                    +91 7042011441
                  </a>
                </p>
              </div>
            </div>

            {/* Who Should Attend sidebar card */}
            {event.whoShouldAttend && event.whoShouldAttend.length > 0 && (
              <div
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid #E4EDF3',
                  borderRadius: '18px',
                  padding: '22px 24px',
                  boxShadow: '0 2px 12px rgba(42,111,151,0.05)',
                }}
              >
                <p style={{ fontSize: '10.5px', fontWeight: 700, color: '#2A6F97', letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '6px', fontFamily: 'Inter, sans-serif' }}>
                  Audience
                </p>
                <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '17px', color: '#1A2A33', fontWeight: 700, marginBottom: '14px', margin: '0 0 14px' }}>
                  Who Should Attend?
                </h4>
                {event.whoShouldAttend.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '10px',
                      alignItems: 'flex-start',
                      marginBottom: i < event.whoShouldAttend!.length - 1 ? '10px' : '0',
                    }}
                  >
                    <div
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#2A6F97',
                        marginTop: '7px',
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#4A5F6A', lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </motion.aside>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .event-grid {
              grid-template-columns: 1fr !important;
            }
            .event-grid aside {
              position: static !important;
            }
          }
        `}</style>
      </section>

      {/* Leave A Comment */}
      <CommentSection />

      {/* Register Modal */}
      <AnimatePresence>
        {showModal && <RegisterModal event={event} onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </div>
  );
}

function CommentSection() {
  const [form, setForm] = useState({ name: '', email: '', comment: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.comment.trim()) return;
    setSubmitted(true);
    setForm({ name: '', email: '', comment: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1px solid #D8E3EB',
    backgroundColor: '#fff',
    fontSize: '14px',
    color: '#1A2A33',
    fontFamily: 'Inter, sans-serif',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'Inter, sans-serif',
    fontSize: '12px',
    fontWeight: 700,
    color: '#2A6F97',
    marginBottom: '8px',
    letterSpacing: '0.4px',
    textTransform: 'uppercase',
  };

  return (
    <section style={{ backgroundColor: '#F9FBFC', padding: 'clamp(40px, 5vw, 72px) clamp(20px, 5vw, 80px)' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundColor: '#fff',
            border: '1px solid #E2ECF4',
            borderRadius: '20px',
            padding: 'clamp(24px, 3vw, 40px)',
            boxShadow: '0 4px 24px rgba(42,111,151,0.07)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                backgroundColor: '#EEF3F7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <MessageCircle size={19} color="#2A6F97" />
            </div>
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(20px, 2.5vw, 26px)', color: '#1A2A33', fontWeight: 700, margin: 0, lineHeight: 1.25 }}>
                Leave a Comment
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#5F6F7A', margin: '2px 0 0' }}>
                Share your thoughts or questions about this event.
              </p>
            </div>
          </div>

          {submitted && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 16px',
                backgroundColor: '#EAF4F1',
                border: '1px solid #C8E0D8',
                borderRadius: '10px',
                marginBottom: '20px',
              }}
            >
              <CheckCircle size={16} color="#3A8B78" />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13.5px', color: '#1F5A48', fontWeight: 600 }}>
                Thanks! Your comment has been received.
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              <div>
                <label htmlFor="comment-name" style={labelStyle}>Name</label>
                <input
                  id="comment-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your Name"
                  required
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#2A6F97'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(42,111,151,0.12)'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = '#D8E3EB'; e.currentTarget.style.boxShadow = 'none'; }}
                />
              </div>
              <div>
                <label htmlFor="comment-email" style={labelStyle}>Email</label>
                <input
                  id="comment-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Your Email"
                  required
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#2A6F97'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(42,111,151,0.12)'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = '#D8E3EB'; e.currentTarget.style.boxShadow = 'none'; }}
                />
              </div>
            </div>
            <div>
              <label htmlFor="comment-body" style={labelStyle}>Comment</label>
              <textarea
                id="comment-body"
                value={form.comment}
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
                placeholder="Enter your comment"
                required
                rows={6}
                style={{ ...inputStyle, resize: 'vertical', minHeight: '140px', lineHeight: 1.6 }}
                onFocus={(e) => { e.currentTarget.style.borderColor = '#2A6F97'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(42,111,151,0.12)'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = '#D8E3EB'; e.currentTarget.style.boxShadow = 'none'; }}
              />
            </div>
            <div>
              <button
                type="submit"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#2A6F97',
                  color: '#fff',
                  border: 'none',
                  padding: '13px 26px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: 700,
                  fontFamily: 'Inter, sans-serif',
                  cursor: 'pointer',
                  transition: 'background 0.2s, transform 0.15s',
                  boxShadow: '0 6px 18px rgba(42,111,151,0.25)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1E5276'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2A6F97'; }}
              >
                <Send size={14} /> Submit Comment
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
