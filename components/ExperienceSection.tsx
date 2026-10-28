import React from "react";
import { Briefcase, Calendar, CheckCircle2, Cpu, Workflow, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Industry Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Work History & Internships
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Production experience in deploying Generative AI, building agentic workflows, and streamlining enterprise automations.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-8 rounded-2xl glass-panel border border-slate-800 hover:border-indigo-500/40 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <span className="text-indigo-400 font-semibold text-lg">
                      @ {exp.company}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
                    {exp.summary}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 shrink-0 self-start">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="mb-6 space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Key Deliverables & Responsibilities:
                </div>
                {exp.responsibilities.map((item, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-3 text-sm text-slate-300">
                    <div className="p-0.5 rounded-full bg-indigo-950 text-indigo-400 border border-indigo-800/60 mt-1 shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* Technology Tags */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1.5">
                  <Workflow className="w-3.5 h-3.5 text-cyan-400" />
                  Stack & Tooling:
                </span>
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
