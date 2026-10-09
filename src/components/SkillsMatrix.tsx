import React from 'react';
import { Code2, Layout, Server, Database, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Languages':
        return <Code2 className="w-4 h-4 text-cyan-400" />;
      case 'Frontend':
        return <Layout className="w-4 h-4 text-sky-400" />;
      case 'Backend':
        return <Server className="w-4 h-4 text-indigo-400" />;
      case 'Databases':
        return <Database className="w-4 h-4 text-emerald-400" />;
      default:
        return <Wrench className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 relative border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
            Technical Stack
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Programming languages, web technologies, backend frameworks, and development tools from my resume.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-5 border border-white/[0.08] hover:border-cyan-500/30 transition-all space-y-3"
            >
              {/* Category Title */}
              <div className="flex items-center gap-2.5 pb-2.5 border-b border-white/[0.07]">
                {getCategoryIcon(cat.category)}
                <h3 className="text-base font-bold text-white tracking-tight">
                  {cat.category}
                </h3>
              </div>

              {/* Skill items (Clean list without any 'advanced' or 'expert' labels) */}
              <div className="flex flex-wrap gap-2 pt-1">
                {cat.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/[0.06] text-xs font-mono text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
