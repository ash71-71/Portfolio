import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Code2,
  Sparkles,
  Copy,
  Check,
  Smartphone,
  Layers,
  Database
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '8rem',
        paddingBottom: '5rem',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Headlines & CTAs */}
          <div>
            {/* Status Pill */}
            <div
              className="pill-badge pill-badge-emerald"
              style={{ marginBottom: '1.5rem', cursor: 'default' }}
            >
              <span className="pulse-dot" />
              <span>Software Developer @ {personalInfo.company}</span>
            </div>

            {/* Main Greeting & Name */}
            <h1
              style={{
                fontSize: 'clamp(2.75rem, 5.5vw, 4.25rem)',
                lineHeight: 1.1,
                marginBottom: '1rem',
                fontWeight: 800,
                letterSpacing: '-0.03em'
              }}
            >
              Hi, I'm <span className="gradient-text-violet">{personalInfo.name}</span>
            </h1>

            {/* Dynamic Typewriter Title */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                minHeight: '2.5rem',
                marginBottom: '1.5rem'
              }}
            >
              <span
                style={{
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                  fontWeight: 600,
                  color: 'var(--text-white)'
                }}
              >
                {displayedText}
              </span>
              <span
                style={{
                  display: 'inline-block',
                  width: '3px',
                  height: '1.6rem',
                  backgroundColor: 'var(--accent-cyan)',
                  animation: 'pulse 1s infinite'
                }}
              />
            </div>

            {/* Narrative Paragraph */}
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2.25rem',
                maxWidth: '560px'
              }}
            >
              Computer Science & Engineering graduate and active engineer at <strong>Dotin Tech</strong>.
              I craft resilient full-stack systems and high-fps mobile apps using{' '}
              <strong style={{ color: '#c084fc' }}>React</strong>,{' '}
              <strong style={{ color: '#38bdf8' }}>React Native</strong>,{' '}
              <strong style={{ color: '#34d399' }}>TypeScript</strong>, and{' '}
              <strong style={{ color: '#f59e0b' }}>Zustand</strong> state architectures.
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '2.5rem'
              }}
            >
              <a href="#projects" className="btn btn-primary">
                <span>Explore Featured Work</span>
                <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn btn-secondary">
                <span>Get In Touch</span>
              </a>

              <button
                onClick={onOpenTerminal}
                className="btn btn-outline-cyan"
                title="Launch Interactive Terminal"
              >
                <Code2 size={16} />
                <span>Launch CLI</span>
              </button>
            </div>

            {/* Quick Social & Contact Badges */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.25rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <GithubIcon size={18} />
                <span>ash71-71</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>

              {/* One-Click Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                style={{
                  background: copiedEmail ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                  border: `1px solid ${copiedEmail ? 'var(--accent-emerald)' : 'var(--border-subtle)'}`,
                  color: copiedEmail ? '#34d399' : 'var(--text-secondary)',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '9999px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  transition: 'all 0.2s ease'
                }}
                title="Click to copy email address"
              >
                {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedEmail ? 'Email Copied!' : personalInfo.email}</span>
              </button>
            </div>
          </div>

          {/* Right Column: High-Tech Code Hologram Card */}
          <div style={{ position: 'relative' }}>
            {/* Ambient Backlight */}
            <div
              style={{
                position: 'absolute',
                top: '5%',
                left: '10%',
                width: '80%',
                height: '80%',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, rgba(6, 182, 212, 0.15) 50%, transparent 80%)',
                filter: 'blur(50px)',
                zIndex: 0,
                pointerEvents: 'none'
              }}
            />

            {/* The Code Window Container */}
            <div
              className="glass-panel animate-float"
              style={{
                position: 'relative',
                zIndex: 1,
                padding: '1.75rem',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 40px rgba(139, 92, 246, 0.15)',
                background: 'rgba(12, 16, 26, 0.85)'
              }}
            >
              {/* Window Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1rem',
                  marginBottom: '1.25rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ display: 'flex', gap: '0.45rem' }}>
                  <span style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#ef4444' }} />
                  <span style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#eab308' }} />
                  <span style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#22c55e' }} />
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <Sparkles size={12} color="var(--accent-violet)" />
                  <span>developer.config.ts</span>
                </div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#34d399',
                    background: 'rgba(16, 185, 129, 0.15)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px'
                  }}
                >
                  TypeScript
                </span>
              </div>

              {/* Interactive Code Syntax */}
              <pre
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.86rem',
                  lineHeight: 1.65,
                  overflowX: 'auto'
                }}
              >
                <code>
                  <span style={{ color: '#c084fc' }}>const</span> <span style={{ color: '#38bdf8' }}>akash</span>:{' '}
                  <span style={{ color: '#facc15' }}>DeveloperProfile</span> = &#123;{'\n'}
                  {'  '}name: <span style={{ color: '#a7f3d0' }}>'{personalInfo.name}'</span>,{'\n'}
                  {'  '}currentRole: <span style={{ color: '#a7f3d0' }}>'{personalInfo.role}'</span>,{'\n'}
                  {'  '}company: <span style={{ color: '#a7f3d0' }}>'{personalInfo.company}'</span>,{'\n'}
                  {'  '}location: <span style={{ color: '#a7f3d0' }}>'{personalInfo.location}'</span>,{'\n'}
                  {'  '}education: <span style={{ color: '#a7f3d0' }}>'B.Tech in CSE (2021-2025)'</span>,{'\n'}
                  {'  '}coreStack: [{'\n'}
                  {'    '}<span style={{ color: '#38bdf8' }}>'React'</span>, <span style={{ color: '#38bdf8' }}>'React Native'</span>, <span style={{ color: '#38bdf8' }}>'TypeScript'</span>,{'\n'}
                  {'    '}<span style={{ color: '#38bdf8' }}>'Node.js'</span>, <span style={{ color: '#38bdf8' }}>'Zustand'</span>, <span style={{ color: '#38bdf8' }}>'PostgreSQL'</span>{'\n'}
                  {'  '}],{'\n'}
                  {'  '}specialty: <span style={{ color: '#f43f5e' }}>'Zero-Lag Mobile State & High-Speed APIs'</span>,{'\n'}
                  {'  '}status: <span style={{ color: '#34d399' }}>'Active & Shipping Daily'</span>{'\n'}
                  &#125;;{'\n\n'}
                  <span style={{ color: 'var(--text-muted)' }}>// Quick summary execution</span>{'\n'}
                  <span style={{ color: '#c084fc' }}>export default</span> <span style={{ color: '#38bdf8' }}>akash</span>;
                </code>
              </pre>

              {/* Floating Highlight Chips */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.6rem',
                  marginTop: '1.25rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    background: 'rgba(139, 92, 246, 0.15)',
                    color: '#c084fc',
                    padding: '0.3rem 0.7rem',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  <Smartphone size={13} />
                  <span>Cross-Platform Expo</span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    background: 'rgba(6, 182, 212, 0.15)',
                    color: '#38bdf8',
                    padding: '0.3rem 0.7rem',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  <Layers size={13} />
                  <span>Zustand Architecture</span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: '#34d399',
                    padding: '0.3rem 0.7rem',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  <Database size={13} />
                  <span>PostgreSQL & REST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
