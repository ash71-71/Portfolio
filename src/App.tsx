import React, { useEffect } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    if (!window.location.hash || window.location.hash === '#home') {
      window.scrollTo(0, 0);
    }
  }, []);
  const handleOpenTerminal = () => {
    const terminalEl = document.getElementById('terminal');
    if (terminalEl) {
      terminalEl.scrollIntoView({ behavior: 'smooth' });
      // Trigger focus on terminal input
      setTimeout(() => {
        const input = terminalEl.querySelector('input');
        input?.focus();
      }, 600);
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-dark)' }}>
      {/* Dynamic Starry Constellation Background */}
      <BackgroundCanvas />

      {/* Floating Glass Navbar */}
      <Navbar onOpenTerminal={handleOpenTerminal} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenTerminal={handleOpenTerminal} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <InteractiveTerminal />
        <Contact />
      </main>

      {/* Footer with Live IST Clock */}
      <Footer />
    </div>
  );
};

export default App;
