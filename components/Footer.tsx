import React from "react";
import { ArrowUp, ShieldCheck } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-950 border border-indigo-700/60 flex items-center justify-center font-black text-sm text-cyan-400">
              D
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                {personal.name}
              </div>
              <div className="text-xs text-slate-400 font-mono">
                {personal.title}
              </div>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#education" className="hover:text-white transition-colors">
              Education
            </a>
            <a href="#certifications" className="hover:text-white transition-colors">
              Certifications
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Back to top */}
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-4">
          <div>
            &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Built with Next.js SSR &mdash; Netlify Optimized</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
