# Deekshith M P &mdash; AI & Machine Learning Engineer Portfolio

A modern, executive-grade portfolio website engineered with Next.js (App Router, Server-Side Rendering) and Tailwind CSS. Tailored specifically for deploying to Netlify, featuring 100% authentic resume data, a custom geometric monogram "D" favicon, zero emojis, and production-level SEO optimization.

---

## Technical Specifications

- **Framework**: Next.js 14 (App Router)
- **Rendering Architecture**: Server-Side Rendering (SSR) via React Server Components
- **Styling**: Tailwind CSS with custom glassmorphism and fine-border dark theme
- **Icons**: Lucide React + custom inline SVGs (Strictly zero emojis)
- **Favicon**: Custom monogram "D" SVG and Next.js dynamic image generation
- **SEO & Structured Data**: Built-in JSON-LD (`schema.org/Person`), OpenGraph, Twitter Cards, robots meta
- **Deployment Target**: Netlify (preconfigured with `@netlify/plugin-nextjs` in `netlify.toml`)

---

## Directory Structure

```
├── app/
│   ├── globals.css          # Design system, glassmorphic utilities, custom scrollbar
│   ├── icon.tsx             # Next.js dynamic edge favicon generator with monogram 'D'
│   ├── layout.tsx           # Root layout with SSR metadata, font styling, and schema
│   ├── not-found.tsx        # Branded 404 page
│   └── page.tsx             # SSR homepage composing all sections and JSON-LD schema
├── components/
│   ├── CertificationsSection.tsx  # 5 verified certifications + leadership roles
│   ├── ContactSection.tsx         # Interactive contact card with direct copy & mailto
│   ├── EducationSection.tsx       # Global Academy of Technology B.E. details
│   ├── ExperienceSection.tsx      # LEARNER'S BYTE AI Intern details
│   ├── Footer.tsx                 # Clean footer with site map and SSR badges
│   ├── Hero.tsx                   # Hero banner, technical dossier, credentials
│   ├── Icons.tsx                  # Custom SVG icons (LinkedIn, etc.)
│   ├── Navbar.tsx                 # Sticky navigation, mobile menu, quick resume link
│   ├── ProjectsSection.tsx        # 6 filterable production-grade project cards
│   └── SkillsSection.tsx          # Categorized domain skills & flat resume skill index
├── data/
│   └── portfolio-data.ts    # Single source of truth containing 100% real PDF data
├── public/
│   ├── DEEKSHITH_M_P_Resume.pdf  # Downloadable PDF resume
│   └── favicon.svg               # Vector favicon with geometric monogram 'D'
├── netlify.toml             # Netlify deployment configuration for Next.js SSR
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS design tokens
└── tsconfig.json            # TypeScript configuration
```

---

## Verified Portfolio Content (From PDF)

- **Education**: Global Academy of Technology (Nov 2022 - June 2026), B.E. in Artificial Intelligence & Machine Learning (CGPA: 7.6)
- **Experience**: LEARNER'S BYTE &mdash; AI Intern (Jan 2026 – May 2026) focusing on Generative AI, Agentic Workflows, and n8n platform automation.
- **Projects**:
  1. **LLM Guardrails**: Real-time AI safety layer with BART MNLI zero-shot classification, achieving 300–500 ms P95 CPU inference latency.
  2. **VISTA (Visually Impaired Smart Tracking Assistant)**: IoT, YOLOv8 scene narration, automatic fall detection, and GPS emergency alerts.
  3. **AI Recruitment System**: n8n, Grok API, Gmail API, and Google Sheets candidate screening automation.
  4. **NLP Customer Review Analytics Dashboard**: VADER & spaCy sentiment analysis, topic modeling, Streamlit, and Plotly visualizations.
  5. **Titanic Survival Prediction**: Random Forest model, Docker containerization, and Apache Kafka real-time streaming inference.
  6. **Skin Disease Detection**: Convolutional Neural Networks (CNN) with TF-IDF symptom vectorization.
- **Certifications**: Internshala Web Development (PG Life portal), Infosys Springboard PySpark, EXCELR Project Excellence (Gen AI / Agentic AI), Mevi Technologies LLM Chatbot Workshop, and Infosys Springboard Microsoft Azure Cloud Computing.
- **Leadership**: Sub-core Member VTU Youth Fest 2025 & Head of AIML Department Event Management Club.

---

## Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production (SSR)
```bash
npm run build
npm start
```

---

## Deploying to Netlify

This project is pre-configured for Netlify with `netlify.toml`:

### Option A: Deploy via GitHub (Recommended)
1. Initialize a Git repository and commit the files:
   ```bash
   git init
   git add .
   git commit -m "feat: Initial commit of Deekshith M P portfolio"
   ```
2. Push your repository to GitHub / GitLab / Bitbucket.
3. Log in to [Netlify](https://app.netlify.com).
4. Click **Add new site** &gt; **Import an existing project**.
5. Select your Git repository. Netlify automatically detects Next.js settings from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Click **Deploy Site**. Netlify will build and deploy the SSR application.

### Option B: Deploy via Netlify CLI
1. Install Netlify CLI globally (if not already installed):
   ```bash
   npm install -g netlify-cli
   ```
2. Log in and initialize deployment:
   ```bash
   netlify login
   netlify init
   ```
3. Deploy to production:
   ```bash
   netlify deploy --prod
   ```
