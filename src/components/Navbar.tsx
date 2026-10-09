import React, { useState } from 'react';
import { Menu, X, FileText, ExternalLink, Terminal } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenTerminal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#07090E]/80 backdrop-blur-xl border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Contract: Zone 1 (Wordmark) — Zone 2 (4-5 single-line links) — Zone 3 (1 primary action) */}
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#top"
            className="text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>Harish M</span>
            <span className="text-xs font-mono text-cyan-400 font-normal">/ Software Engineer</span>
          </a>

          {/* Zone 2: Concise single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#projects" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
              Projects & Deployments
            </a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
              Experience & Training
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
              Technical Skills
            </a>
            <a href="#education" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
              Education & Certs
            </a>
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Dev Console</span>
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] whitespace-nowrap shrink-0 cursor-pointer active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 text-xs font-semibold text-slate-900 bg-cyan-400 rounded-lg cursor-pointer"
            >
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0B0F19]/95 backdrop-blur-2xl px-4 py-4 space-y-3">
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-cyan-400 py-1"
          >
            Projects & Deployments
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-cyan-400 py-1"
          >
            Experience & Training
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-cyan-400 py-1"
          >
            Technical Skills
          </a>
          <a
            href="#education"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-cyan-400 py-1"
          >
            Education & Certs
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenTerminal();
            }}
            className="flex items-center gap-2 text-sm font-mono text-cyan-400 py-1 w-full text-left"
          >
            <Terminal className="w-4 h-4" />
            <span>Open Dev Terminal</span>
          </button>
        </div>
      )}
    </header>
  );
};
