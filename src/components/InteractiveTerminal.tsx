import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, Minimize2, Maximize2 } from 'lucide-react';
import { terminalCommands } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output: string;
  isError?: boolean;
}

export const InteractiveTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'welcome',
      output: `Welcome to Akash T Saji's Interactive Shell v2.4
Type 'help' to explore available commands or click the suggestion chips below.`
    }
  ]);

  const terminalBodyRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Only scroll internally inside the terminal box, never scrolling the whole page
    if (terminalBodyRef.current && history.length > 1) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    let output = '';
    let isError = false;

    if (trimmed in terminalCommands) {
      output = terminalCommands[trimmed as keyof typeof terminalCommands];
    } else {
      output = `Command not recognized: '${trimmed}'. Type 'help' to see valid commands.`;
      isError = true;
    }

    setHistory((prev) => [...prev, { command: cmdText, output, isError }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  const suggestionCommands = ['about', 'skills', 'projects', 'experience', 'contact', 'clear'];

  return (
    <section
      id="terminal"
      style={{
        position: 'relative',
        padding: '6rem 0',
        zIndex: 1
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// 05. INTERACTIVE CLI</span>
          <h2 className="section-title">
            Developer <span className="gradient-text-violet">Terminal Shell</span>
          </h2>
          <p className="section-subtitle">
            Prefer the command line? Run executable commands or click quick shortcuts to inspect my stack and background.
          </p>
        </div>

        {/* Terminal Window */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid rgba(139, 92, 246, 0.35)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 35px rgba(139, 92, 246, 0.15)',
            background: 'rgba(9, 12, 20, 0.92)'
          }}
          onClick={() => inputRef.current?.focus()}
        >
          {/* Top Bar */}
          <div
            style={{
              padding: '0.8rem 1.25rem',
              background: 'rgba(15, 20, 32, 0.95)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ef4444' }} />
              <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#eab308' }} />
              <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#22c55e' }} />
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <TerminalIcon size={14} color="var(--accent-cyan)" />
              <span>akash@dotin-tech:~$</span>
            </div>

            <div style={{ display: 'flex', gap: '0.4rem', color: 'var(--text-muted)' }}>
              <Minimize2 size={13} />
              <Maximize2 size={13} />
            </div>
          </div>

          {/* Terminal Body */}
          <div
            ref={terminalBodyRef}
            style={{
              padding: '1.5rem',
              minHeight: '340px',
              maxHeight: '440px',
              overflowY: 'auto',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              lineHeight: 1.6
            }}
          >
            {history.map((item, idx) => (
              <div key={idx} style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#38bdf8' }}>
                  <span style={{ color: '#c084fc' }}>guest@akash-portfolio</span>
                  <span style={{ color: 'var(--text-muted)' }}>:</span>
                  <span style={{ color: '#34d399' }}>~</span>
                  <span style={{ color: 'var(--text-white)' }}>$</span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>{item.command}</span>
                </div>
                <div
                  style={{
                    marginTop: '0.35rem',
                    color: item.isError ? '#f87171' : 'var(--text-secondary)',
                    whiteSpace: 'pre-wrap',
                    paddingLeft: '0.5rem'
                  }}
                >
                  {item.output}
                </div>
              </div>
            ))}

            {/* Input Line */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#38bdf8' }}>
              <span style={{ color: '#c084fc' }}>guest@akash-portfolio</span>
              <span style={{ color: 'var(--text-muted)' }}>:</span>
              <span style={{ color: '#34d399' }}>~</span>
              <span style={{ color: 'var(--text-white)' }}>$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'help'..."
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#ffffff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem'
                }}
              />
              <button
                onClick={() => handleCommand(input)}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  padding: '0.2rem 0.4rem',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center'
                }}
                title="Execute Command"
              >
                <CornerDownLeft size={14} />
              </button>
            </div>
          </div>

          {/* Quick Suggestion Chips */}
          <div
            style={{
              padding: '0.8rem 1.25rem',
              background: 'rgba(12, 16, 26, 0.98)',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}
          >
            <span
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                marginRight: '0.25rem'
              }}
            >
              <Sparkles size={12} color="var(--accent-violet)" />
              <span>Quick:</span>
            </span>

            {suggestionCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                style={{
                  background: 'rgba(139, 92, 246, 0.1)',
                  border: '1px solid rgba(139, 92, 246, 0.25)',
                  color: '#c084fc',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(139, 92, 246, 0.25)';
                  e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.25)';
                }}
              >
                ${cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
