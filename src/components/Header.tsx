'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-dmhca' },
  { label: 'Courses', href: '/top-medical-courses' },
  { label: 'Contact', href: '/contact-us' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(255,255,255,0.97)' : '#ffffff',
        boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.10)' : '0 1px 0 #E4EDF3',
        borderBottom: scrolled ? '1px solid #E4EDF3' : '1px solid #E4EDF3',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="DMHCA" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link${pathname === link.href ? ' active' : ''}`}
                style={{
                  fontSize: '14px',
                  fontWeight: pathname === link.href ? 600 : 400,
                  color: pathname === link.href ? '#2A6F97' : '#1A2A33',
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '0.2px',
                  paddingBottom: '2px',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/top-medical-courses"
              style={{
                backgroundColor: '#2A6F97',
                color: '#fff',
                fontSize: '14px',
                fontWeight: 500,
                padding: '10px 22px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontFamily: 'Inter, sans-serif',
                transition: 'background 0.2s ease',
                letterSpacing: '0.2px',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1E5276')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2A6F97')}
            >
              Enroll Now
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-menu-btn"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1A2A33', padding: '4px', display: 'none' }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          backgroundColor: '#ffffff',
          borderTop: '1px solid #E4EDF3',
          padding: '16px 24px 24px',
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: 'block',
                padding: '12px 0',
                fontSize: '15px',
                fontWeight: pathname === link.href ? 600 : 400,
                color: pathname === link.href ? '#2A6F97' : '#1A2A33',
                textDecoration: 'none',
                borderBottom: '1px solid #E4EDF3',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/top-medical-courses"
            style={{
              display: 'block',
              marginTop: '16px',
              backgroundColor: '#2A6F97',
              color: '#fff',
              textAlign: 'center',
              padding: '12px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
            }}
          >
            Enroll Now
          </Link>
        </div>
      )}
    </header>
  );
}
