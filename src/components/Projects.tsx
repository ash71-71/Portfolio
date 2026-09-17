import React, { useState } from 'react';
import { ArrowUpRight, Smartphone, Globe2, Layout, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';
import type { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'Mobile', label: 'Mobile & App' },
    { id: 'Full-Stack', label: 'Full-Stack' },
    { id: 'Frontend', label: 'Frontend & UI' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const getProjectCategoryIcon = (category: string) => {
    switch (category) {
      case 'Mobile': return <Smartphone size={18} color="var(--accent-cyan)" />;
      case 'Full-Stack': return <Globe2 size={18} color="var(--accent-emerald)" />;
      default: return <Layout size={18} color="var(--accent-violet)" />;
    }
  };

  const getVisualAccent = (id: string) => {
    switch (id) {
      case 'bogo-platform':
        return {
          gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(79, 70, 229, 0.2))',
          tagColor: '#c084fc',
          codeHint: 'Expo ∙ Zustand ∙ REST ∙ PostgreSQL'
        };
      case 'college-hostel-website':
        return {
          gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.4), rgba(13, 148, 136, 0.2))',
          tagColor: '#34d399',
          codeHint: 'React ∙ Node.js ∙ PostgreSQL ∙ Auth'
        };
      default:
        return {
          gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.4), rgba(168, 85, 247, 0.2))',
          tagColor: '#f472b6',
          codeHint: 'React 19 ∙ TypeScript ∙ Canvas ∙ CLI'
        };
    }
  };

  return (
    <section
      id="projects"
      style={{
        position: 'relative',
        padding: '6rem 0',
        zIndex: 1
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// 03. FEATURED WORK</span>
          <h2 className="section-title">
            Engineered For <span className="gradient-text-violet">Scale & Fluidity</span>
          </h2>
          <p className="section-subtitle">
            A selection of production systems, commercial applications, and analytical projects built with modern engineering best practices.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.6rem',
            marginBottom: '3rem'
          }}
        >
          {filters.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                style={{
                  padding: '0.55rem 1.1rem',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  border: isActive ? '1px solid var(--accent-violet)' : '1px solid var(--border-subtle)',
                  background: isActive
                    ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.25), rgba(6, 182, 212, 0.15))'
                    : 'rgba(255, 255, 255, 0.03)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  boxShadow: isActive ? '0 0 20px rgba(139, 92, 246, 0.25)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem'
          }}
          className="projects-grid"
        >
          {filteredProjects.map((project) => {
            const visual = getVisualAccent(project.id);

            return (
              <div
                key={project.id}
                className="glass-panel"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                {/* Visual Header Mockup */}
                <div
                  style={{
                    height: '190px',
                    background: visual.gradient,
                    borderBottom: '1px solid var(--border-subtle)',
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Subtle Grid Backdrop */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
                      backgroundSize: '16px 16px',
                      opacity: 0.5,
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Top Badges */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        color: visual.tagColor,
                        background: 'rgba(9, 12, 20, 0.75)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px'
                      }}
                    >
                      {getProjectCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </span>

                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontFamily: 'var(--font-mono)',
                        color: '#34d399',
                        background: 'rgba(16, 185, 129, 0.15)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '9999px'
                      }}
                    >
                      {project.metrics}
                    </span>
                  </div>

                  {/* Bottom Mockup Code Hint */}
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 1,
                      background: 'rgba(7, 9, 14, 0.85)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '8px',
                      padding: '0.5rem 0.8rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.76rem',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {visual.codeHint}
                    </span>
                    <Sparkles size={14} color={visual.tagColor} />
                  </div>
                </div>

                {/* Card Body */}
                <div
                  style={{
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'space-between',
                    gap: '1.25rem'
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: '1.3rem',
                        color: 'var(--text-white)',
                        marginBottom: '0.4rem',
                        fontWeight: 700
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.92rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        marginBottom: '1rem'
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tech Chips */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontSize: '0.76rem',
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--text-primary)',
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid var(--border-subtle)',
                            padding: '0.2rem 0.55rem',
                            borderRadius: '4px'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span
                          style={{
                            fontSize: '0.76rem',
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--text-muted)',
                            padding: '0.2rem 0.4rem'
                          }}
                        >
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--border-subtle)'
                    }}
                  >
                    <button
                      onClick={() => setSelectedProject(project)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--accent-violet)',
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 600,
                        fontSize: '0.88rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.3rem 0'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#c084fc')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--accent-violet)')}
                    >
                      <span>Deep Dive</span>
                      <ArrowUpRight size={16} />
                    </button>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          title="View Repository"
                          style={{
                            color: 'var(--text-secondary)',
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'color 0.2s ease'
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                        >
                          <GithubIcon size={18} />
                        </a>
                      )}
                      <button
                        onClick={() => setSelectedProject(project)}
                        title="View Full Architecture"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '6px',
                          color: 'var(--text-primary)',
                          padding: '0.35rem 0.65rem',
                          fontSize: '0.8rem',
                          cursor: 'pointer'
                        }}
                      >
                        Overview
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <style>{`
        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
