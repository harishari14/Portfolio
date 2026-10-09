import React from 'react';
import { ArrowUpRight, ExternalLink, Mail, Phone, MapPin, Github, Linkedin, FileText } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const deployedProjects = PROJECTS.filter((p) => p.deployedUrl);

  return (
    <section id="top" className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden">
      {/* 2026 Ambient glow background */}
      <div className="absolute top-10 left-1/4 w-96 h-96 ambient-glow-1 pointer-events-none -z-10 blur-3xl opacity-50" />
      <div className="absolute top-32 right-1/4 w-96 h-96 ambient-glow-2 pointer-events-none -z-10 blur-3xl opacity-40" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel-elevated rounded-3xl p-6 sm:p-10 border border-white/[0.1] relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              {/* Clean unboxed metadata header */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-400">
                <span className="font-bold tracking-wider">{PERSONAL_INFO.role}</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-300">{PERSONAL_INFO.degree}</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-emerald-400 font-semibold">{PERSONAL_INFO.cgpa}</span>
              </div>

              {/* Main Name Heading */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-cyan-300/90 text-sm sm:text-base font-mono mt-1">
                  Java Full-Stack Developer · Entry-Level Software Engineer
                </p>
              </div>

              {/* Professional Summary from Resume */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>

              {/* Contact chips from resume */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-300 font-mono pt-1">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </span>
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-white transition-colors">{PERSONAL_INFO.phone}</a>
                </span>
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-300 hover:underline">{PERSONAL_INFO.email}</a>
                </span>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href="#projects"
                  className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)] active:scale-95"
                >
                  <span>Explore Projects</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={onOpenResume}
                  className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-white/10 rounded-xl transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>View Full Resume</span>
                </button>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2.5 text-xs font-mono text-slate-300 hover:text-white bg-slate-900/40 hover:bg-slate-800 border border-white/10 rounded-xl transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2.5 text-xs font-mono text-slate-300 hover:text-white bg-slate-900/40 hover:bg-slate-800 border border-white/10 rounded-xl transition-all"
                >
                  <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Right Card: Quick Deployed Apps Card */}
            <div className="lg:col-span-5">
              <div className="glass-panel rounded-2xl p-5 border border-white/[0.08] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs font-mono">
                  <span className="text-cyan-400 font-semibold">Recently Deployed Projects</span>
                  <span className="text-slate-500">Live Navigation</span>
                </div>

                <div className="space-y-3">
                  {deployedProjects.map((p) => (
                    <div
                      key={p.id}
                      className="bg-slate-900/80 hover:bg-slate-900 rounded-xl p-3.5 border border-white/[0.06] hover:border-cyan-500/30 transition-all space-y-2"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="font-bold text-white text-sm">{p.title}</div>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0">
                          Live
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                        {p.description}
                      </p>
                      <div className="pt-1">
                        <a
                          href={p.deployedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 hover:underline"
                        >
                          <span>Open Live Application</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
