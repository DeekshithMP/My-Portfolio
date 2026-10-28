import React from "react";
import { Cpu, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            PROJECTS
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-7 rounded-2xl glass-panel border border-slate-800 hover:border-indigo-500/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.map((item, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-indigo-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
