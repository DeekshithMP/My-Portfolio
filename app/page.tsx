import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { portfolioData } from "@/data/portfolio-data";

export default function HomePage() {
  const { personal, education, skills } = portfolioData;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    email: personal.email,
    telephone: personal.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: education.location,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: education.institution,
    },
    knowsAbout: skills,
  };

  return (
    <div className="relative min-h-screen bg-background bg-grid-pattern">
      {/* JSON-LD Schema for SSR / Search Engine Indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="flex flex-col">
        <Hero />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
