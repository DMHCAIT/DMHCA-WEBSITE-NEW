'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, Check } from 'lucide-react';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08 },
  }),
};

const TESTIMONIAL_AVATARS = [
  { src: 'https://dmhca.in/wp-content/uploads/2024/09/test4.png', name: 'Dr Subhangi' },
  { src: 'https://dmhca.in/wp-content/uploads/2024/09/test1.png', name: 'Dr Sachin' },
  { src: 'https://dmhca.in/wp-content/uploads/2024/09/test12.png', name: 'Dr. Haridas' },
  { src: 'https://dmhca.in/wp-content/uploads/2024/09/test11.png', name: 'Dr. Vivek' },
  { src: 'https://dmhca.in/wp-content/uploads/2024/09/test10.png', name: 'Dr Pawan' },
];

export default function AboutDmhcaPage() {
  return (
    <main style={{ fontFamily: 'Inter, sans-serif', color: '#1A2A33', backgroundColor: '#fff' }}>

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, #0b1e2d 0%, #122d44 45%, #1e4d6e 100%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background image overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=60&fit=crop)',
          backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.1,
        }} />
        {/* Soft radial glow */}
        <div style={{
          position: 'absolute', top: '20%', right: '-5%',
          width: 'clamp(300px, 40vw, 600px)', height: 'clamp(300px, 40vw, 600px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(42,111,151,0.35) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', left: '-8%',
          width: 'clamp(200px, 25vw, 400px)', height: 'clamp(200px, 25vw, 400px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(111,177,160,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Content */}
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          padding: 'clamp(84px, 10vw, 120px) clamp(20px, 5vw, 80px) clamp(60px, 7vw, 84px)',
          position: 'relative', zIndex: 1, width: '100%', boxSizing: 'border-box',
        }}>
          {/* Two-column layout: text left, image right */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,0.9fr)', gap: 'clamp(40px, 6vw, 72px)', alignItems: 'center' }}>
            {/* Left: text */}
            <div>
              {/* Badge */}
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  backgroundColor: 'rgba(111,177,160,0.15)', border: '1px solid rgba(111,177,160,0.35)',
                  borderRadius: '24px', padding: '6px 16px', marginBottom: '28px',
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#6FB1A0', display: 'inline-block' }} />
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#6FB1A0', letterSpacing: '1.8px', textTransform: 'uppercase' }}>About DMHCA</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }}
                style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700, color: '#fff', lineHeight: 1.18, marginBottom: '22px' }}
              >
                Empowering Doctors<br />
                <span style={{ color: '#6FB1A0' }}>Through Excellence</span> in<br />
                Medical Education
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.18 }}
                style={{ fontSize: 'clamp(14px, 1.5vw, 15.5px)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.9, maxWidth: '500px', marginBottom: '34px' }}
              >
                DMHCA — the Delhi Medical Health Care Academy — is a prestigious institute dedicated to equipping healthcare professionals with cutting-edge clinical skills, compassionate care values, and the confidence to lead.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.28 }} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/top-medical-courses" style={{
                  backgroundColor: '#2A6F97', color: '#fff', padding: '13px 28px', borderRadius: '8px',
                  textDecoration: 'none', fontSize: '14px', fontWeight: 600,
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  boxShadow: '0 6px 24px rgba(42,111,151,0.5)',
                  transition: 'transform 0.2s',
                }}>
                  Explore Programs <ArrowRight size={14} />
                </Link>
                <Link href="/contact-us" style={{
                  backgroundColor: 'rgba(255,255,255,0.07)', color: '#fff', padding: '13px 24px',
                  borderRadius: '8px', textDecoration: 'none', fontSize: '14px', fontWeight: 500,
                  border: '1px solid rgba(255,255,255,0.2)',
                }}>
                  Get in Touch
                </Link>
              </motion.div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
                style={{ display: 'flex', gap: '0', marginTop: '52px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.1)' }}
              >
                {[
                  { value: '12K+', label: 'Doctors Enrolled' },
                  { value: '74', label: 'Programs' },
                  { value: '100%', label: 'Practical' },
                  { value: '4.9★', label: 'Rating' },
                ].map((s, i) => (
                  <div key={s.label} style={{
                    flex: 1,
                    paddingLeft: i === 0 ? '0' : '20px',
                    borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    marginLeft: i > 0 ? '20px' : '0',
                  }}>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700, color: '#fff' }}>{s.value}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', marginTop: '4px', letterSpacing: '0.3px' }}>{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: image stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.15 }}
              style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              {/* Main image */}
              <div style={{
                position: 'relative', borderRadius: '20px', overflow: 'hidden',
                width: '100%', maxWidth: '420px', aspectRatio: '3/4',
                boxShadow: '0 40px 90px rgba(0,0,0,0.55)',
              }}>
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&q=80&fit=crop&crop=faces"
                  alt="DMHCA medical professional"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                {/* Dark gradient at bottom of image */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%', background: 'linear-gradient(to top, rgba(11,30,45,0.92) 0%, transparent 100%)' }} />

                {/* Inline floating card */}
                <div style={{
                  position: 'absolute', bottom: '20px', left: '16px', right: '16px',
                }}>  
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>Delhi Medical Health Care Academy</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[1,2,3,4,5].map(s => (
                        <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="#FBBC05"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" /></svg>
                      ))}
                    </div>
                    <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>4.9 · Trusted by 12,000+ doctors</span>
                  </div>
                </div>
              </div>

              {/* Floating mini card — top right (inside bounds) */}
              <motion.div
                initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
                style={{
                  position: 'absolute', top: '20px', right: '16px',
                  backgroundColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.15)', borderRadius: '14px',
                  padding: '12px 16px',
                }}
              >
                <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff', fontFamily: 'Playfair Display, serif' }}>74+</div>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>Courses Available</div>
              </motion.div>

              {/* Floating mini card — bottom left (inside bounds) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
                style={{
                  position: 'absolute', bottom: '90px', left: '16px',
                  backgroundColor: '#2A6F97', borderRadius: '14px',
                  padding: '12px 16px',
                  boxShadow: '0 8px 32px rgba(42,111,151,0.5)',
                }}
              >
                <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff', fontFamily: 'Playfair Display, serif' }}>12K+</div>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.65)', marginTop: '2px' }}>Doctors Enrolled</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── WHO WE ARE ───────────────────────────────────── */}
      <section style={{ padding: 'clamp(48px, 6vw, 76px) clamp(20px, 5vw, 80px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
            <p style={{ fontSize: '11px', fontWeight: 700, color: '#6FB1A0', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '14px' }}>Who We Are</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: '#1A2A33', lineHeight: 1.2, marginBottom: '20px' }}>
              Delhi Medical Health Care Academy
            </h2>
            <p style={{ fontSize: '15px', color: '#4A5E6A', lineHeight: 1.85, marginBottom: '16px' }}>
              <strong style={{ color: '#1A2A33' }}>DMHCA, also known as the Delhi Medical Health Care Academy,</strong> is a prestigious institute that specializes in medical training courses. Our institute is dedicated to equipping students with the knowledge and skills necessary to provide compassionate, understanding, and effective healthcare.
            </p>
            <p style={{ fontSize: '15px', color: '#4A5E6A', lineHeight: 1.85, marginBottom: '28px' }}>
              Our mission is to provide a transformative healthcare education experience. We believe education is the key to the future — that is why we are committed to providing our trainees with the competence and skills necessary to ensure the well-being of the world's population with knowledge, conviction, and confidence.
            </p>
            <Link href="/top-medical-courses" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#2A6F97', color: '#fff', padding: '12px 26px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
              Explore Programs <ArrowRight size={14} />
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 20px 60px rgba(42,111,151,0.15)' }}>
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&fit=crop" alt="DMHCA medical training" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────── */}
      <section style={{ backgroundColor: '#F4F8FB', padding: 'clamp(42px, 6vw, 68px) clamp(20px, 5vw, 80px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, color: '#6FB1A0', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>Simple Process</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: '#1A2A33' }}>How it works?</h2>
            <p style={{ fontSize: '15px', color: '#6B8090', marginTop: '8px' }}>12,000+ unique online course enrolments</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              { n: '01', title: 'Browse courses from our expert contributors.', desc: 'Explore our full library of Fellowship, PG Diploma, and Certificate programs.' },
              { n: '02', title: 'Purchase quickly and securely.', desc: 'Simple, fast enrollment with secure payment — no paperwork, no delays.' },
              { n: '03', title: "That's it! Start learning right away.", desc: 'Access your course immediately and learn at your own pace, on any device.' },
            ].map((step, i) => (
              <motion.div key={step.n} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                style={{ backgroundColor: '#fff', borderRadius: '14px', padding: '32px 28px', border: '1px solid #E2ECF4' }}
              >
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, color: '#D0E4F0', lineHeight: 1, marginBottom: '16px' }}>{step.n}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: '#1A2A33', lineHeight: 1.35, marginBottom: '10px' }}>{step.title}</h3>
                <p style={{ fontSize: '14px', color: '#6B8090', lineHeight: 1.75 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEARNING FEATURES ────────────────────────────── */}
      <section style={{ padding: 'clamp(42px, 6vw, 68px) clamp(20px, 5vw, 80px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, color: '#6FB1A0', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>What We Offer</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: '#1A2A33' }}>Start your Learning Journey Today!</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {[
              { title: 'Online Resources', body: 'Access to a wide range of online study material.', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=70&fit=crop' },
              { title: 'Experienced Faculty', body: 'Learn from experienced, diverse faculty for an enriching experience.', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=70&fit=crop' },
              { title: 'Hands-On Training', body: 'Gain practical experience with real patients through supervised sessions.', img: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&q=70&fit=crop' },
              { title: 'Networking Opportunities', body: 'Connect with peers and professionals in the field.', img: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&q=70&fit=crop' },
            ].map((f, i) => (
              <motion.div key={f.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid #E2ECF4', backgroundColor: '#fff' }}
              >
                <div style={{ height: '160px', overflow: 'hidden' }}>
                  <img src={f.img} alt={f.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
                <div style={{ padding: '22px 20px' }}>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '17px', fontWeight: 700, color: '#1A2A33', marginBottom: '8px' }}>{f.title}</h3>
                  <p style={{ fontSize: '13px', color: '#6B8090', lineHeight: 1.75 }}>{f.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────── */}
      <section style={{ backgroundColor: '#0d2233', padding: 'clamp(42px, 6vw, 68px) clamp(20px, 5vw, 80px)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', backgroundImage: 'url(https://dmhca.in/wp-content/uploads/2024/09/test12.png)', backgroundSize: 'cover', backgroundPosition: 'center top', opacity: 0.18 }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '11px', fontWeight: 700, color: '#6FB1A0', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>Testimonials</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 700, color: '#fff', textAlign: 'center', marginBottom: '48px' }}>
            A Life-Changing Experience – Highly Recommend
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
            {/* Photo */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', aspectRatio: '3/4', maxWidth: '340px', margin: '0 auto', boxShadow: '0 24px 64px rgba(0,0,0,0.4)' }}>
                <img src="https://dmhca.in/wp-content/uploads/2024/09/test12.png" alt="Dr. Haridas" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div style={{ fontSize: '80px', fontFamily: 'Georgia, serif', color: '#2A6F97', lineHeight: 0.7, marginBottom: '20px' }}>&ldquo;</div>
              <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '28px' }}>
                I recently completed the PG Diploma in Ultrasound from DMHCA, and it was an outstanding experience. The program offered excellent theoretical knowledge combined with practical, hands-on training. The instructors were highly experienced and supportive, making complex concepts easy to understand. I feel well-equipped for my career in ultrasound.
              </p>
              <div style={{ display: 'flex', gap: '3px', marginBottom: '20px' }}>
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="#FBBC05"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" /></svg>
                ))}
              </div>
              <div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: '#fff' }}>Dr. Haridas</div>
                <div style={{ fontSize: '13px', color: '#6FB1A0', marginTop: '3px' }}>Ultrasound Specialist</div>
              </div>

              {/* Avatar strip */}
              <div style={{ display: 'flex', gap: '10px', marginTop: '32px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginRight: '4px' }}>More voices</span>
                {TESTIMONIAL_AVATARS.filter(a => a.name !== 'Dr. Haridas').map((a) => (
                  <div key={a.name} style={{ width: '42px', height: '42px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.2)', flexShrink: 0 }}>
                    <img src={a.src} alt={a.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────── */}
      <section style={{ padding: 'clamp(42px, 6vw, 68px) clamp(20px, 5vw, 80px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'start' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p style={{ fontSize: '11px', fontWeight: 700, color: '#6FB1A0', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '14px' }}>Why Choose Us</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: '#1A2A33', lineHeight: 1.2, marginBottom: '16px' }}>
              Acquire new clinical competencies at your convenience, anytime and anywhere.
            </h2>
            <p style={{ fontSize: '15px', color: '#4A5E6A', lineHeight: 1.8, marginBottom: '32px' }}>
              Every program is built for practising doctors — flexible, clinically grounded, and career-relevant from day one.
            </p>
            <Link href="/top-medical-courses" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#2A6F97', color: '#fff', padding: '13px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
              Join Free <ArrowRight size={14} />
            </Link>
          </motion.div>
          <div>
            {[
              'Comprehensive Curriculum',
              'Flexible Learning Options',
              'Global Recognition',
              'Personalized Support',
              'Real-Time Case Studies',
              'Industry-Relevant Certifications',
            ].map((item, i) => (
              <motion.div key={item} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '15px 0', borderBottom: '1px solid #EEF3F7' }}
              >
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#EAF4F1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Check size={14} color="#6FB1A0" strokeWidth={2.5} />
                </div>
                <span style={{ fontSize: '15px', color: '#1A2A33', fontWeight: 500 }}>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BECOME INSTRUCTOR / SPECIALIST ──────────────── */}
      <section style={{ backgroundColor: '#F4F8FB', padding: 'clamp(42px, 6vw, 68px) clamp(20px, 5vw, 80px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: '#1A2A33' }}>Grow with DMHCA</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {/* Instructor */}
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', minHeight: '360px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
            >
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=75&fit=crop" alt="Medical instructor" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,34,51,0.95) 0%, rgba(13,34,51,0.3) 65%, transparent 100%)' }} />
              <div style={{ position: 'relative', padding: '32px 28px' }}>
                <p style={{ fontSize: '10px', fontWeight: 700, color: '#6FB1A0', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '10px' }}>For Experts</p>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 700, color: '#fff', lineHeight: 1.25, marginBottom: '10px' }}>
                  Become a Medical Instructor
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '20px' }}>
                  Shape Future Healthcare Leaders with Expertise and Hands-On Guidance.
                </p>
                <Link href="/contact-us" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#6FB1A0', color: '#fff', padding: '10px 22px', borderRadius: '7px', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>
                  Apply Now <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>

            {/* Specialist */}
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', minHeight: '360px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
            >
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&q=75&fit=crop" alt="Medical specialist" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,34,51,0.95) 0%, rgba(13,34,51,0.3) 65%, transparent 100%)' }} />
              <div style={{ position: 'relative', padding: '32px 28px' }}>
                <p style={{ fontSize: '10px', fontWeight: 700, color: '#C6A769', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '10px' }}>For Doctors</p>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 700, color: '#fff', lineHeight: 1.25, marginBottom: '10px' }}>
                  Become a Medical Specialist
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '20px' }}>
                  Advanced Training, Practical Experience, and Comprehensive Knowledge in Healthcare.
                </p>
                <Link href="/top-medical-courses" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#C6A769', color: '#fff', padding: '10px 22px', borderRadius: '7px', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>
                  Apply Now <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT STRIP ────────────────────────────────── */}
      <section style={{ backgroundColor: '#2A6F97', padding: 'clamp(32px, 5vw, 48px) clamp(20px, 5vw, 80px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(18px, 2.5vw, 22px)', color: '#fff', fontWeight: 700, marginBottom: '8px' }}>Ready to advance your career?</h3>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a href="tel:+917042011441" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '14px' }}>
                <Phone size={13} /> +91 70420 11441
              </a>
              <a href="mailto:info@dmhca.in" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '14px' }}>
                <Mail size={13} /> info@dmhca.in
              </a>
            </div>
          </div>
          <Link href="/top-medical-courses" style={{ backgroundColor: '#fff', color: '#2A6F97', padding: '12px 28px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
            Browse All Programs <ArrowRight size={14} />
          </Link>
        </div>
      </section>

    </main>
  );
}
