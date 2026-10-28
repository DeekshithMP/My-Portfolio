"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X, ArrowUpRight, ShieldCheck, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-header py-3.5 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <Link
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-lg p-1"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-900 via-surface-900 to-black border border-indigo-500/40 flex items-center justify-center font-bold text-xl text-white shadow-glow-indigo transition-transform group-hover:scale-105">
              <span className="bg-gradient-to-br from-white via-indigo-200 to-cyan-400 bg-clip-text text-transparent font-black">
                D
              </span>
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-cyan-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-100 tracking-tight text-base group-hover:text-cyan-400 transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-xs font-mono text-slate-400">
                AI & ML Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-900/60 border border-slate-800/80 px-4 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-slate-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={portfolioData.personal.resumeUrl}
              download="DEEKSHITH_M_P_Resume.pdf"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-sm hover:shadow-indigo-500/25 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white bg-slate-900/40 hover:bg-slate-800/60 transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-header border-b border-slate-800 px-6 py-5 mt-3 space-y-4 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={portfolioData.personal.resumeUrl}
              download="DEEKSHITH_M_P_Resume.pdf"
              className="flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg border border-slate-700 text-slate-200 hover:bg-slate-800 transition-all"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
