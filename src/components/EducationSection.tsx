import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 relative border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Education */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                Academic Background
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Education
              </h2>
            </div>

            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl p-6 border border-white/[0.08] hover:border-cyan-500/30 transition-all space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                  </div>

                  <div className="text-sm text-slate-300">
                    {edu.institution}, {edu.location}
                  </div>

                  <div className="pt-2">
                    <span className="inline-block px-3 py-1 rounded-lg bg-cyan-950/60 text-cyan-300 font-mono text-xs font-bold border border-cyan-500/30">
                      {edu.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                Verified Credentials
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Certifications
              </h2>
            </div>

            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="glass-panel rounded-xl p-4 border border-white/[0.08] hover:border-cyan-500/30 transition-all flex items-center justify-between gap-3"
                >
                  <div className="space-y-0.5">
                    <h3 className="text-sm font-bold text-white tracking-tight">
                      {cert.name}
                    </h3>
                    <div className="text-xs font-mono text-slate-400">
                      {cert.issuer}
                    </div>
                  </div>

                  <span className="text-xs font-mono text-cyan-400 shrink-0">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
