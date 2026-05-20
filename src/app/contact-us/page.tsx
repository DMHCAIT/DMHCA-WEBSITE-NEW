'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ChevronDown, GraduationCap } from 'lucide-react';

const SocialIcons = {
  Facebook: () => <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  Youtube: () => <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>,
  Instagram: () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  Linkedin: () => <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
};

const ADDRESSES = [
  {
    city: 'Delhi',
    address: 'Building No.-581/2, First Floor, Khatana Farm, Mandi Rd, Sultanpur, New Delhi-30',
    phone: '+91 7042011441',
    email: 'info@dmhca.in',
  },
  {
    city: 'Hyderabad',
    address: '8-2-351/W//B 1st Floor, Green Valley, Navodaya Society, Banjara Hills Road No-3, Behind Times of India, Hyderabad, Telangana 500034',
    phone: '+91 9899711530',
    email: 'info@dmhca.in',
  },
];

const FAQS = [
  {
    q: 'How can I contact your support team?',
    a: 'You can reach our support team via email at info@dmhca.in or by phone at +91 70420 11441. We are available Monday to Saturday, from 9:30 a.m. to 6:30 p.m.',
  },
  {
    q: 'What is the response time for inquiries?',
    a: 'We aim to respond to all inquiries within 24 hours on business days. For urgent matters, please call us directly at +91 70420 11441.',
  },
  {
    q: 'Do you offer live chat support?',
    a: 'Yes, we offer WhatsApp support at +91 70420 11441 during business hours for quick queries regarding our programs and enrollment.',
  },
  {
    q: 'What should I do if I have technical issues with a course?',
    a: 'For any technical issues with your course, please email support@dmhca.in or call +91 9289980479 and our academic support team will assist you.',
  },
  {
    q: 'Do you offer customer support outside regular business hours?',
    a: 'Our primary support is available Monday to Saturday, 9:30 a.m. to 6:30 p.m. For emergencies, you can WhatsApp us and we will get back to you as soon as possible.',
  },
];

const inputBase: React.CSSProperties = {
  width: '100%', padding: '11px 14px',
  border: '1.5px solid #D8E3EB', borderRadius: '8px',
  fontSize: '14px', fontFamily: 'Inter, sans-serif',
  color: '#1A2A33', outline: 'none', backgroundColor: '#F9FBFC',
  boxSizing: 'border-box',
};

export default function ContactUsPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitted(true);
  };

  const set = (k: string, v: string) => {
    setForm(f => ({ ...f, [k]: v }));
    setErrors(e => ({ ...e, [k]: '' }));
  };

  return (
    <main style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#F9FBFC', color: '#1A2A33' }}>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, #EEF3F7 0%, #dce8f0 100%)',
        padding: 'clamp(64px, 9vw, 100px) clamp(20px, 5vw, 80px) clamp(52px, 6vw, 72px)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1400&q=30&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.05 }} />
        <div style={{ maxWidth: '1160px', margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <span style={{ display: 'inline-block', backgroundColor: '#fff', border: '1px solid #D8E3EB', color: '#2A6F97', fontSize: '11px', fontWeight: 600, padding: '5px 16px', borderRadius: '20px', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '22px', boxShadow: '0 2px 8px rgba(42,111,151,0.1)' }}>
              Contact Us
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }}
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4.5vw, 50px)', fontWeight: 700, color: '#1A2A33', lineHeight: 1.18, marginBottom: '14px' }}
          >
            Get in Touch: <span style={{ color: '#2A6F97' }}>We&apos;re Here to Help</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }}
            style={{ fontSize: 'clamp(14px, 1.6vw, 16px)', color: '#5F6F7A', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto' }}
          >
            We&apos;re here to help with any questions or support you need
          </motion.p>
        </div>
      </section>

      {/* ── OUR ADDRESSES ────────────────────────────────── */}
      <section style={{ backgroundColor: '#fff', padding: 'clamp(36px, 5vw, 56px) clamp(20px, 5vw, 80px)' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, color: '#2A6F97', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '10px' }}>Locations</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 700, color: '#1A2A33' }}>Our Addresses</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {ADDRESSES.map(({ city, address, phone, email }, i) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                style={{ backgroundColor: '#F9FBFC', borderRadius: '16px', padding: '28px 24px', border: '1px solid #E2ECF4', boxShadow: '0 2px 12px rgba(42,111,151,0.06)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#EEF3F7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={18} color="#2A6F97" />
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: '#1A2A33', margin: 0 }}>{city}</h3>
                </div>
                <p style={{ fontSize: '13.5px', color: '#5F6F7A', lineHeight: 1.75, marginBottom: '14px' }}>{address}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <a href={`tel:${phone.replace(/\s/g,'')}`} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '13px', color: '#2A6F97', textDecoration: 'none', fontWeight: 500 }}>
                    <Phone size={13} /> {phone}
                  </a>
                  <a href={`mailto:${email}`} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '13px', color: '#2A6F97', textDecoration: 'none', fontWeight: 500 }}>
                    <Mail size={13} /> {email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACADEMIC SUPPORT + QUICK CONTACT ─────────────── */}
      <section style={{ backgroundColor: '#EEF3F7', padding: 'clamp(32px, 4vw, 48px) clamp(20px, 5vw, 80px)' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {/* Academic Support */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
            <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '28px 26px', border: '1px solid #D8E3EB', height: '100%', boxShadow: '0 2px 12px rgba(42,111,151,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: '#EEF3F7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <GraduationCap size={18} color="#2A6F97" />
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: '#1A2A33', margin: 0 }}>For Academic Support</h3>
              </div>
              <p style={{ fontSize: '14px', color: '#5F6F7A', lineHeight: 1.75, marginBottom: '16px' }}>
                For Academic Support, please contact our academic services team for guidance, resources, and personalized assistance.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a href="tel:+919289980479" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#2A6F97', fontWeight: 600, textDecoration: 'none' }}>
                  <Phone size={14} /> +91 9289980479
                </a>
                <a href="mailto:support@dmhca.in" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#2A6F97', fontWeight: 600, textDecoration: 'none' }}>
                  <Mail size={14} /> support@dmhca.in
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick contact info */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.07 }}>
            <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '28px 26px', border: '1px solid #D8E3EB', height: '100%', boxShadow: '0 2px 12px rgba(42,111,151,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: '#EEF3F7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Clock size={18} color="#2A6F97" />
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: '#1A2A33', margin: 0 }}>Business Hours</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                <div style={{ fontSize: '14px', color: '#5F6F7A' }}>Mon – Sat: 9:30 AM – 6:30 PM</div>
                <div style={{ fontSize: '14px', color: '#5F6F7A' }}>Sunday: Closed</div>
              </div>
              <div style={{ borderTop: '1px solid #E2ECF4', paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a href="tel:+917042011441" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#2A6F97', fontWeight: 600, textDecoration: 'none' }}>
                  <Phone size={14} /> +91 70420 11441
                </a>
                <a href="mailto:info@dmhca.in" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#2A6F97', fontWeight: 600, textDecoration: 'none' }}>
                  <Mail size={14} /> info@dmhca.in
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.14 }}>
            <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '28px 26px', border: '1px solid #D8E3EB', height: '100%', boxShadow: '0 2px 12px rgba(42,111,151,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: '#1A2A33', margin: 0 }}>Follow Us</h3>
              </div>
              <p style={{ fontSize: '14px', color: '#5F6F7A', lineHeight: 1.75, marginBottom: '18px' }}>Stay connected with us on social media for the latest updates and news.</p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {[
                  { Icon: SocialIcons.Facebook, href: 'https://www.facebook.com/dmhca.in', label: 'Facebook' },
                  { Icon: SocialIcons.Youtube, href: 'https://www.youtube.com/@dmhca', label: 'YouTube' },
                  { Icon: SocialIcons.Instagram, href: 'https://www.instagram.com/dmhca_official/', label: 'Instagram' },
                  { Icon: SocialIcons.Linkedin, href: 'https://www.linkedin.com/company/dmhca/', label: 'LinkedIn' },
                ].map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label}
                    style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#EEF3F7', border: '1px solid #D8E3EB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2A6F97', textDecoration: 'none', transition: 'background 0.2s, color 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#2A6F97'; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#EEF3F7'; e.currentTarget.style.color = '#2A6F97'; }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FORM + MAP ───────────────────────────────────── */}
      <section style={{ backgroundColor: '#fff', padding: 'clamp(36px, 5vw, 56px) clamp(20px, 5vw, 80px)' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: '32px', alignItems: 'stretch' }}>

          {/* Send a Message */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} style={{ height: '100%' }}>
            <div style={{ backgroundColor: '#F9FBFC', borderRadius: '20px', padding: 'clamp(24px, 3vw, 40px)', border: '1px solid #E2ECF4', boxShadow: '0 4px 24px rgba(42,111,151,0.07)', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700, color: '#1A2A33', marginBottom: '5px' }}>
                Send a <span style={{ color: '#2A6F97' }}>Message</span>
              </h2>
              <p style={{ fontSize: '14px', color: '#5F6F7A', marginBottom: '26px', lineHeight: 1.6 }}>Send us a message — we&apos;re ready to assist you</p>

              {submitted ? (
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', padding: '32px 0' }}>
                  <CheckCircle size={52} color="#2A6F97" style={{ margin: '0 auto 16px' }} />
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#1A2A33', marginBottom: '10px' }}>Message Sent!</h3>
                  <p style={{ fontSize: '14px', color: '#5F6F7A', lineHeight: 1.7 }}>Thank you for reaching out. We&apos;ll respond within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1A2A33', marginBottom: '7px' }}>Name</label>
                    <input type="text" placeholder="Your name" value={form.name}
                      onChange={e => set('name', e.target.value)}
                      style={{ ...inputBase, borderColor: errors.name ? '#E57373' : '#D8E3EB' }}
                      onFocus={e => (e.target.style.borderColor = '#2A6F97')}
                      onBlur={e => (e.target.style.borderColor = errors.name ? '#E57373' : '#D8E3EB')}
                    />
                    {errors.name && <p style={{ fontSize: '11px', color: '#E57373', marginTop: '3px' }}>{errors.name}</p>}
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1A2A33', marginBottom: '7px' }}>Email</label>
                    <input type="email" placeholder="Your email address" value={form.email}
                      onChange={e => set('email', e.target.value)}
                      style={{ ...inputBase, borderColor: errors.email ? '#E57373' : '#D8E3EB' }}
                      onFocus={e => (e.target.style.borderColor = '#2A6F97')}
                      onBlur={e => (e.target.style.borderColor = errors.email ? '#E57373' : '#D8E3EB')}
                    />
                    {errors.email && <p style={{ fontSize: '11px', color: '#E57373', marginTop: '3px' }}>{errors.email}</p>}
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1A2A33', marginBottom: '7px' }}>Message</label>
                    <textarea placeholder="How can we help you?" value={form.message} rows={5}
                      onChange={e => set('message', e.target.value)}
                      style={{ ...inputBase, borderColor: errors.message ? '#E57373' : '#D8E3EB', resize: 'vertical', minHeight: '120px' }}
                      onFocus={e => (e.target.style.borderColor = '#2A6F97')}
                      onBlur={e => (e.target.style.borderColor = errors.message ? '#E57373' : '#D8E3EB')}
                    />
                    {errors.message && <p style={{ fontSize: '11px', color: '#E57373', marginTop: '3px' }}>{errors.message}</p>}
                  </div>
                  <button type="submit"
                    style={{ backgroundColor: '#2A6F97', color: '#fff', border: 'none', borderRadius: '10px', padding: '13px 24px', fontSize: '14px', fontWeight: 600, fontFamily: 'Inter, sans-serif', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 4px 18px rgba(42,111,151,0.3)', transition: 'background 0.2s, transform 0.15s' }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1E5276'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#2A6F97'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    <Send size={14} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Map */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }} style={{ height: '100%' }}>
            <div style={{ backgroundColor: '#F9FBFC', borderRadius: '20px', padding: 'clamp(24px, 3vw, 40px)', border: '1px solid #E2ECF4', boxShadow: '0 4px 24px rgba(42,111,151,0.07)', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700, color: '#1A2A33', marginBottom: '5px' }}>
                Find Us on <span style={{ color: '#2A6F97' }}>Map</span>
              </h2>
              <p style={{ fontSize: '14px', color: '#5F6F7A', marginBottom: '24px', lineHeight: 1.6 }}>
                Building No.-581/2, First Floor, Khatana Farm, Mandi Rd, Sultanpur, New Delhi-30
              </p>
              <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #E2ECF4', boxShadow: '0 2px 16px rgba(42,111,151,0.08)', flex: 1, backgroundColor: '#fff', display: 'flex' }}>
                <iframe
                  title="DMHCA Delhi Office Map"
                  src="https://www.google.com/maps?q=Khatana+Farm,+Mandi+Rd,+Sultanpur,+New+Delhi-110030&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <a
                href="https://maps.app.goo.gl/erZgNhLGKDKM4LAh8"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '16px', fontSize: '13px', fontWeight: 600, color: '#2A6F97', textDecoration: 'none' }}
              >
                <MapPin size={14} /> Open in Google Maps
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#F9FBFC', padding: 'clamp(36px, 5vw, 56px) clamp(20px, 5vw, 80px)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, color: '#2A6F97', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '10px' }}>FAQ</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 700, color: '#1A2A33', marginBottom: '8px' }}>
              Frequently Asked <span style={{ color: '#2A6F97' }}>Questions</span>
            </h2>
            <p style={{ fontSize: '14px', color: '#5F6F7A', lineHeight: 1.6 }}>Quick answers to common questions</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {FAQS.map((faq, i) => (
                <div key={i} style={{ borderRadius: '12px', border: '1px solid #E2ECF4', overflow: 'hidden', backgroundColor: '#fff' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', padding: '16px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                  >
                    <span style={{ fontSize: '14px', fontWeight: 600, color: '#1A2A33', lineHeight: 1.4 }}>{faq.q}</span>
                    <ChevronDown size={16} color="#2A6F97" style={{ flexShrink: 0, transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s' }} />
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ padding: '0 18px 16px', fontSize: '13.5px', color: '#5F6F7A', lineHeight: 1.75, borderTop: '1px solid #E2ECF4' }}>
                          <div style={{ paddingTop: '14px' }}>{faq.a}</div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
