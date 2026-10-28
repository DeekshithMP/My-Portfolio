"use client";

import React, { useState } from "react";
import {
  Code2,
  Cpu,
  Layers,
  Shield,
  Eye,
  Bot,
  Activity,
  BarChart3,
  Check,
  Zap,
  ArrowUpRight,
  Filter,
} from "lucide-react";
import { portfolioData, Project } from "@/data/portfolio-data";

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Generative AI & LLMs",
    "Computer Vision & IoT",
    "Intelligent Automation",
    "Machine Learning & Analytics",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const getCategoryIcon = (category: Project["category"]) => {
    switch (category) {
      case "Generative AI & LLMs":
        return <Shield className="w-4 h-4 text-indigo-400" />;
      case "Computer Vision & IoT":
        return <Eye className="w-4 h-4 text-cyan-400" />;
      case "Intelligent Automation":
        return <Bot className="w-4 h-4 text-emerald-400" />;
      case "Machine Learning & Analytics":
        return <BarChart3 className="w-4 h-4 text-teal-400" />;
      default:
        return <Code2 className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Engineering Projects
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Production-oriented architectures spanning real-time safety guardrails, streaming inference pipelines, and agentic workflows.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/30"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-2xl glass-panel p-6 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-glow-indigo"
            >
              <div>
                {/* Category & Metric Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                    {getCategoryIcon(project.category)}
                    <span className="truncate max-w-[160px]">{project.category}</span>
                  </div>

                  {project.metrics && (
                    <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/70 border border-cyan-800/60 px-2 py-0.5 rounded">
                      {project.metrics}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                  {project.title}
                </h3>

                {/* Core Description from PDF */}
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Technical Highlights */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Architectural Details:
                  </div>
                  {project.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-2 text-xs text-slate-300"
                    >
                      <span className="text-indigo-400 mt-0.5 shrink-0">&bull;</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies List */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
