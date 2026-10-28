export interface ProjectItem {
  title: string;
  stack: string[];
  description: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface EducationItem {
  institution: string;
  period: string;
  degree: string;
  cgpa: string;
  location: string;
}

export const portfolioData = {
  personal: {
    name: "Deekshith M P",
    email: "deekshithmp1ga22ai012@gmail.com",
    phone: "+91 8147101611",
    linkedin: "https://www.linkedin.com",
    location: "Bengaluru",
    resumeUrl: "/DEEKSHITH_M_P_Resume.pdf",
  },

  education: {
    institution: "GLOBAL ACADEMY OF TECHNOLOGY",
    period: "Nov 2022 - June 2026",
    degree: "B.E | ARTIFICIAL INTELLIGENCE & MACHINE LEARNING",
    cgpa: "7.6",
    location: "Bengaluru",
  } as EducationItem,

  skills: [
    "Python",
    "C",
    "React.js",
    "HTML",
    "CSS",
    "MySQL",
    "MongoDB",
    "Data Science",
    "Machine Learning",
    "LLM",
    "NLP",
    "Generative AI",
    "n8n",
    "Tableau",
    "Power BI",
    "Blockchain",
    "MS Word",
    "MS Excel",
    "Google Sheets",
    "make.com",
  ],

  experience: [
    {
      company: "LEARNER’S BYTE",
      role: "AI Intern",
      period: "Jan 2026 – May 2026",
      description:
        "Worked on Generative AI and Agentic AI-based solutions, developing AI-powered automation workflows using the n8n platform to streamline repetitive tasks. Contributed to intelligent workflow automation and AI-driven process optimization projects while integrating LLM-based capabilities into real-world development and automation applications.",
    },
  ] as ExperienceItem[],

  projects: [
    {
      title: "SKIN DISEASE DETECTION",
      stack: ["AI", "ML", "CNN", "TF-IDF vectorization"],
      description:
        "Developed a web application to detect and classify skin diseases using deep learning and text-based feature extraction techniques.",
    },
    {
      title: "LLM GUARDRAILS",
      stack: [
        "Python",
        "Hugging Face Transformers",
        "BART MNLI",
        "FastAPI",
        "Streamlit",
        "Groq API",
      ],
      description:
        "Developed a real-time AI safety layer for LLM applications to detect and block harmful instructions, self-harm content, & prompt injection attacks. Implemented zero-shot classification with BART MNLI and a confidence-based decision layer to balance safety and false positives, achieving approximately 300–500 ms P95 latency for CPU-based inference.",
    },
    {
      title: "VISTA - Visually Impaired Smart Tracking Assistant",
      stack: ["IoT", "CNN", "Yolov8", "OCR", "ML", "AI features"],
      description:
        "Built a system that prioritizes safety by providing voice-controlled scene description, automatic fall detection, and GPS-enabled emergency location alerts for immediate assistance.",
    },
    {
      title: "NLP CUSTOMER REVIEW ANALYTICS DASHBOARD",
      stack: [
        "NLTK",
        "Scikit-Learn",
        "spaCy",
        "VADER",
        "Plotly",
        "WordCloud",
        "Seaborn",
        "Matplotlib",
        "Altair",
        "Streamlit",
        "Custom CSS",
      ],
      description:
        "Developed an NLP-based dashboard to analyze e-commerce reviews using sentiment analysis & topic modelling. Built an interactive Streamlit dashboard with visualizations for sentiment trends, customer complaints, & keyword insights.",
    },
    {
      title: "TITANIC SURVIVAL PREDICTION",
      stack: [
        "Pandas",
        "NumPy",
        "Scikit-Learn",
        "Random Forest",
        "Preprocessing",
        "Streamlit",
        "Kafka",
        "Docker",
      ],
      description:
        "Built an end-to end machine learning system that predicts whether a passenger survived the disaster by using historical data, ML models, interactive dashboards, and real-time streaming using Kafka.",
    },
    {
      title: "AI RECRUITMENT SYSTEM",
      stack: ["n8n", "Grok API", "Gmail API", "Google Sheets", "JavaScript"],
      description:
        "Built an AI-driven recruitment platform that automates resume screening, candidate evaluation, & communication workflows. Integrated AI powered resume parsing, job-fit scoring, automated interview invitations, & candidate tracking to improve recruitment efficiency,",
    },
  ] as ProjectItem[],

  certifications: [
    "Web Development (60 days training + 35 days of internship where I built an PG Life website for students to search and book PG accommodations across cities) from Internshala",
    "PySpark from Infosys Springboard",
    "Project Excellence: Mastering your minor and major Projects with Real-World Case Studies using Gen AI/Agentic AI/ML from EXCELR",
    "LLM, NLP, AI and ML involving chatbot development, & Gradio based application Workshop- Mevi Technologies",
    "TechA Cloud Computing using Microsoft Azure Certification from Infosys Springboard",
  ],

  leadershipExperience:
    "Sub-core Member VTU Youth Fest 2025 & Headed the AIML Department's Event Management Club",
};
