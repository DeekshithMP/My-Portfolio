import React from "react";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio-data";

export default function Hero() {
  const { personal, education } = portfolioData;

  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/15 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl space-y-8">
          {/* Header Info */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              {personal.name}
            </h1>
            <div className="text-lg sm:text-xl font-mono text-cyan-400">
              {education.degree}
            </div>
          </div>

          {/* Contact Bar directly matching resume header */}
          <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-sm font-mono text-slate-300 p-4 rounded-xl glass-panel border border-slate-800">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>{personal.email}</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a
              href={`tel:${personal.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-4 h-4 text-indigo-400" />
              <span>{personal.phone}</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-indigo-400" />
              <span>LINKEDIN</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-4 h-4 text-slate-500" />
              <span>{education.location}</span>
            </span>
          </div>

          {/* Education Overview Snippet */}
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              <span>EDUCATION</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="text-lg font-bold text-white">
                  {education.institution}
                </div>
                <div className="text-sm text-slate-300">
                  {education.degree}
                </div>
              </div>
              <div className="flex items-center gap-3 sm:text-right">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-indigo-950 border border-indigo-800/80 text-indigo-300">
                  CGPA: {education.cgpa}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {education.period}
                </span>
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-md shadow-indigo-600/20 active:scale-95"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={personal.resumeUrl}
              download="DEEKSHITH_M_P_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-700 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-semibold text-sm transition-all active:scale-95"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Resume PDF</span>
            </a>

            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/40 text-slate-300 hover:text-white font-medium text-sm transition-all"
            >
              <span>Experience</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
