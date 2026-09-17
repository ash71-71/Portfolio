import React from 'react';
import {
  Briefcase,
  Smartphone,
  Zap,
  GraduationCap,
  MapPin,
  CheckCircle2,
  GitBranch,
  Terminal
} from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

export const About: React.FC = () => {
  const getStatIcon = (name: string) => {
    switch (name) {
      case 'Briefcase':
        return <Briefcase size={22} color="var(--accent-violet)" />;
      case 'Smartphone':
        return <Smartphone size={22} color="var(--accent-cyan)" />;
      case 'Zap':
        return <Zap size={22} color="var(--accent-amber)" />;
      case 'GraduationCap':
        return <GraduationCap size={22} color="var(--accent-emerald)" />;
      default:
        return <CheckCircle2 size={22} color="var(--accent-violet)" />;
    }
  };

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        padding: '6rem 0',
        zIndex: 1
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// 01. ABOUT ME</span>
          <h2 className="section-title">
            Engineering Fast, Resilient <span className="gradient-text-violet">Digital Systems</span>
          </h2>
          <p className="section-subtitle">
            A look into my engineering background, core technical focus, and passion for frictionless user experiences.
          </p>
        </div>

        {/* 4 Highlight Stat Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem'
          }}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'var(--text-white)'
                  }}
                >
                  {stat.value}
                </span>
                <div
                  style={{
                    padding: '0.6rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  {getStatIcon(stat.iconName)}
                </div>
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-white)' }}>
                {stat.label}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Narrative & Highlights Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '3rem',
            alignItems: 'start'
          }}
          className="about-detail-grid"
        >
          {/* Narrative Text */}
          <div className="glass-panel" style={{ padding: '2.25rem' }}>
            <h3
              style={{
                fontSize: '1.4rem',
                marginBottom: '1.25rem',
                color: 'var(--text-white)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem'
              }}
            >
              <span>My Journey & Philosophy</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {personalInfo.detailedBio.map((paragraph, index) => (
                <p
                  key={index}
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)'
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick meta pills */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginTop: '1.75rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  background: 'rgba(255, 255, 255, 0.04)',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '9999px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <MapPin size={14} color="var(--accent-rose)" />
                <span>Kerala, India</span>
              </span>

              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  background: 'rgba(255, 255, 255, 0.04)',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '9999px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <GitBranch size={14} color="var(--accent-cyan)" />
                <span>Git & Agile Workflows</span>
              </span>

              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  background: 'rgba(255, 255, 255, 0.04)',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '9999px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <Terminal size={14} color="var(--accent-violet)" />
                <span>Modern Full-Stack Focus</span>
              </span>
            </div>
          </div>

          {/* Core Competencies Box */}
          <div
            className="glass-panel"
            style={{
              padding: '2.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              background: 'rgba(12, 17, 28, 0.85)'
            }}
          >
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-white)' }}>
              Core Engineering Competencies
            </h3>

            {[
              {
                title: 'Full-Stack Web Architecture',
                desc: 'Building responsive, scalable web applications with React, Next.js, Node.js, and PostgreSQL.',
                tag: 'Web Platform'
              },
              {
                title: 'Mobile Engineering (iOS & Android)',
                desc: 'Cross-platform app development using React Native and Expo with native device APIs.',
                tag: 'Cross-Platform'
              },
              {
                title: 'State Architecture with Zustand',
                desc: 'Isolating re-renders with selective subscriptions to guarantee crisp 60fps interaction.',
                tag: 'State Optimization'
              },
              {
                title: 'REST API & Microservice Integration',
                desc: 'Robust communication channels, data validation, and clean endpoint design.',
                tag: 'APIs & Microservices'
              },
              {
                title: 'Relational Schemas & Supabase',
                desc: 'PostgreSQL database modeling, security rules, query tuning, and cloud persistence.',
                tag: 'Databases'
              }
            ].map((comp, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1rem',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                  e.currentTarget.style.background = 'rgba(139, 92, 246, 0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.35rem'
                  }}
                >
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-white)' }}>
                    {comp.title}
                  </h4>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent-cyan)',
                      background: 'rgba(6, 182, 212, 0.12)',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '4px'
                    }}
                  >
                    {comp.tag}
                  </span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  {comp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .about-detail-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};
