import React from "react";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  ArrowRight,
  Shield,
  Bot,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio-data";

export default function Hero() {
  const { personal, education } = portfolioData;
  const currentEdu = education[0];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/15 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 mb-6 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-medium text-slate-300">
            {personal.availability}
          </span>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-sm tracking-wide uppercase">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Portfolio & Technical Dossier</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                {personal.name}
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-300">
                {personal.title} &mdash;{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  {personal.tagline}
                </span>
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl">
              {personal.summary}
            </p>

            {/* Quick Credentials Summary Card */}
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-950/80 border border-indigo-800/50 text-indigo-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Education & Degree
                  </div>
                  <div className="text-sm font-semibold text-slate-200">
                    {currentEdu.degree}
                  </div>
                  <div className="text-xs text-slate-400">
                    {currentEdu.institution} &bull; CGPA: {currentEdu.cgpa}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 shrink-0">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Recent Industry Role
                  </div>
                  <div className="text-sm font-semibold text-slate-200">
                    AI Intern &bull; LEARNER&apos;S BYTE
                  </div>
                  <div className="text-xs text-slate-400">
                    Generative & Agentic AI Workflows (Jan - May 2026)
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-md shadow-indigo-600/20 active:scale-95"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resumeUrl}
                download="DEEKSHITH_M_P_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-700 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-semibold text-sm transition-all active:scale-95"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-transparent hover:border-slate-800 text-slate-300 hover:text-white font-medium text-sm transition-all"
              >
                <span>Direct Contact</span>
              </a>
            </div>

            {/* Quick Contact & Info Meta */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 text-xs font-mono text-slate-400 border-t border-slate-800/80">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>{personal.email}</span>
              </a>
              <a
                href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>{personal.phone}</span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-slate-500" />
                <span>LinkedIn Profile</span>
              </a>
              <span className="inline-flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{personal.location}</span>
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Highlights Card */}
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl p-6 glass-panel border border-slate-800 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">
                    system_specs.config
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/60">
                  PROD ACTIVE
                </span>
              </div>

              {/* Technical Capability Cards */}
              <div className="space-y-3.5 text-xs">
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center justify-between font-mono text-slate-300 mb-1">
                    <span className="flex items-center gap-1.5 text-indigo-400">
                      <Shield className="w-3.5 h-3.5" />
                      LLM Safety Layer
                    </span>
                    <span className="text-cyan-400">300-500ms P95</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Zero-shot classification via BART MNLI with CPU-optimized
                    decision boundary.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center justify-between font-mono text-slate-300 mb-1">
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <Bot className="w-3.5 h-3.5" />
                      Agentic Orchestration
                    </span>
                    <span className="text-emerald-400">Autonomous</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    n8n pipelines, Grok API, Gmail API, and Google Sheets
                    automated resume pipelines.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center justify-between font-mono text-slate-300 mb-1">
                    <span className="flex items-center gap-1.5 text-teal-400">
                      <Layers className="w-3.5 h-3.5" />
                      Streaming & Microservices
                    </span>
                    <span className="text-slate-300">Kafka + Docker</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Distributed event-driven ML inference and containerized
                    dashboard architectures.
                  </p>
                </div>
              </div>

              {/* Monogram Footer Stamp */}
              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-slate-800/80">
                <span>VERIFIED RESUME RECORD</span>
                <span className="text-slate-400">SSR NEXT.JS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
