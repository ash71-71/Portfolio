import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { experience } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      style={{
        position: 'relative',
        padding: '6rem 0',
        zIndex: 1
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// 04. CAREER & MILESTONES</span>
          <h2 className="section-title">
            Professional <span className="gradient-text-cyan">Experience & Education</span>
          </h2>
          <p className="section-subtitle">
            A chronological timeline of my software engineering work at Dotin Tech and academic foundations at College of Engineering Cherthala.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            position: 'relative',
            paddingLeft: '2.5rem'
          }}
          className="timeline-container"
        >
          {/* Glowing Vertical Line */}
          <div
            style={{
              position: 'absolute',
              left: '12px',
              top: '10px',
              bottom: '10px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--accent-violet) 0%, var(--accent-cyan) 50%, rgba(16, 185, 129, 0.4) 100%)',
              boxShadow: '0 0 12px rgba(139, 92, 246, 0.4)'
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {experience.map((item, idx) => {
              const isWork = item.type === 'Full-Time';

              return (
                <div
                  key={idx}
                  style={{
                    position: 'relative'
                  }}
                >
                  {/* Timeline Dot Icon */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-2.5rem',
                      top: '0.2rem',
                      transform: 'translateX(-50%)',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: isWork
                        ? 'linear-gradient(135deg, var(--accent-violet), #6366f1)'
                        : 'linear-gradient(135deg, var(--accent-emerald), #0d9488)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      boxShadow: isWork
                        ? '0 0 15px rgba(139, 92, 246, 0.6)'
                        : '0 0 15px rgba(16, 185, 129, 0.6)',
                      border: '3px solid var(--bg-dark)'
                    }}
                  >
                    {isWork ? <Briefcase size={15} /> : <GraduationCap size={15} />}
                  </div>

                  {/* Experience Card */}
                  <div
                    className="glass-panel"
                    style={{
                      padding: '2rem',
                      border: isWork
                        ? '1px solid rgba(139, 92, 246, 0.3)'
                        : '1px solid rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    {/* Header Details */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.75rem',
                        marginBottom: '0.75rem'
                      }}
                    >
                      <div>
                        <h3 style={{ fontSize: '1.35rem', color: 'var(--text-white)', fontWeight: 700 }}>
                          {item.role}
                        </h3>
                        <div
                          style={{
                            fontSize: '1.05rem',
                            color: isWork ? 'var(--accent-violet)' : 'var(--accent-emerald)',
                            fontWeight: 600,
                            marginTop: '0.2rem'
                          }}
                        >
                          {item.company}
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <span
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            fontSize: '0.82rem',
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--text-secondary)',
                            background: 'rgba(255, 255, 255, 0.05)',
                            padding: '0.3rem 0.65rem',
                            borderRadius: '9999px',
                            border: '1px solid var(--border-subtle)'
                          }}
                        >
                          <Calendar size={13} />
                          <span>{item.period}</span>
                        </span>

                        <span
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            fontSize: '0.82rem',
                            color: 'var(--text-secondary)',
                            background: 'rgba(255, 255, 255, 0.05)',
                            padding: '0.3rem 0.65rem',
                            borderRadius: '9999px',
                            border: '1px solid var(--border-subtle)'
                          }}
                        >
                          <MapPin size={13} />
                          <span>{item.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem',
                        margin: '1.25rem 0'
                      }}
                    >
                      {item.description.map((desc, dIdx) => (
                        <div
                          key={dIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.6rem',
                            fontSize: '0.94rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6
                          }}
                        >
                          <ChevronRight
                            size={16}
                            color={isWork ? 'var(--accent-violet)' : 'var(--accent-emerald)'}
                            style={{ flexShrink: 0, marginTop: '3px' }}
                          />
                          <span>{desc}</span>
                        </div>
                      ))}
                    </div>

                    {/* Key Highlights Pill Badges */}
                    {item.highlights && item.highlights.length > 0 && (
                      <div
                        style={{
                          paddingTop: '1rem',
                          borderTop: '1px solid var(--border-subtle)',
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '0.5rem',
                          alignItems: 'center'
                        }}
                      >
                        <span
                          style={{
                            fontSize: '0.76rem',
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--text-muted)',
                            marginRight: '0.25rem'
                          }}
                        >
                          Highlights:
                        </span>
                        {item.highlights.map((hl, hIdx) => (
                          <span
                            key={hIdx}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.3rem',
                              fontSize: '0.78rem',
                              fontFamily: 'var(--font-mono)',
                              color: isWork ? '#c084fc' : '#34d399',
                              background: isWork ? 'rgba(139, 92, 246, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                              border: `1px solid ${isWork ? 'rgba(139, 92, 246, 0.25)' : 'rgba(16, 185, 129, 0.25)'}`,
                              padding: '0.2rem 0.55rem',
                              borderRadius: '6px'
                            }}
                          >
                            <CheckCircle2 size={11} />
                            <span>{hl}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-container {
            padding-left: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};
