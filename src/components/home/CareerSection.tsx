'use client';

import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap } from 'lucide-react';
import Link from 'next/link';

const cards = [
  {
    icon: GraduationCap,
    title: 'Fellowship Programs',
    count: '51 Programs',
    description:
      "India's most comprehensive medical fellowship programs — internationally accredited, clinically immersive, and career-defining.",
    href: '/top-medical-courses?category=Fellowship',
    color: '#EBF4FA',
    iconColor: '#2A6F97',
  },
  {
    icon: BookOpen,
    title: 'PG Diploma Courses',
    count: '11 Programs',
    description:
      'Structured postgraduate diplomas recognized by leading universities, designed to deepen clinical expertise and open management pathways.',
    href: '/top-medical-courses?category=PG+Diploma',
    color: '#EAF4F1',
    iconColor: '#6FB1A0',
  },
  {
    icon: Award,
    title: 'Certificate Courses',
    count: '12 Programs',
    description:
      'Short, focused certifications for doctors looking to expand a specific clinical skill — from aesthetic medicine to point-of-care ultrasound.',
    href: '/top-medical-courses?category=Certificate',
    color: '#FBF5EA',
    iconColor: '#C6A769',
  },
];

export default function CareerSection() {
  return (
    <section style={{ backgroundColor: '#EEF3F7', padding: 'clamp(36px, 5vw, 64px) clamp(16px, 4vw, 24px)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ maxWidth: '640px', marginBottom: '52px' }}>
          <p style={{ fontSize: '12px', fontWeight: 600, color: '#6FB1A0', textTransform: 'uppercase', letterSpacing: '1.2px', fontFamily: 'Inter, sans-serif', marginBottom: '10px' }}>
            Career Pathways
          </p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 4vw, 40px)', color: '#1A2A33', fontWeight: 700, lineHeight: 1.25 }}>
            Elevate your medical career with our diverse range of programs
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '18px',
                  padding: '36px 32px',
                  border: '1px solid #E4EDF3',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Decorative blob */}
                <div style={{
                  position: 'absolute', top: '-20px', right: '-20px',
                  width: '100px', height: '100px',
                  backgroundColor: card.color,
                  borderRadius: '50%',
                  opacity: 0.6,
                }} />

                <div style={{
                  width: '52px', height: '52px',
                  backgroundColor: card.color,
                  borderRadius: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '20px',
                }}>
                  <Icon size={24} color={card.iconColor} />
                </div>

                <p style={{ fontSize: '11px', fontWeight: 600, color: card.iconColor, fontFamily: 'Inter, sans-serif', letterSpacing: '0.6px', marginBottom: '8px' }}>
                  {card.count}
                </p>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#1A2A33', marginBottom: '14px', lineHeight: 1.2 }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#5F6F7A', lineHeight: 1.7, fontFamily: 'Inter, sans-serif', marginBottom: '24px' }}>
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  style={{
                    fontSize: '13px', fontWeight: 600,
                    color: card.iconColor, textDecoration: 'none',
                    fontFamily: 'Inter, sans-serif',
                    borderBottom: `1.5px solid ${card.iconColor}`,
                    paddingBottom: '1px',
                  }}
                >
                  Explore Programs →
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
