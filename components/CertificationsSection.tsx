import React from "react";
import { Award, Users, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function CertificationsSection() {
  const { certifications, leadershipExperience } = portfolioData;

  return (
    <section id="certifications" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certifications Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            CERTIFICATIONS
          </h2>
        </div>

        {/* Certifications List */}
        <div className="space-y-4 mb-14">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 rounded-xl glass-panel border border-slate-800 hover:border-slate-700 transition-all"
            >
              <div className="p-1 rounded-full bg-indigo-950 border border-indigo-800 text-indigo-400 shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {cert}
              </p>
            </div>
          ))}
        </div>

        {/* Leadership Experience */}
        <div id="leadership">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
              <Users className="w-3.5 h-3.5" />
              <span>Extracurricular Roles</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              LEADERSHIP EXPERIENCE
            </h2>
          </div>

          <div className="p-6 rounded-xl glass-panel border border-slate-800">
            <p className="text-sm sm:text-base text-slate-200 font-medium">
              {leadershipExperience}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
