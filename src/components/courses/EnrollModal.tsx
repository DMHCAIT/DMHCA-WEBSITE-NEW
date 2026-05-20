'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';

interface EnrollModalProps {
  courseName: string | null;
  onClose: () => void;
}

export default function EnrollModal({ courseName, onClose }: EnrollModalProps) {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (courseName) {
      setSubmitted(false);
      setForm({ name: '', phone: '', email: '' });
      setErrors({});
    }
  }, [courseName]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.trim())) errs.phone = 'Enter a valid 10-digit phone number';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {courseName && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            backgroundColor: 'rgba(26,42,51,0.72)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '24px',
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            style={{
              backgroundColor: '#fff',
              borderRadius: '20px',
              maxWidth: '480px',
              width: '100%',
              overflow: 'hidden',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{ background: 'linear-gradient(135deg, #2A6F97 0%, #6FB1A0 100%)', padding: '28px 32px 24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.75)', fontFamily: 'Inter, sans-serif', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '6px' }}>
                    Enroll Now
                  </p>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#fff', lineHeight: 1.3, maxWidth: '340px' }}>
                    {courseName}
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                >
                  <X size={16} color="#fff" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: '28px 32px 36px' }}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ textAlign: 'center', padding: '20px 0' }}
                >
                  <CheckCircle size={56} color="#6FB1A0" style={{ margin: '0 auto 16px' }} />
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#1A2A33', marginBottom: '10px' }}>
                    Enrollment Received!
                  </h3>
                  <p style={{ fontSize: '14px', color: '#5F6F7A', lineHeight: 1.7, fontFamily: 'Inter, sans-serif' }}>
                    Thank you, {form.name}. Our admissions team will contact you within 24 hours on {form.phone}.
                  </p>
                  <button
                    onClick={onClose}
                    style={{ marginTop: '24px', backgroundColor: '#2A6F97', color: '#fff', border: 'none', borderRadius: '10px', padding: '11px 28px', fontSize: '14px', fontWeight: 600, fontFamily: 'Inter, sans-serif', cursor: 'pointer' }}
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <p style={{ fontSize: '13px', color: '#5F6F7A', fontFamily: 'Inter, sans-serif', marginBottom: '24px', lineHeight: 1.6 }}>
                    Fill in your details and our admissions team will reach out to you shortly.
                  </p>
                  {[
                    { label: 'Full Name', key: 'name', type: 'text', placeholder: 'Dr. Your Name' },
                    { label: 'Phone Number', key: 'phone', type: 'tel', placeholder: '10-digit mobile number' },
                    { label: 'Email Address', key: 'email', type: 'email', placeholder: 'your@email.com' },
                  ].map(({ label, key, type, placeholder }) => (
                    <div key={key} style={{ marginBottom: '18px' }}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#1A2A33', fontFamily: 'Inter, sans-serif', marginBottom: '6px' }}>
                        {label}
                      </label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={form[key as keyof typeof form]}
                        onChange={(e) => { setForm({ ...form, [key]: e.target.value }); setErrors({ ...errors, [key]: '' }); }}
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          border: `1.5px solid ${errors[key] ? '#E57373' : '#D8E3EB'}`,
                          borderRadius: '10px',
                          fontSize: '14px',
                          fontFamily: 'Inter, sans-serif',
                          color: '#1A2A33',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#2A6F97')}
                        onBlur={(e) => (e.target.style.borderColor = errors[key] ? '#E57373' : '#D8E3EB')}
                      />
                      {errors[key] && <p style={{ fontSize: '11px', color: '#E57373', fontFamily: 'Inter, sans-serif', marginTop: '4px' }}>{errors[key]}</p>}
                    </div>
                  ))}
                  <div style={{ marginBottom: '20px', backgroundColor: '#F9FBFC', borderRadius: '10px', padding: '12px 14px', border: '1px solid #E4EDF3' }}>
                    <p style={{ fontSize: '11px', color: '#5F6F7A', fontFamily: 'Inter, sans-serif', margin: 0 }}>
                      <strong style={{ color: '#1A2A33' }}>Selected Program:</strong> {courseName}
                    </p>
                  </div>
                  <button
                    type="submit"
                    style={{
                      width: '100%', backgroundColor: '#2A6F97', color: '#fff',
                      border: 'none', borderRadius: '10px', padding: '13px',
                      fontSize: '15px', fontWeight: 600, fontFamily: 'Inter, sans-serif',
                      cursor: 'pointer', transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1E5276')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2A6F97')}
                  >
                    Submit Enrollment Request
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
