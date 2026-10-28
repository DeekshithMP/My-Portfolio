import React from "react";
import { Code2, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            SKILLS
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="p-8 rounded-2xl glass-panel border border-slate-800">
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800/80 transition-all text-sm font-mono text-slate-200"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
