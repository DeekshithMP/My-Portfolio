# Deekshith M P &mdash; Portfolio Website

Professional Next.js (App Router, Server-Side Rendering) portfolio website configured for Netlify deployment. Strictly contains only the verified resume content with zero extra or dummy data, custom monogram "D" favicon, and strictly zero emojis.

---

## Technical Stack

- **Framework**: Next.js 14 (App Router, SSR)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React + custom inline SVGs (Strictly zero emojis)
- **Favicon**: Custom monogram "D" vector icon (`/favicon.svg`) and Next.js dynamic edge icon (`/icon`)
- **Hosting Target**: Netlify (`netlify.toml` preconfigured with `@netlify/plugin-nextjs`)

---

## Portfolio Content (Verbatim from Resume)

- **Name**: Deekshith M P
- **Contact**: `deekshithmp1ga22ai012@gmail.com` | `+91 8147101611` | `LINKEDIN`
- **EDUCATION**:
  - GLOBAL ACADEMY OF TECHNOLOGY (Nov 2022 - June 2026)
  - B.E | ARTIFICIAL INTELLIGENCE & MACHINE LEARNING | CGPA: 7.6 Bengaluru
- **SKILLS**:
  - Python, C, React.js, HTML, CSS, MySQL, MongoDB, Data Science, Machine Learning, LLM, NLP, Generative AI, n8n, Tableau, Power BI, Blockchain, MS Word, MS Excel, Google Sheets, make.com
- **EXPERIENCE**:
  - LEARNER’S BYTE - AI Intern (Jan 2026 – May 2026): Worked on Generative AI and Agentic AI-based solutions, developing AI-powered automation workflows using the n8n platform to streamline repetitive tasks. Contributed to intelligent workflow automation and AI-driven process optimization projects while integrating LLM-based capabilities into real-world development and automation applications.
- **PROJECTS**:
  1. SKIN DISEASE DETECTION - [AI, ML, CNN, TF-IDF vectorization]: Developed a web application to detect and classify skin diseases using deep learning and text-based feature extraction techniques.
  2. LLM GUARDRAILS - [Python, Hugging Face Transformers, BART MNLI, FastAPI, Streamlit, Groq API]: Developed a real-time AI safety layer for LLM applications to detect and block harmful instructions, self-harm content, & prompt injection attacks. Implemented zero-shot classification with BART MNLI and a confidence-based decision layer to balance safety and false positives, achieving approximately 300–500 ms P95 latency for CPU-based inference.
  3. VISTA - Visually Impaired Smart Tracking Assistant - [IoT, CNN, Yolov8, OCR, ML, AI features]: Built a system that prioritizes safety by providing voice-controlled scene description, automatic fall detection, and GPS-enabled emergency location alerts for immediate assistance.
  4. NLP CUSTOMER REVIEW ANALYTICS DASHBOARD - [NLTK, Scikit-Learn, spaCy, VADER, Plotly, WordCloud, Seaborn, Matplotlib, Altair, Streamlit, Custom CSS]: Developed an NLP-based dashboard to analyze e-commerce reviews using sentiment analysis & topic modelling. Built an interactive Streamlit dashboard with visualizations for sentiment trends, customer complaints, & keyword insights.
  5. TITANIC SURVIVAL PREDICTION – [Pandas, NumPy, Scikit-Learn, Random Forest, Preprocessing, Streamlit, Kafka, Docker]: Built an end-to end machine learning system that predicts whether a passenger survived the disaster by using historical data, ML models, interactive dashboards, and real-time streaming using Kafka.
  6. AI RECRUITMENT SYSTEM - [n8n, Grok API, Gmail API, Google Sheets, JavaScript]: Built an AI-driven recruitment platform that automates resume screening, candidate evaluation, & communication workflows. Integrated AI powered resume parsing, job-fit scoring, automated interview invitations, & candidate tracking to improve recruitment efficiency,
- **CERTIFICATIONS**:
  - Web Development (60 days training + 35 days of internship where I built an PG Life website for students to search and book PG accommodations across cities) from Internshala
  - PySpark from Infosys Springboard
  - Project Excellence: Mastering your minor and major Projects with Real-World Case Studies using Gen AI/Agentic AI/ML from EXCELR
  - LLM, NLP, AI and ML involving chatbot development, & Gradio based application Workshop- Mevi Technologies
  - TechA Cloud Computing using Microsoft Azure Certification from Infosys Springboard
- **LEADERSHIP EXPERIENCE**:
  - Sub-core Member VTU Youth Fest 2025 & Headed the AIML Department's Event Management Club

---

## Local Development & Build

```bash
# Start development server
npm run dev

# Production build and SSR start
npm run build
npm start
```

---

## Netlify Deployment

1. Push this repository to GitHub / GitLab / Bitbucket.
2. In Netlify, select **Import from Git** and choose this repository.
3. Build settings from `netlify.toml` are automatically detected:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
4. Click **Deploy Site**.
# My-Portfolio
