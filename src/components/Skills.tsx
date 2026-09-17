import React, { useState } from 'react';
import {
  FileCode2,
  Code,
  Terminal,
  Database,
  Atom,
  Smartphone,
  Globe,
  Layers,
  Share2,
  Palette,
  Server,
  Cpu,
  Network,
  CloudLightning,
  Box,
  GitBranch,
  TerminalSquare,
  Package,
  CheckCircle
} from 'lucide-react';
import { skills } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend & Mobile' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Databases' },
    { id: 'tools', label: 'Tools & DevOps' }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  const getSkillIcon = (iconName: string) => {
    const size = 20;
    switch (iconName) {
      case 'FileCode2': return <FileCode2 size={size} color="var(--accent-cyan)" />;
      case 'Code': return <Code size={size} color="var(--accent-amber)" />;
      case 'Terminal': return <Terminal size={size} color="var(--accent-emerald)" />;
      case 'Database': return <Database size={size} color="var(--accent-cyan)" />;
      case 'Atom': return <Atom size={size} color="#38bdf8" />;
      case 'Smartphone': return <Smartphone size={size} color="var(--accent-violet)" />;
      case 'Globe': return <Globe size={size} color="#ffffff" />;
      case 'Layers': return <Layers size={size} color="#f59e0b" />;
      case 'Share2': return <Share2 size={size} color="var(--accent-cyan)" />;
      case 'Palette': return <Palette size={size} color="#ec4899" />;
      case 'Server': return <Server size={size} color="#22c55e" />;
      case 'Cpu': return <Cpu size={size} color="var(--accent-violet)" />;
      case 'Network': return <Network size={size} color="#38bdf8" />;
      case 'CloudLightning': return <CloudLightning size={size} color="#34d399" />;
      case 'Box': return <Box size={size} color="#38bdf8" />;
      case 'GitBranch': return <GitBranch size={size} color="#f97316" />;
      case 'TerminalSquare': return <TerminalSquare size={size} color="#facc15" />;
      case 'Package': return <Package size={size} color="#ef4444" />;
      default: return <CheckCircle size={size} color="var(--accent-violet)" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return { text: '#34d399', bg: 'rgba(16, 185, 129, 0.15)', border: 'rgba(16, 185, 129, 0.3)', width: '92%' };
      case 'Advanced': return { text: '#38bdf8', bg: 'rgba(56, 189, 248, 0.15)', border: 'rgba(56, 189, 248, 0.3)', width: '82%' };
      default: return { text: '#c084fc', bg: 'rgba(192, 132, 252, 0.15)', border: 'rgba(192, 132, 252, 0.3)', width: '75%' };
    }
  };

  return (
    <section
      id="skills"
      style={{
        position: 'relative',
        padding: '6rem 0',
        zIndex: 1
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">// 02. TECHNICAL SKILLS</span>
          <h2 className="section-title">
            Architectural <span className="gradient-text-cyan">Tooling & Mastery</span>
          </h2>
          <p className="section-subtitle">
            Languages, frameworks, database systems, and dev tools I deploy to craft resilient, production-grade applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.6rem',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
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
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {filteredSkills.map((skill) => {
            const levelStyle = getLevelColor(skill.level);
            return (
              <div
                key={skill.name}
                className="glass-panel"
                style={{
                  padding: '1.4rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}
                  >
                    <div
                      style={{
                        padding: '0.5rem',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {getSkillIcon(skill.icon)}
                    </div>
                    <h3 style={{ fontSize: '1.02rem', fontWeight: 600, color: 'var(--text-white)' }}>
                      {skill.name}
                    </h3>
                  </div>

                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: levelStyle.text,
                      background: levelStyle.bg,
                      border: `1px solid ${levelStyle.border}`,
                      padding: '0.2rem 0.5rem',
                      borderRadius: '9999px'
                    }}
                  >
                    {skill.level}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: '0.84rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.45,
                    minHeight: '2.5rem'
                  }}
                >
                  {skill.description}
                </p>

                {/* Meter Indicator */}
                <div
                  style={{
                    height: '4px',
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.06)',
                    borderRadius: '9999px',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: levelStyle.width,
                      background: 'linear-gradient(90deg, var(--accent-violet), var(--accent-cyan))',
                      borderRadius: '9999px',
                      transition: 'width 0.6s ease'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
