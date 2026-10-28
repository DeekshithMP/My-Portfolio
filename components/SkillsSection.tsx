import React from "react";
import {
  Code,
  Cpu,
  Database,
  Brain,
  Workflow,
  BarChart3,
  Server,
  Layers,
  CheckCircle,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function SkillsSection() {
  const { skills } = portfolioData;

  const domainIcons: Record<string, React.ReactNode> = {
    "Artificial Intelligence & LLMs": <Brain className="w-5 h-5 text-indigo-400" />,
    "Automation & Orchestration": <Workflow className="w-5 h-5 text-emerald-400" />,
    "Computer Vision & Deep Learning": <Cpu className="w-5 h-5 text-cyan-400" />,
    "Languages & Frameworks": <Code className="w-5 h-5 text-teal-400" />,
    "Data Engineering & Analytics": <Database className="w-5 h-5 text-amber-400" />,
    "Productivity & Distributed Tech": <Layers className="w-5 h-5 text-purple-400" />,
  };

  return (
    <section id="skills" className="py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
              <Code className="w-3.5 h-3.5" />
              <span>Technical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Skills & Technology Stack
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Directly mapped from verified projects, internship deliverables, and academic coursework.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.categories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-panel border border-slate-800 hover:border-slate-700 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  {domainIcons[category.name] || <Cpu className="w-5 h-5 text-indigo-400" />}
                </div>
                <h3 className="text-base font-bold text-white">{category.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Complete Verified Resume Skills Banner */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Complete Resume Skills Index (As Listed in Official Document):</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.flatList.map((skill, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800/80 text-slate-200 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
