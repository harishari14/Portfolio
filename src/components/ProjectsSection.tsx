import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
            Featured Work
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Projects & Deployments
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Recently built projects with direct links to live deployed applications and source repositories.
          </p>
        </div>

        {/* Projects Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/[0.08] hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Project Title */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  {project.deployedUrl && (
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-0.5 rounded shrink-0">
                      Live Deployed
                    </span>
                  )}
                </div>

                {/* Small Paragraph Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack List */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-slate-400 pt-2 border-t border-white/[0.05]">
                  <span className="text-slate-500 font-medium">Technologies:</span>
                  {project.techStack.map((tech, idx) => (
                    <React.Fragment key={idx}>
                      <span className="text-slate-300">{tech}</span>
                      {idx < project.techStack.length - 1 && <span className="text-slate-600">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Action Buttons (Deployed Link button / GitHub) */}
              <div className="pt-6 flex flex-wrap items-center gap-3">
                {project.deployedUrl && (
                  <a
                    href={project.deployedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] active:scale-95"
                  >
                    <span>Deployed Link</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-white/10 rounded-xl transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View GitHub Repo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
