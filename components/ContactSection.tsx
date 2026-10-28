"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Download,
  ArrowUpRight,
} from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio-data";

export default function ContactSection() {
  const { personal, education } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            CONTACT
          </h2>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Email */}
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="text-[11px] text-slate-400 hover:text-white"
                >
                  {copiedEmail ? (
                    <span className="text-emerald-400 font-mono">Copied</span>
                  ) : (
                    <span>Copy</span>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${personal.email}`}
                className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors break-all"
              >
                {personal.email}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-indigo-400" />
                  Phone
                </span>
                <button
                  onClick={handleCopyPhone}
                  className="text-[11px] text-slate-400 hover:text-white"
                >
                  {copiedPhone ? (
                    <span className="text-emerald-400 font-mono">Copied</span>
                  ) : (
                    <span>Copy</span>
                  )}
                </button>
              </div>
              <a
                href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors"
              >
                {personal.phone}
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                <span className="flex items-center gap-1.5">
                  <LinkedinIcon className="w-4 h-4 text-indigo-400" />
                  Network
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </div>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
              >
                LINKEDIN
              </a>
            </div>
          </div>

          {/* Location / Resume */}
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-slate-400 mb-3 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>Location</span>
              </div>
              <div className="text-sm font-semibold text-white mb-4">
                {education.location}
              </div>
            </div>
            <a
              href={personal.resumeUrl}
              download="DEEKSHITH_M_P_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
