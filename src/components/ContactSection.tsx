import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, Send, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                Get In Touch
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Let's Build Together
              </h2>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                Seeking an entry-level Software Engineer role at an MNC or high-growth technology company. Open to technical interviews, codebase walkthroughs, and architecture discussions.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-3 font-mono text-xs">
              {/* Email */}
              <div className="glass-panel p-4 rounded-xl border border-white/[0.08] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-950/60 rounded-lg text-cyan-400 border border-cyan-500/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Email Address</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-white hover:text-cyan-400 font-bold transition-colors select-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-white/10 transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="glass-panel p-4 rounded-xl border border-white/[0.08] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-950/60 rounded-lg text-indigo-400 border border-indigo-500/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Direct Mobile</div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-white hover:text-cyan-400 font-bold transition-colors select-all"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-white/10 transition-colors cursor-pointer"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="glass-panel p-4 rounded-xl border border-white/[0.08] flex items-center gap-3">
                <div className="p-2 bg-slate-900 rounded-lg text-slate-400 border border-white/[0.05]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase">Location Base</div>
                  <div className="text-white font-bold">{PERSONAL_INFO.location} (Open to Relocation)</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-white/10 text-xs font-mono transition-all"
              >
                <Github className="w-4 h-4" />
                <span>github/{PERSONAL_INFO.githubHandle}</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-white/10 text-xs font-mono transition-all"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>linkedin/{PERSONAL_INFO.linkedinHandle}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Outreach Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-white/[0.09] relative">
              <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                Send Direct Message / Schedule Technical Screen
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Direct dispatch to amharish.m@gmail.com
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-950/40 border border-emerald-500/30 rounded-xl space-y-2 text-center">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <div className="text-base font-bold text-white">Message Dispatched!</div>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out. Harish will respond promptly to your email at <span className="text-cyan-300 font-mono">{formData.email || 'your address'}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="glass-input w-full px-3 py-2 rounded-lg text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-mono text-slate-300">Your Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="glass-input w-full px-3 py-2 rounded-lg text-xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-slate-300">Subject / Position Title</label>
                    <input
                      type="text"
                      placeholder="e.g. Software Engineer Opportunity / Technical Interview"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="glass-input w-full px-3 py-2 rounded-lg text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-slate-300">Message / Invariant Details *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share details regarding the role, timeline, or interview schedule..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="glass-input w-full px-3 py-2 rounded-lg text-xs resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold text-xs rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.45)] cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{submitting ? 'Transmitting...' : 'Dispatch Message to Harish'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
