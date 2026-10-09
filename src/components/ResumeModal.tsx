import React, { useEffect, useState } from 'react';
import { X, Printer, Download, Copy, Check, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textContent = `HARISH M
Software Engineer | B.E. Computer Science 2025 | CGPA 8.63
Chennai, India | +91 9944098830 | amharish.m@gmail.com | linkedin.com/in/harish | github.com/harishari14

PROFESSIONAL SUMMARY
Results-driven Computer Science graduate (CGPA 8.63) with practical Java Full-Stack development experience, currently advancing skills at QSpiders, Vadapalani. Proven ability to deliver measurable outcomes — 15% faster page load, zero double-booking, 5 production UI features shipped — in both team and independent settings. Seeking an entry-level Software Engineer role at an MNC.

TECHNICAL SKILLS
• Languages: Java, JavaScript, SQL, TypeScript
• Frontend: HTML5, CSS3, JavaScript, React.js / React 19, Tailwind CSS
• Backend: Java Servlets, JSP, JDBC, Spring Boot 3.3, Node.js, REST APIs
• Databases: Oracle DB, MongoDB, Concurrent In-Memory Stores
• Tools & Concepts: Git, GitHub, Eclipse, VS Code, OOP, MVC, SDLC

TRAINING IN PROGRESS
Java Full-Stack Development | QSpiders, Vadapalani | Dec 2025 – Apr 2026
• Covering Core Java, Advanced Java (Servlets, JDBC), web-tier technologies, and project work in an industry-aligned curriculum.
• Hands-on coding practice reinforcing Servlet lifecycle, JDBC connection pooling, MVC design patterns, and SQL optimization.

INTERNSHIP EXPERIENCE
Web Development Intern | AAFIndia Pvt Ltd, Bangalore | Jul 2024 – Aug 2024
• Reduced page-load time by ~15% by auditing and eliminating redundant code and restructuring static-asset delivery — measured before/after via browser DevTools.
• Shipped 5 UI features in HTML5/CSS3 as part of a 4-member Agile team, each passing a structured QA workflow before merging — zero rollbacks on delivery.

FEATURED PROJECTS
1. AetherSpend (2026 Glassmorphic Expense Tracker) | Java 21, Spring Boot 3.3.4, React 19, ConcurrentHashMap
• Deployed: https://aetherspend-2026-glassmorphic-expense-tracker.ai.studio/
• Standalone Java Spring Boot 3.3 REST API with thread-safe in-memory concurrent store (zero database setup required).
• 2026 glassmorphic UI with dynamic SVG Cash Flow curves and $0.00 clean-slate initial state.

2. ProofLane (Client Milestone Deliverable & Payment Portal) | Java 17, Spring Boot 3.3.4, React 19
• Deployed: https://prooflane-client-milestone-deliverable-poortal-7590.ai.studio/
• Verifiable deliverable proofs (staging URLs, PRs, Figma, Loom) linked to contract milestones with client sign-off audit trail.

3. Hospital Appointment Management System | Java, JSP, Oracle DB, JDBC
• github.com/harishari14/HospitalManagement
• Engineered 3-role web application (Patient · Doctor · Admin) with end-to-end appointment lifecycle.
• Prevented double-booking entirely by enforcing composite UNIQUE constraint on (doctor_id, date, time_slot).

4. Movie Booking App | MongoDB, Express.js, React.js, Node.js
• Reduced API response time by ~30% through targeted database indexing and query-level optimizations.
• Implemented end-to-end authentication with JWT and Bcrypt hash.

EDUCATION
B.E. Computer Science and Engineering | Anand Institute of Higher Technology, Chennai | 2021–2025 | CGPA: 8.63/10
Higher Secondary — Computer Science | KSR Matric Public Hr. Sec. School, Ambur | 2021 | 91.5%

CERTIFICATIONS
• Java Programming — Certified (Jan 2023)
• Oracle Cloud Computing — Oracle University
• MongoDB for Students — MongoDB University

LEADERSHIP & ACTIVITIES
NSS Club President | Anand Institute of Higher Technology | 2021 – 2022
• Led a 50-member volunteer team through a 7-day NSS camp, growing community participation 10%.`;

    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] glass-panel-elevated rounded-2xl border border-white/15 flex flex-col shadow-2xl overflow-hidden">
        {/* Top bar controls */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/[0.09] bg-[#0A0E1A]/95">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">Harish M — Official Resume</span>
            <span className="text-xs font-mono text-cyan-400">· PDF Aligned</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-white/10 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Body (Styled cleanly as high-density document) */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-[#07090E] text-slate-200 space-y-6 text-xs sm:text-sm font-sans print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-white/15 pb-4 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
              HARISH M
            </h1>
            <div className="text-xs sm:text-sm font-semibold text-cyan-400 mt-1">
              Software Engineer | B.E. Computer Science 2025 | CGPA 8.63
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-xs text-slate-400 mt-2 font-mono">
              <span>Chennai, India</span>
              <span>·</span>
              <a href="tel:+919944098830" className="hover:text-white">+91 9944098830</a>
              <span>·</span>
              <a href="mailto:amharish.m@gmail.com" className="hover:text-cyan-300 text-slate-300">amharish.m@gmail.com</a>
              <span>·</span>
              <a href="https://linkedin.com/in/harish" target="_blank" rel="noreferrer" className="hover:text-cyan-300">linkedin.com/in/harish</a>
              <span>·</span>
              <a href="https://github.com/harishari14" target="_blank" rel="noreferrer" className="hover:text-cyan-300">github.com/harishari14</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
              ■ PROFESSIONAL SUMMARY
            </h2>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              Results-driven Computer Science graduate (CGPA 8.63) with practical Java Full-Stack development experience, currently advancing skills at QSpiders, Vadapalani. Proven ability to deliver measurable outcomes — 15% faster page load, zero double-booking, 5 production UI features shipped — in both team and independent settings. Seeking an entry-level Software Engineer role at an MNC.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
              ■ TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 gap-1 text-xs sm:text-sm text-slate-300 font-mono">
              <div><strong className="text-white font-sans">Languages:</strong> Java 21, JavaScript, SQL, TypeScript</div>
              <div><strong className="text-white font-sans">Frontend:</strong> HTML5, CSS3, JavaScript, React.js / React 19, Tailwind CSS v4</div>
              <div><strong className="text-white font-sans">Backend:</strong> Java Servlets, JSP, JDBC, Spring Boot 3.3, Node.js, REST APIs</div>
              <div><strong className="text-white font-sans">Databases:</strong> Oracle DB, MongoDB, In-Memory ConcurrentHashMap</div>
              <div><strong className="text-white font-sans">Tools & Concepts:</strong> Git, GitHub, Eclipse, VS Code, Maven, OOP, MVC, SDLC</div>
            </div>
          </div>

          {/* Training in Progress */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
              ■ TRAINING IN PROGRESS
            </h2>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-semibold text-white text-xs sm:text-sm">
                <span>Java Full-Stack Development | QSpiders, Vadapalani</span>
                <span className="font-mono text-slate-400 text-xs">Dec 2025 – Apr 2026</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-slate-300 text-xs mt-1">
                <li>Covering Core Java, Advanced Java (Servlets, JDBC), web-tier technologies, and project work in an industry-aligned curriculum.</li>
                <li>Hands-on coding practice reinforcing Servlet lifecycle, JDBC connection pooling, MVC design patterns, and SQL optimization.</li>
              </ul>
            </div>
          </div>

          {/* Internship Experience */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
              ■ INTERNSHIP EXPERIENCE
            </h2>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-semibold text-white text-xs sm:text-sm">
                <span>Web Development Intern | AAFIndia Pvt Ltd, Bangalore</span>
                <span className="font-mono text-slate-400 text-xs">Jul 2024 – Aug 2024</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-slate-300 text-xs mt-1">
                <li>Reduced page-load time by ~15% by auditing and eliminating redundant code and restructuring static-asset delivery — measured before/after via browser DevTools.</li>
                <li>Shipped 5 UI features in HTML5/CSS3 as part of a 4-member Agile team, each passing a structured QA workflow before merging — zero rollbacks on delivery.</li>
              </ul>
            </div>
          </div>

          {/* Featured Deployed Projects */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
              ■ RECENT DEPLOYMENTS & FEATURED PROJECTS
            </h2>

            {/* AetherSpend */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-semibold text-white text-xs sm:text-sm">
                <span>AetherSpend — 2026 Glassmorphic Expense Tracker | Java 21, Spring Boot 3.3, React 19</span>
                <a
                  href="https://aetherspend-2026-glassmorphic-expense-tracker.ai.studio/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-cyan-400 text-xs hover:underline"
                >
                  [Live Deployed URL ↗]
                </a>
              </div>
              <ul className="list-disc pl-5 space-y-0.5 text-slate-300 text-xs">
                <li>Engineered standalone Java Spring Boot 3.3.4 (Java 21) REST API using an in-memory concurrent store (ConcurrentHashMap) with zero database setup required.</li>
                <li>Built 2026 glassmorphic UI with dynamic SVG Cash Flow Trend Waves, Category Allocation Doughnut, high-density ledger, and $0.00 clean-slate state.</li>
              </ul>
            </div>

            {/* ProofLane */}
            <div className="space-y-1 pt-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-semibold text-white text-xs sm:text-sm">
                <span>ProofLane — Client Milestone & Deliverable Portal | Spring Boot 3.3, React 19</span>
                <a
                  href="https://prooflane-client-milestone-deliverable-poortal-7590.ai.studio/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-cyan-400 text-xs hover:underline"
                >
                  [Live Deployed URL ↗]
                </a>
              </div>
              <ul className="list-disc pl-5 space-y-0.5 text-slate-300 text-xs">
                <li>Bridges software deliverables and payment releases by attaching verifiable proofs (staging URLs, PRs, Figma, Loom) to milestones.</li>
                <li>Client review interface with dual workflows (Authorize Payout vs Request Changes) and an immutable audit activity ledger.</li>
              </ul>
            </div>

            {/* Hospital Management */}
            <div className="space-y-1 pt-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-semibold text-white text-xs sm:text-sm">
                <span>Hospital Appointment Management System | Java, JSP, Oracle DB, JDBC</span>
                <a
                  href="https://github.com/harishari14/HospitalManagement"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-cyan-400 text-xs hover:underline"
                >
                  [github.com/harishari14/HospitalManagement]
                </a>
              </div>
              <ul className="list-disc pl-5 space-y-0.5 text-slate-300 text-xs">
                <li>Engineered a 3-role web application (Patient · Doctor · Admin) with end-to-end appointment lifecycle (Pending → Confirmed → Completed).</li>
                <li>Prevented double-booking entirely by enforcing composite UNIQUE constraint on (doctor_id, date, time_slot) at the Oracle DB level.</li>
                <li>Secured all three dashboards with HTTP session authentication, ensuring zero cross-role data leakage confirmed in testing.</li>
              </ul>
            </div>

            {/* Movie Booking */}
            <div className="space-y-1 pt-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-semibold text-white text-xs sm:text-sm">
                <span>Movie Booking App | MongoDB, Express.js, React.js, Node.js</span>
                <span className="font-mono text-slate-400 text-xs">2024</span>
              </div>
              <ul className="list-disc pl-5 space-y-0.5 text-slate-300 text-xs">
                <li>Reduced API response time by ~30% through targeted database indexing and query-level optimizations.</li>
                <li>Implemented end-to-end user authentication using JWT and Bcrypt hash with protected route access.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
              ■ EDUCATION
            </h2>
            <div className="space-y-1 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <span className="font-semibold text-white">B.E. Computer Science and Engineering | Anand Institute of Higher Technology, Chennai</span>
                <span className="font-mono text-cyan-300 font-bold">2021–2025 | CGPA: 8.63/10</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-slate-400">
                <span>Higher Secondary — Computer Science | KSR Matric Public Hr. Sec. School, Ambur</span>
                <span className="font-mono text-slate-300">2021 | 91.5%</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
              ■ CERTIFICATIONS
            </h2>
            <ul className="list-disc pl-5 space-y-0.5 text-slate-300 text-xs">
              <li>Java Programming — Certified (Jan 2023)</li>
              <li>Oracle Cloud Computing — Oracle University</li>
              <li>MongoDB for Students — MongoDB University</li>
            </ul>
          </div>

          {/* Leadership & Activities */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
              ■ LEADERSHIP & ACTIVITIES
            </h2>
            <div className="text-xs">
              <div className="flex justify-between font-semibold text-white">
                <span>NSS Club President | Anand Institute of Higher Technology</span>
                <span className="font-mono text-slate-400">2021 – 2022</span>
              </div>
              <p className="text-slate-300 mt-0.5">
                Led a 50-member volunteer team through a 7-day NSS camp, growing community participation 10% via structured outreach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
