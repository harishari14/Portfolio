import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/[0.08] bg-[#05070D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Editorial Note */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-slate-400 font-mono text-center sm:text-left">
            <span className="text-white font-bold tracking-tight">Harish M</span>
            <span aria-hidden="true" className="hidden sm:inline text-slate-600">·</span>
            <span>Software Engineer</span>
            <span aria-hidden="true" className="hidden sm:inline text-slate-600">·</span>
            <span>Chennai, India (IST)</span>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <a href="#projects" className="hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">
              Education
            </a>
            <button
              onClick={onOpenResume}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Resume
            </button>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Social icons & scroll to top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email Harish"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-900 rounded-lg transition-colors border border-white/[0.06] cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sub-footer single line */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center text-[11px] font-mono text-slate-500">
          Crafted with 2026 Glassmorphic Design System · React 19 · Vite 8 · Tailwind CSS
        </div>
      </div>
    </footer>
  );
};
