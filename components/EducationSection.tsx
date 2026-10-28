import React from "react";
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Foundation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Education & Qualifications
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Undergraduate engineering degree in Artificial Intelligence and Machine Learning.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl glass-panel border border-slate-800 hover:border-slate-700 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {item.institution}
                  </h3>
                  <div className="text-base font-medium text-indigo-400">
                    {item.degree}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-indigo-950/80 border border-indigo-800 text-indigo-300">
                    <Award className="w-3.5 h-3.5" />
                    CGPA: {item.cgpa}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {item.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {item.location}
                  </span>
                </div>
              </div>

              {item.courseworkNotes && (
                <div className="pt-4 border-t border-slate-800/80 flex items-start gap-2.5 text-sm text-slate-400">
                  <BookOpen className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{item.courseworkNotes}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
