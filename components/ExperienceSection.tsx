import React from "react";
import { Briefcase, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work History</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            EXPERIENCE
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl glass-panel border border-slate-800 hover:border-slate-700 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {exp.company}
                  </h3>
                  <span className="text-slate-500 hidden sm:inline">-</span>
                  <span className="text-base sm:text-lg font-mono text-indigo-400 font-semibold">
                    {exp.role}
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 shrink-0 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>({exp.period})</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
