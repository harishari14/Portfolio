import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsMatrix } from './components/SkillsMatrix';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { DeveloperConsole } from './components/DeveloperConsole';
import { FileText, Terminal } from 'lucide-react';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 relative">
      {/* Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Projects Section: Name, Short Description, Deployed Link Button, GitHub */}
        <ProjectsSection />

        {/* Technical Skills: Languages, Frontend, Backend, Databases, Tools (No 'Advanced' labels) */}
        <SkillsMatrix />

        {/* Experience & Training Track: QSpiders, AAFIndia, NSS */}
        <ExperienceTimeline />

        {/* Education & Certifications */}
        <EducationSection />

        {/* Contact Information & Direct Outreach */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Floating Bottom Quick-Launcher for Resume */}
      <div className="fixed bottom-5 right-5 z-30 flex items-center gap-2">
        <button
          onClick={() => setIsTerminalOpen(true)}
          className="flex items-center gap-1.5 px-3 py-2 bg-slate-900/90 hover:bg-slate-800 text-cyan-400 font-mono text-xs rounded-xl border border-cyan-500/30 backdrop-blur-xl shadow-lg transition-all active:scale-95 cursor-pointer"
          title="Open Developer Console (CLI)"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">CLI Console</span>
        </button>

        <button
          onClick={() => setIsResumeOpen(true)}
          className="flex items-center gap-1.5 px-3.5 py-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all active:scale-95 cursor-pointer"
          title="View Full Resume"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Resume</span>
        </button>
      </div>

      {/* Official Full Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Developer Terminal Console */}
      <DeveloperConsole
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenLiveApp={(id) => {
          setIsTerminalOpen(false);
          const elem = document.getElementById('projects');
          elem?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenResume={() => {
          setIsTerminalOpen(false);
          setIsResumeOpen(true);
        }}
      />
    </div>
  );
}
