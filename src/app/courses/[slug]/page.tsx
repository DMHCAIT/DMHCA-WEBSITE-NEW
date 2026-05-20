'use client';

import { programs } from '@/lib/data';
import { notFound } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, BookOpen, GraduationCap, ChevronDown, ChevronUp, CheckCircle, Globe, Award, Phone } from 'lucide-react';
import Link from 'next/link';
import { useState, use } from 'react';
import EnrollModal from '@/components/courses/EnrollModal';

const HERO_BG = '#2D3F5A';
const GOLD = '#2A6F97';

const categoryLabel: Record<string, string> = {
  Fellowship: 'Radiology',
  'PG Diploma': 'Diploma',
  Certificate: 'Certificate',
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getDefaultFaqs(p: any) {
  return [
    { q: `Who is the ${p.title} designed for?`, a: `This program is designed for ${p.eligibility}. It is ideal for medical professionals seeking to deepen their expertise in this specialty.` },
    { q: `How will I access the ${p.title} content at DMHCA?`, a: "All course content is available through DMHCA's 24/7 online Learning Management System (LMS). You will receive login credentials upon enrollment." },
    { q: `What is the duration of the ${p.title}?`, a: `The program runs for ${p.duration} with ${p.lessons} lessons structured across comprehensive modules.` },
    { q: `What is the fee for the ${p.title}?`, a: `The program fee is ${p.fee ?? 'available on request'}. Contact our admissions team for payment options.` },
    { q: `Will I receive a certificate after completing this program?`, a: "Yes, upon successful completion you will receive a globally recognised certificate from DMHCA, accredited by IBMP & CPD." },
    { q: `Can this ${p.category} program enhance my career?`, a: "Yes. DMHCA's programs are recognised by leading institutions and can significantly boost your clinical skills, career prospects, and earning potential." },
  ];
}

export default function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const program = programs.find((p) => p.slug === slug);
  const [enrollOpen, setEnrollOpen] = useState(false);
  const [openModules, setOpenModules] = useState<number[]>([0]);
  const [openFaqs, setOpenFaqs] = useState<number[]>([0]);

  if (!program) notFound();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const p = program as any;

  const toggleModule = (i: number) =>
    setOpenModules((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]);

  const toggleFaq = (i: number) =>
    setOpenFaqs((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]);

  const faqs: { q: string; a: string }[] = p.faqs ?? getDefaultFaqs(program);

  const statsRows = [
    { icon: <Clock size={16} color={GOLD} />, label: 'Duration', value: program.duration },
    { icon: <BookOpen size={16} color={GOLD} />, label: 'Lessons', value: program.lessons },
    { icon: <Award size={16} color={GOLD} />, label: 'Quizzes', value: p.quizzes ?? 0 },
    { icon: <GraduationCap size={16} color={GOLD} />, label: 'Maximum Students', value: p.maxStudents ?? 30 },
    { icon: <Globe size={16} color={GOLD} />, label: 'Language', value: p.language ?? 'English' },
    { icon: <GraduationCap size={16} color={GOLD} />, label: 'Program Type', value: program.category },
    { icon: <Award size={16} color={GOLD} />, label: 'Certificate', value: 'yes' },
  ];

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#f4f6f9' }}>

      {/* ── Hero ── */}
      <section style={{ backgroundColor: HERO_BG, padding: 'clamp(40px,6vw,72px) clamp(16px,4vw,48px) clamp(32px,5vw,56px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Category pill */}
          <div style={{ marginBottom: '20px' }}>
            <span style={{ backgroundColor: 'rgba(42,111,151,0.12)', color: GOLD, fontSize: '12px', fontWeight: 600, padding: '5px 16px', borderRadius: '20px', border: `1px solid ${GOLD}` }}>
              {categoryLabel[program.category] ?? program.category}
            </span>
          </div>

          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(18px,2.2vw,30px)', color: '#fff', fontWeight: 700, lineHeight: 1.2, marginBottom: '16px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {program.title}
          </h1>
          <p style={{ fontSize: '16px', color: '#B8C9D9', lineHeight: 1.75, maxWidth: '640px', marginBottom: '40px' }}>
            {program.description}
          </p>

          {/* 3 stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '16px', maxWidth: '720px' }}>
            {[
              { icon: <Clock size={22} color={GOLD} />, value: program.duration, label: 'Duration' },
              { icon: <BookOpen size={22} color={GOLD} />, value: program.lessons, label: 'Modules' },
              { icon: <GraduationCap size={22} color={GOLD} />, value: program.level, label: 'Level' },
            ].map(({ icon, value, label }) => (
              <div key={label} style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px 24px', backdropFilter: 'blur(4px)' }}>
                {icon}
                <p style={{ fontSize: '22px', fontWeight: 700, color: '#fff', margin: '8px 0 4px' }}>{value}</p>
                <p style={{ fontSize: '13px', color: '#8FA8BF', margin: 0 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2-column body ── */}
      <section style={{ padding: 'clamp(32px,5vw,56px) clamp(16px,4vw,48px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 340px', gap: '32px', alignItems: 'start' }}>

          {/* ── LEFT ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            {/* 1. Course Overview */}
            <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '32px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1A2A33', marginBottom: '16px' }}>Course Overview</h2>
              <p style={{ fontSize: '15px', color: '#5F6F7A', lineHeight: 1.85 }}>{program.overview}</p>
            </div>

            {/* 2. What you'll learn */}
            {p.whatYouLearn && (
              <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '32px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1A2A33', marginBottom: '20px' }}>What you&apos;ll learn</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {(p.whatYouLearn as string[]).map((item: string, i: number) => (
                    <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <CheckCircle size={17} color={GOLD} style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ fontSize: '14px', color: '#1A2A33', lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Eligibility Criteria */}
            <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '32px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1A2A33', marginBottom: '20px' }}>Eligibility Criteria</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {p.eligibilityPoints ? (
                  (p.eligibilityPoints as string[]).map((pt: string, i: number) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle size={17} color={GOLD} style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ fontSize: '14px', color: '#1A2A33', lineHeight: 1.6 }}>{pt}</span>
                    </div>
                  ))
                ) : (
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle size={17} color={GOLD} style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: '#1A2A33' }}>{program.eligibility}</span>
                  </div>
                )}
              </div>
            </div>

            {/* 4. Curriculum */}
            <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '32px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1A2A33', marginBottom: '6px' }}>Curriculum</h2>
              <p style={{ fontSize: '13px', color: '#5F6F7A', marginBottom: '24px' }}>
                {p.modules?.length ?? program.curriculum.length} Sections &bull; {program.lessons} Lessons &bull; {program.duration}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {p.modules ? (
                  (p.modules as { title: string; lessons: string[] }[]).map((mod, i) => (
                    <div key={i} style={{ border: '1px solid #E4EDF3', borderRadius: '10px', overflow: 'hidden' }}>
                      <button
                        onClick={() => toggleModule(i)}
                        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 20px', background: openModules.includes(i) ? '#F4F7FA' : '#fff', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif', textAlign: 'left', gap: '12px' }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                          <span style={{ backgroundColor: HERO_BG, color: '#fff', fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '6px', whiteSpace: 'nowrap' }}>
                            Module {i + 1}
                          </span>
                          <span style={{ fontSize: '14px', fontWeight: 600, color: '#1A2A33' }}>{mod.title.replace(/^Module \d+:\s*/, '')}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                          <span style={{ fontSize: '12px', color: '#5F6F7A', whiteSpace: 'nowrap' }}>{mod.lessons.length} lessons</span>
                          {openModules.includes(i) ? <ChevronUp size={16} color="#5F6F7A" /> : <ChevronDown size={16} color="#5F6F7A" />}
                        </div>
                      </button>
                      <AnimatePresence>
                        {openModules.includes(i) && (
                          <motion.div key="content" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: 'hidden' }}>
                            <div style={{ padding: '0 20px 16px' }}>
                              {mod.lessons.map((lesson, j) => (
                                <div key={j} style={{ padding: '10px 0', borderTop: '1px solid #F0F4F7', fontSize: '14px', color: '#5F6F7A', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                  <BookOpen size={13} color={GOLD} /> {lesson}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))
                ) : (
                  program.curriculum.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', backgroundColor: '#F4F7FA', borderRadius: '8px', fontSize: '14px', color: '#1A2A33' }}>
                      <CheckCircle size={16} color={GOLD} /> {item}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* 5. FAQ */}
            <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '32px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1A2A33', marginBottom: '20px' }}>Frequently Asked Questions</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {faqs.map((faq, i) => (
                  <div key={i} style={{ border: '1px solid #E4EDF3', borderRadius: '10px', overflow: 'hidden' }}>
                    <button
                      onClick={() => toggleFaq(i)}
                      style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', background: openFaqs.includes(i) ? '#F4F7FA' : '#fff', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif', textAlign: 'left', gap: '12px' }}
                    >
                      <span style={{ fontSize: '14px', fontWeight: 600, color: '#1A2A33', flex: 1 }}>{faq.q}</span>
                      {openFaqs.includes(i) ? <ChevronUp size={16} color="#5F6F7A" style={{ flexShrink: 0 }} /> : <ChevronDown size={16} color="#5F6F7A" style={{ flexShrink: 0 }} />}
                    </button>
                    <AnimatePresence>
                      {openFaqs.includes(i) && (
                        <motion.div key="faq-content" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} style={{ overflow: 'hidden' }}>
                          <div style={{ padding: '0 20px 16px' }}>
                            <p style={{ fontSize: '14px', color: '#5F6F7A', lineHeight: 1.7, margin: 0, paddingTop: '4px', borderTop: '1px solid #F0F4F7' }}>{faq.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <div style={{ position: 'sticky', top: '80px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* YouTube Video */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.10)', aspectRatio: '16/9', width: '100%' }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/5-2QOkBu180?start=42"
                title="DMHCA Course Overview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ display: 'block', width: '100%', height: '100%' }}
              />
            </div>

            {/* Price + CTA card */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}>
              {/* Gold banner */}
              <div style={{ backgroundColor: GOLD, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#fff', fontSize: '13px', fontWeight: 700 }}>⚡ LIMITED SEATS AVAILABLE – ENROLL NOW!</span>
              </div>

              <div style={{ backgroundColor: '#fff', padding: '24px' }}>
                <p style={{ fontFamily: '"Playfair Display", serif', fontSize: '38px', fontWeight: 800, color: '#1A2A33', margin: '0 0 4px', letterSpacing: '-0.5px' }}>{p.fee}</p>
                <p style={{ fontSize: '12px', color: '#5F6F7A', margin: '0 0 16px' }}>Program Fee</p>

                {/* Bullets */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                  {['500+ Students Enrolled', '95% Placement Rate', 'Globally Recognized'].map((b) => (
                    <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#1A2A33' }}>
                      <CheckCircle size={15} color={GOLD} /> {b}
                    </div>
                  ))}
                </div>

                {/* Enroll Now */}
                <button
                  onClick={() => setEnrollOpen(true)}
                  style={{ width: '100%', backgroundColor: '#B8CBD8', color: '#2D3F5A', border: 'none', borderRadius: '10px', padding: '14px', fontSize: '15px', fontWeight: 700, fontFamily: 'Inter, sans-serif', cursor: 'pointer', marginBottom: '10px', transition: 'background 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#2D3F5A'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#B8CBD8'; e.currentTarget.style.color = '#2D3F5A'; }}
                >
                  Enroll Now
                </button>

                {/* Talk to Counselor */}
                <button
                  onClick={() => setEnrollOpen(true)}
                  style={{ width: '100%', backgroundColor: '#fff', color: '#1A2A33', border: '1.5px solid #D8E3EB', borderRadius: '10px', padding: '13px', fontSize: '14px', fontWeight: 600, fontFamily: 'Inter, sans-serif', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'border-color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = GOLD)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#D8E3EB')}
                >
                  <Phone size={15} /> Talk to Counselor
                </button>
              </div>
            </div>

            {/* Stats card */}
            <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              {statsRows.map(({ icon, label, value }, i) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 0', borderTop: i === 0 ? 'none' : '1px solid #F0F4F7', fontSize: '13px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2D3F5A', fontWeight: 500 }}>{icon} {label}</span>
                  <span style={{ color: '#1A2A33', fontWeight: 700 }}>{value}</span>
                </div>
              ))}
              <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#2D3F5A', fontWeight: 600 }}>
                <CheckCircle size={15} color={GOLD} /> Full lifetime access
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section style={{ backgroundColor: '#E8EFF5', padding: 'clamp(36px,5vw,56px) clamp(16px,4vw,48px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: 700, color: '#1A2A33', marginBottom: '24px' }}>Related Courses</h2>
          <Link href="/top-medical-courses" style={{ backgroundColor: HERO_BG, color: '#fff', padding: '13px 36px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
            View All 74 Programs
          </Link>
        </div>
      </section>

      <EnrollModal courseName={enrollOpen ? program.title : null} onClose={() => setEnrollOpen(false)} />
    </div>
  );
}
