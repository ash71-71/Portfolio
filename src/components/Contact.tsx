import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      // Trigger festive confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#8b5cf6', '#06b6d4', '#10b981', '#ffffff']
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }, 800);
  };

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        padding: '6rem 0',
        zIndex: 1
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// 06. CONTACT & COLLABORATE</span>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text-cyan">Remarkable</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an ambitious engineering role, a mobile or web project in mind, or just want to chat technology—my inbox is always open.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.25fr',
            gap: '3rem',
            maxWidth: '1100px',
            margin: '0 auto'
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Info & Channels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              className="glass-panel"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}
            >
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-white)' }}>
                Get In Touch Directly
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Email Box */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div
                    style={{
                      padding: '0.65rem',
                      borderRadius: '10px',
                      background: 'rgba(139, 92, 246, 0.12)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      color: 'var(--accent-violet)'
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      EMAIL ADDRESS
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.15rem' }}>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        style={{ fontSize: '0.98rem', color: 'var(--text-white)', fontWeight: 500 }}
                      >
                        {personalInfo.email}
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        title="Copy email to clipboard"
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: copiedEmail ? '#34d399' : 'var(--text-muted)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone Box */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div
                    style={{
                      padding: '0.65rem',
                      borderRadius: '10px',
                      background: 'rgba(6, 182, 212, 0.12)',
                      border: '1px solid rgba(6, 182, 212, 0.3)',
                      color: 'var(--accent-cyan)'
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      PHONE / WHATSAPP
                    </span>
                    <div style={{ marginTop: '0.15rem' }}>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        style={{ fontSize: '0.98rem', color: 'var(--text-white)', fontWeight: 500 }}
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location Box */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div
                    style={{
                      padding: '0.65rem',
                      borderRadius: '10px',
                      background: 'rgba(16, 185, 129, 0.12)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      color: 'var(--accent-emerald)'
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      LOCATION
                    </span>
                    <div style={{ marginTop: '0.15rem', color: 'var(--text-white)', fontWeight: 500 }}>
                      {personalInfo.location} (Open to Relocation & Remote)
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div
                style={{
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  gap: '0.75rem'
                }}
              >
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ flex: 1, padding: '0.5rem', fontSize: '0.85rem' }}
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ flex: 1, padding: '0.5rem', fontSize: '0.85rem' }}
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Availability Pill Card */}
            <div
              className="glass-panel"
              style={{
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                background: 'rgba(16, 185, 129, 0.05)'
              }}
            >
              <span className="pulse-dot" style={{ flexShrink: 0 }} />
              <div>
                <h4 style={{ color: 'var(--text-white)', fontSize: '0.95rem', fontWeight: 600 }}>
                  Immediate Availability
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  Ready to deploy high-performance engineering to forward-thinking teams.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="glass-panel" style={{ padding: '2.5rem', position: 'relative' }}>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--text-white)', marginBottom: '0.4rem' }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
              Have an opening or project? Send a note and I'll respond within 24 hours.
            </p>

            {status === 'success' ? (
              <div
                style={{
                  padding: '2.5rem',
                  borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#34d399'
                  }}
                >
                  <CheckCircle2 size={32} />
                </div>
                <h4 style={{ fontSize: '1.3rem', color: '#ffffff' }}>Message Dispatched!</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', maxWidth: '400px' }}>
                  Thank you for reaching out. Your note has been received and I look forward to connecting with you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{ display: 'block', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}
                    >
                      YOUR NAME *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        color: '#ffffff',
                        fontSize: '0.92rem',
                        outline: 'none',
                        transition: 'all 0.2s ease'
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent-violet)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{ display: 'block', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}
                    >
                      YOUR EMAIL *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        color: '#ffffff',
                        fontSize: '0.92rem',
                        outline: 'none',
                        transition: 'all 0.2s ease'
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent-violet)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    style={{ display: 'block', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}
                  >
                    SUBJECT
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Engineering Role / Project Inquiry"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      color: '#ffffff',
                      fontSize: '0.92rem',
                      outline: 'none',
                      transition: 'all 0.2s ease'
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent-violet)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    style={{ display: 'block', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}
                  >
                    MESSAGE *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, or engineering goals..."
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      color: '#ffffff',
                      fontSize: '0.92rem',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'all 0.2s ease'
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent-violet)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.9rem',
                    fontSize: '0.98rem',
                    borderRadius: '8px',
                    marginTop: '0.5rem'
                  }}
                >
                  {status === 'submitting' ? (
                    <span>Sending Transmission...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 580px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
