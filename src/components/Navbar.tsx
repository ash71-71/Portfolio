import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'terminal', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: '1rem',
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 1rem',
        pointerEvents: 'none'
      }}
    >
      <nav
        className="glass-nav"
        style={{
          width: '100%',
          maxWidth: '1100px',
          borderRadius: '9999px',
          padding: '0.65rem 1.4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pointerEvents: 'auto',
          boxShadow: isScrolled
            ? '0 12px 30px rgba(0, 0, 0, 0.7), 0 0 30px rgba(139, 92, 246, 0.15)'
            : '0 4px 20px rgba(0, 0, 0, 0.4)',
          transition: 'all 0.3s ease'
        }}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            fontSize: '1.1rem',
            color: 'var(--text-white)'
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, var(--accent-violet), var(--accent-cyan))',
              color: '#ffffff',
              fontSize: '0.85rem'
            }}
          >
            AS
          </span>
          <span className="gradient-text-violet">{personalInfo.name}</span>
        </a>

        {/* Desktop Navigation Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  position: 'relative',
                  padding: '0.4rem 0.6rem',
                  borderRadius: '6px',
                  transition: 'color 0.2s ease'
                }}
              >
                {link.name}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: '20%',
                      right: '20%',
                      height: '2px',
                      background: 'linear-gradient(90deg, var(--accent-violet), var(--accent-cyan))',
                      borderRadius: '2px'
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Actions (Terminal & Contact/CV) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}
        >
          <button
            onClick={onOpenTerminal}
            title="Open Interactive Developer Terminal"
            style={{
              background: 'rgba(139, 92, 246, 0.12)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              color: '#c084fc',
              padding: '0.5rem 0.8rem',
              borderRadius: '9999px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-mono)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(139, 92, 246, 0.25)';
              e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(139, 92, 246, 0.12)';
              e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
            }}
          >
            <Terminal size={14} />
            <span className="terminal-btn-text">CLI</span>
          </button>

          <a
            href="#contact"
            className="btn btn-primary"
            style={{
              padding: '0.5rem 1.1rem',
              fontSize: '0.85rem'
            }}
          >
            <span>Let's Talk</span>
            <Send size={13} />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-white)',
              cursor: 'pointer',
              display: 'none',
              padding: '0.3rem'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="glass-panel"
          style={{
            position: 'absolute',
            top: '4.5rem',
            left: '1rem',
            right: '1rem',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            pointerEvents: 'auto',
            background: 'rgba(9, 12, 20, 0.95)',
            border: '1px solid rgba(255, 255, 255, 0.12)'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: '0.6rem 0.5rem',
                fontSize: '1.05rem',
                fontWeight: 500,
                color: activeSection === link.id ? 'var(--accent-violet)' : 'var(--text-primary)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              style={{
                flex: 1,
                padding: '0.7rem',
                borderRadius: '8px',
                background: 'rgba(139, 92, 246, 0.15)',
                border: '1px solid var(--accent-violet)',
                color: '#c084fc',
                fontFamily: 'var(--font-mono)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                cursor: 'pointer'
              }}
            >
              <Terminal size={16} />
              Open CLI
            </button>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn btn-primary"
              style={{ flex: 1, borderRadius: '8px' }}
            >
              Email Akash
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
          .terminal-btn-text {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};
