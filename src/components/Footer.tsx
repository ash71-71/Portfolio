import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setIstTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 1,
        borderTop: '1px solid var(--border-subtle)',
        background: 'rgba(5, 7, 12, 0.95)',
        padding: '3.5rem 0 2rem'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          {/* Brand & Mission */}
          <div style={{ maxWidth: '380px' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: '1.25rem',
                color: '#ffffff',
                marginBottom: '0.6rem'
              }}
            >
              <span className="gradient-text-violet">&lt;Akash T Saji /&gt;</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Software Developer @ Dotin Tech. Building smooth, reliable web portals, high-fps mobile apps, and robust microservices.
            </p>
          </div>

          {/* Live Kerala Time Indicator */}
          <div
            className="glass-panel"
            style={{
              padding: '0.8rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              border: '1px solid rgba(139, 92, 246, 0.25)'
            }}
          >
            <span className="pulse-dot" />
            <div>
              <div
                style={{
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)'
                }}
              >
                KERALA, INDIA (IST)
              </div>
              <div
                style={{
                  fontSize: '0.95rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#ffffff',
                  fontWeight: 600
                }}
              >
                {istTime || 'Loading local time...'}
              </div>
            </div>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="btn btn-secondary"
            style={{
              padding: '0.65rem 1.2rem',
              fontSize: '0.85rem'
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingTop: '2rem',
            fontSize: '0.84rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Akash T Saji. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#c084fc')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
