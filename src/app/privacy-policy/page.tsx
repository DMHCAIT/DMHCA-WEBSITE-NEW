'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Shield,
  Globe,
  UserCheck,
  UserPlus,
  Database,
  Mail,
  MessageSquare,
  Copyright,
  ExternalLink,
  AlertTriangle,
  Scale,
  RefreshCw,
  RotateCcw,
  Phone,
} from 'lucide-react';

const SECTIONS = [
  {
    icon: Globe,
    title: 'Website Overview',
    points: [
      'NDMHC operates dmhca.in and its mobile versions',
      'Acts as a search engine for courses and institutions',
      'Does not accept applications on behalf of any college',
      'Applications through the site are for NDMHC assistance',
    ],
  },
  {
    icon: UserCheck,
    title: 'Eligibility',
    points: [
      'Website is not intended for users under 18 years of age',
      'By using the portal, you confirm you meet the age requirement',
      'Underage user accounts and data will be deleted',
    ],
  },
  {
    icon: UserPlus,
    title: 'Creating a User Account',
    points: [
      'Keep your username and password confidential',
      'You are responsible for all activity on your account',
      'Consent to receive SMS and emails about your applications',
    ],
  },
  {
    icon: Database,
    title: 'Information Collected',
    points: [
      'Data gathered via contact forms and signup processes',
      'Includes personal and non-personal information',
      'Used to provide tailored course suggestions',
      'Keeps users informed about ongoing applications',
    ],
  },
  {
    icon: Mail,
    title: 'Opt-in Mails & Data Usage',
    points: [
      'Customized emails for newsletter subscribers',
      'Feedback collection and location-specific data',
      'Cookies and IP data used for targeted advertising',
      'Helps us understand usage trends',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Third-party Content',
    points: [
      'Testimonials may be publicly displayed and shared',
      'We do not control or verify third-party content',
      'Not responsible for accuracy of external content',
      'Offensive language is prohibited in public forums',
    ],
  },
  {
    icon: Copyright,
    title: 'Intellectual Property',
    points: [
      'NDMHC owns all digital content on the website',
      'Trademarks and logos require prior permission',
      'Public-domain materials are for information only',
    ],
  },
  {
    icon: ExternalLink,
    title: 'External Links',
    points: [
      'We are not liable for losses from external links',
      'Verify information from other trusted sources',
      'Exercise caution with linked advertisements',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Limitation of Liability',
    points: [
      'Not liable for third-party or user-submitted content',
      'Users must verify information before relying on it',
      'We require exclusive rights to user-submitted content',
    ],
  },
  {
    icon: Scale,
    title: 'Governing Law',
    points: [
      'All proceedings governed by the laws of India',
      'Delhi courts hold exclusive jurisdiction',
      'Disputes resolved under Indian legal framework',
    ],
  },
  {
    icon: RotateCcw,
    title: 'Refund & Cancellation',
    points: [
      'Payments handled by our payment gateway partner',
      'Refunds reviewed only for excess payments',
      'Save transaction details for tracking',
      'No refunds for late payments rejected by colleges',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Policy Changes',
    points: [
      'NDMHC may amend these terms at any time',
      'Check this page regularly for updates',
      'Continued use implies acceptance of changes',
    ],
  },
];

export default function PrivacyPolicyPage() {
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
            <Shield size={13} /> Legal
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4.5vw, 50px)', fontWeight: 700, color: '#1A2A33', lineHeight: 1.18, marginBottom: '14px' }}
          >
            Privacy <span style={{ color: '#2A6F97' }}>Policy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            style={{ fontSize: 'clamp(14px, 1.6vw, 16px)', color: '#5F6F7A', lineHeight: 1.8, maxWidth: '620px', margin: '0 auto' }}
          >
            Please read this Privacy Policy carefully before using our portal. By accessing and using this website you accept and agree to the terms and conditions outlined below.
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
              <Shield size={22} color="#2A6F97" />
            </div>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700, color: '#1A2A33', marginBottom: '10px' }}>
                Welcome to dmhca.in
              </h2>
              <p style={{ fontSize: '14.5px', color: '#5F6F7A', lineHeight: 1.8, margin: 0 }}>
                This website is owned by <strong style={{ color: '#1A2A33' }}>Newdelhi Medical Health Care Pvt. Ltd.</strong> (&ldquo;NDMHC&rdquo;). Please read this Privacy Policy carefully before using our portal. By accessing and using{' '}
                <a href="https://dmhca.in" style={{ color: '#2A6F97', textDecoration: 'none', fontWeight: 600 }}>delhimedical.net</a>, you accept and agree to the terms and conditions outlined in this Privacy Policy. If you do not agree with these conditions, please refrain from using this website.
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
              Policy Details
            </p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: '#1A2A33' }}>
              What You Should Know
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
                  minHeight: '260px',
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
                Need Clarification?
              </h3>
              <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, margin: 0 }}>
                For any questions about this Privacy Policy, please contact <strong>Newdelhi Medical Health Care Pvt. Ltd.</strong>
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
