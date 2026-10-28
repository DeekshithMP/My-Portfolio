import React from "react";
import { ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function Footer() {
  const { personal, education } = portfolioData;

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
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
                {education.degree}
              </div>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
            <a href="#education" className="hover:text-white transition-colors">
              EDUCATION
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              SKILLS
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              EXPERIENCE
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              PROJECTS
            </a>
            <a href="#certifications" className="hover:text-white transition-colors">
              CERTIFICATIONS
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              CONTACT
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

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} {personal.name}
          </div>
          <div>Next.js SSR &bull; Netlify</div>
        </div>
      </div>
    </footer>
  );
}
