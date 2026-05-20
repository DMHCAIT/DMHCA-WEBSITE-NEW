'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FileText,
  Ban,
  ArrowRightLeft,
  UserCog,
  FileCheck,
  ShieldAlert,
  XCircle,
  Info,
  Mail,
  Phone,
} from 'lucide-react';

const SECTIONS = [
  {
    icon: Ban,
    title: 'Non-Refundable Fees',
    points: [
      'All fees paid are strictly non-refundable',
      'Fees are non-transferable under any circumstances',
      'Applies to every course and program offered',
    ],
  },
  {
    icon: ArrowRightLeft,
    title: 'Batch Transfers',
    points: [
      'Batch transfer is not permitted as a standard practice',
      'Special cases may be considered at the Academy\u2019s discretion',
      'A requisite transfer fee must be paid if approved',
    ],
  },
  {
    icon: UserCog,
    title: 'Contact Information',
    points: [
      'Students must keep contact details up to date',
      'Inform the Academy of any change in permanent or correspondence address',
      'Notify promptly about changes to PG address or email ID',
    ],
  },
  {
    icon: FileCheck,
    title: 'Document Submission',
    points: [
      'Academy may require specific certificates or documents',
      'Submissions may be required before, during, or after admission',
      'All decisions regarding documentation rest with the Academy',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'Document Authenticity',
    points: [
      'Students must certify that all documents are original and genuine',
      'Fake or forged documents will result in fee forfeiture',
      'Separate legal action will be taken by the Academy',
    ],
  },
  {
    icon: XCircle,
    title: 'Admission Cancellation',
    points: [
      'The Academy may cancel admission at its discretion',
      'Failure to submit relevant documents can lead to cancellation',
      'Non-fulfillment of any condition may result in cancellation',
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#F9FBFC', color: '#1A2A33' }}>
      {/* HERO */}
      <section
        style={{
          background: 'linear-gradient(135deg, #EEF3F7 0%, #dce8f0 100%)',
          padding: 'clamp(64px, 9vw, 100px) clamp(20px, 5vw, 80px) clamp(52px, 6vw, 72px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(42,111,151,0.08), transparent 40%), radial-gradient(circle at 80% 80%, rgba(111,177,160,0.08), transparent 40%)',
          }}
        />
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#fff', border: '1px solid #D8E3EB', color: '#2A6F97', fontSize: '11px', fontWeight: 600, padding: '6px 16px', borderRadius: '20px', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '22px', boxShadow: '0 2px 8px rgba(42,111,151,0.1)' }}
          >
            <FileText size={13} /> Legal
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4.5vw, 50px)', fontWeight: 700, color: '#1A2A33', lineHeight: 1.18, marginBottom: '14px' }}
          >
            Terms & <span style={{ color: '#2A6F97' }}>Conditions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            style={{ fontSize: 'clamp(14px, 1.6vw, 16px)', color: '#5F6F7A', lineHeight: 1.8, maxWidth: '620px', margin: '0 auto' }}
          >
            We&rsquo;re on a mission to deliver engaging, curated courses at a reasonable price.
          </motion.p>
        </div>
      </section>

      {/* INTRO CARD */}
      <section style={{ padding: 'clamp(32px, 4vw, 48px) clamp(20px, 5vw, 80px) 0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundColor: '#fff',
              border: '1px solid #E2ECF4',
              borderRadius: '20px',
              padding: 'clamp(24px, 3vw, 36px)',
              boxShadow: '0 4px 24px rgba(42,111,151,0.07)',
              display: 'flex',
              gap: '20px',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                backgroundColor: '#EEF3F7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Info size={22} color="#2A6F97" />
            </div>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700, color: '#1A2A33', marginBottom: '10px' }}>
                Please Read Carefully
              </h2>
              <p style={{ fontSize: '14.5px', color: '#5F6F7A', lineHeight: 1.8, margin: 0 }}>
                By enrolling in any DMHCA program, students agree to the terms and conditions outlined below. These terms cover fees, admission, documentation, and conduct expected from every learner.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTIONS GRID */}
      <section style={{ padding: 'clamp(32px, 4vw, 48px) clamp(20px, 5vw, 80px)' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, color: '#2A6F97', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '10px' }}>
              Terms Of Admission
            </p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: '#1A2A33' }}>
              Key Conditions
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '20px',
              alignItems: 'stretch',
            }}
          >
            {SECTIONS.map(({ icon: Icon, title, points }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid #E2ECF4',
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: '0 2px 12px rgba(42,111,151,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  height: '100%',
                  minHeight: '240px',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                whileHover={{ y: -3, boxShadow: '0 12px 28px rgba(42,111,151,0.12)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '11px',
                      backgroundColor: '#EEF3F7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color="#2A6F97" />
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '17px', fontWeight: 700, color: '#1A2A33', margin: 0, lineHeight: 1.3 }}>
                    {title}
                  </h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                  {points.map((point, j) => (
                    <li key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: '#2A6F97',
                          marginTop: '7px',
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontSize: '13.5px', color: '#5F6F7A', lineHeight: 1.6 }}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* NOTE */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              marginTop: '28px',
              backgroundColor: '#fff',
              border: '1px dashed #2A6F97',
              borderRadius: '14px',
              padding: '18px 22px',
              display: 'flex',
              gap: '14px',
              alignItems: 'flex-start',
            }}
          >
            <Info size={18} color="#2A6F97" style={{ flexShrink: 0, marginTop: '2px' }} />
            <p style={{ fontSize: '13.5px', color: '#1A2A33', lineHeight: 1.7, margin: 0 }}>
              <strong>Note:</strong> The Academy reserves the right to make any changes or amendments to these terms and conditions of admission at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section style={{ padding: '0 clamp(20px, 5vw, 80px) clamp(48px, 6vw, 72px)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              background: 'linear-gradient(135deg, #2A6F97 0%, #1E5276 100%)',
              borderRadius: '20px',
              padding: 'clamp(28px, 4vw, 44px)',
              color: '#fff',
              display: 'flex',
              gap: '24px',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              boxShadow: '0 12px 40px rgba(42,111,151,0.25)',
            }}
          >
            <div style={{ flex: 1, minWidth: '260px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700, marginBottom: '8px' }}>
                Questions About Our Terms?
              </h3>
              <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, margin: 0 }}>
                Our team is happy to clarify any part of these terms and conditions. Reach out and we&rsquo;ll respond quickly.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link
                href="/contact-us"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#fff',
                  color: '#2A6F97',
                  padding: '12px 22px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                <Mail size={15} /> Contact Us
              </Link>
              <a
                href="tel:+917042011441"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  color: '#fff',
                  padding: '12px 22px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.25)',
                }}
              >
                <Phone size={15} /> +91 70420 11441
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
