import React from 'react';
import { Briefcase, BookOpen, Users } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-16 relative border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
            Experience & Training
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Work Experience & Training Track
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Practical full-stack training, internship delivery, and collegiate leadership activities.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-6">
          {EXPERIENCES.map((item) => (
            <div
              key={item.id}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/[0.08] hover:border-cyan-500/30 transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3 border-b border-white/[0.07]">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {item.role}
                  </h3>
                  <div className="text-sm font-semibold text-cyan-300 mt-0.5">
                    {item.organization} <span className="text-slate-500 font-normal">· {item.location}</span>
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-300 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-white/[0.06] shrink-0 self-start">
                  {item.period}
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {item.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="text-cyan-400 mt-1 shrink-0">▪</span>
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies tag if available */}
              {item.skills && (
                <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="text-slate-500">Skills:</span>
                  {item.skills.map((s, sIdx) => (
                    <span key={sIdx} className="text-slate-300 bg-slate-900/60 px-2 py-0.5 rounded border border-white/[0.04]">
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
