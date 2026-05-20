'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

// Inline SVG social icons (lucide-react removed branded icons)
function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="3"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}
function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#4A6278', color: '#E8EFF4' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px 32px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '48px',
          marginBottom: '48px',
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <img src="/logo.png" alt="DMHCA" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#B8C9D6', maxWidth: '280px' }}>
              Empowering medical professionals with globally recognized fellowship programs, PG diplomas, and certificate courses.
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              {[
                { Icon: FacebookIcon, href: 'https://www.facebook.com/dmhca.in' },
                { Icon: InstagramIcon, href: 'https://www.instagram.com/dmhca_official/' },
                { Icon: YoutubeIcon, href: 'https://www.youtube.com/@dmhca' },
                { Icon: LinkedinIcon, href: 'https://www.linkedin.com/company/dmhca/' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '36px', height: '36px',
                    backgroundColor: 'rgba(42,111,151,0.3)',
                    borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#6FB1A0',
                    textDecoration: 'none',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2A6F97')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(42,111,151,0.3)')}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '16px', color: '#F5F7FA', marginBottom: '20px', fontWeight: 600 }}>
              Quick Links
            </h4>
            {[
              { label: 'Home', href: '/' },
              { label: 'About Us', href: '/about-dmhca' },
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'Refund Policy', href: '/refund-returns-policy' },
              { label: 'Terms and Conditions', href: '/term-conditions' },
              { label: 'Contact Us', href: '/contact-us' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'block',
                  fontSize: '14px',
                  color: '#B8C9D6',
                  textDecoration: 'none',
                  marginBottom: '10px',
                  transition: 'color 0.2s',
                  fontFamily: 'Inter, sans-serif',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#6FB1A0')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#B8C9D6')}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Programs */}
          <div>
            <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '16px', color: '#F5F7FA', marginBottom: '20px', fontWeight: 600 }}>
              Our Programs
            </h4>
            {[
              { label: 'All Programs', href: '/top-medical-courses' },
              { label: 'Fellowship Programs', href: '/top-medical-courses?category=Fellowship' },
              { label: 'PG Diploma Courses', href: '/top-medical-courses?category=PG+Diploma' },
              { label: 'Certificate Courses', href: '/top-medical-courses?category=Certificate' },
            ].map((p) => (
              <Link
                key={p.href}
                href={p.href}
                style={{
                  display: 'block',
                  fontSize: '13px',
                  color: '#B8C9D6',
                  textDecoration: 'none',
                  marginBottom: '10px',
                  transition: 'color 0.2s',
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: 1.4,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#6FB1A0')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#B8C9D6')}
              >
                {p.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '16px', color: '#F5F7FA', marginBottom: '20px', fontWeight: 600 }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                {
                  city: 'Delhi',
                  address: 'Building No.-581/2, First Floor, Khatana Farm, Mandi Rd, Sultanpur, New Delhi',
                  phone: '+91 7042011441',
                },
               
              ].map(({ city, address, phone }) => (
                <div key={city}>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: '#6FB1A0', margin: '0 0 8px', fontFamily: 'Inter, sans-serif', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                    {city}
                  </p>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <MapPin size={14} style={{ color: '#6FB1A0', marginTop: '3px', flexShrink: 0 }} />
                    <p style={{ fontSize: '13px', color: '#B8C9D6', lineHeight: 1.6, margin: 0, fontFamily: 'Inter, sans-serif' }}>
                      {address}
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <Phone size={14} style={{ color: '#6FB1A0', flexShrink: 0 }} />
                    <a href={`tel:${phone.replace(/\s/g, '')}`} style={{ fontSize: '13px', color: '#B8C9D6', textDecoration: 'none', fontFamily: 'Inter, sans-serif' }}>
                      {phone}
                    </a>
                  </div>
                </div>
              ))}
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '14px' }}>
                <Mail size={14} style={{ color: '#6FB1A0', flexShrink: 0 }} />
                <a href="mailto:info@dmhca.in" style={{ fontSize: '13px', color: '#B8C9D6', textDecoration: 'none', fontFamily: 'Inter, sans-serif' }}>
                  info@dmhca.in
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '13px', color: '#94A8B5', margin: 0, fontFamily: 'Inter, sans-serif' }}>
            © Delhi Medical Health Care Academy. All rights reserved.
          </p>
          <p style={{ fontSize: '12px', color: '#7A8C99', margin: 0, fontFamily: 'Inter, sans-serif' }}>
            Accredited by IBMP & CPD | Partner: Himalayan University, BIR Tikendrajit University
          </p>
        </div>
      </div>
    </footer>
  );
}
