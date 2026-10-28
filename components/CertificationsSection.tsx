import React from "react";
import { Award, CheckCircle, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function CertificationsSection() {
  const { certifications, leadership } = portfolioData;

  return (
    <section id="certifications" className="py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Credentials & Specializations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Certifications & Leadership
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Industry credentials and student leadership initiatives verifying applied capabilities.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span>Professional Certifications</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between p-6 rounded-2xl glass-panel border border-slate-800 hover:border-slate-700 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800/60 text-indigo-300">
                      {cert.issuer}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {cert.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {cert.title}
                  </h3>

                  {cert.details && (
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {cert.details}
                    </p>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-cyan-400 font-mono">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Credential</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Experience */}
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Leadership & Institutional Contributions</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadership.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-panel border border-slate-800"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">
                    {item.role}
                  </h3>
                </div>
                <div className="text-sm font-semibold text-indigo-400 mb-3">
                  {item.organization}
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.scope}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
