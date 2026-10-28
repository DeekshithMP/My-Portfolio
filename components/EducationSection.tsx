import React from "react";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            EDUCATION
          </h2>
        </div>

        {/* Education Card */}
        <div className="p-8 rounded-2xl glass-panel border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {education.institution}
              </h3>
              <div className="text-base font-mono text-indigo-400 font-semibold mb-3">
                {education.degree}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>{education.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-indigo-950/80 border border-indigo-800 text-indigo-300">
                <Award className="w-3.5 h-3.5" />
                CGPA: {education.cgpa}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {education.period}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
