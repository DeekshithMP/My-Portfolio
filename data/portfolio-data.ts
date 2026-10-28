export interface Project {
  title: string;
  category: "Generative AI & LLMs" | "Computer Vision & IoT" | "Intelligent Automation" | "Machine Learning & Analytics";
  technologies: string[];
  description: string;
  highlights: string[];
  metrics?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  cgpa: string;
  courseworkNotes?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  details?: string;
  category: "Web & Full-Stack" | "Big Data & Cloud" | "Generative AI & LLMs";
}

export interface Leadership {
  role: string;
  organization: string;
  scope: string;
}

export const portfolioData = {
  personal: {
    name: "Deekshith M P",
    title: "AI & Machine Learning Engineer",
    tagline: "Specializing in Generative AI, Agentic Workflows, and Production LLM Safety",
    summary:
      "Artificial Intelligence & Machine Learning undergraduate with hands-on experience in building LLM guardrails, agentic automation systems, computer vision architectures, and real-time analytical streaming pipelines. Proven track record in rapid prototyping, low-latency inference optimization, and integrating state-of-the-art AI systems into scalable production environments.",
    email: "deekshithmp1ga22ai012@gmail.com",
    phone: "+91 8147101611",
    linkedin: "https://www.linkedin.com/in/deekshithmp",
    location: "Bengaluru, India",
    availability: "Available for Full-time Roles & Internships",
    resumeUrl: "/DEEKSHITH_M_P_Resume.pdf",
  },

  skills: {
    categories: [
      {
        name: "Artificial Intelligence & LLMs",
        skills: [
          "LLM",
          "Generative AI",
          "NLP",
          "Machine Learning",
          "Data Science",
          "Agentic AI",
          "BART MNLI",
          "Hugging Face Transformers",
          "Groq API",
        ],
      },
      {
        name: "Automation & Orchestration",
        skills: ["n8n", "make.com", "Workflow Automation", "API Integration", "Process Optimization"],
      },
      {
        name: "Computer Vision & Deep Learning",
        skills: ["CNN", "YOLOv8", "OCR", "TF-IDF Vectorization", "Image Classification"],
      },
      {
        name: "Languages & Frameworks",
        skills: ["Python", "C", "JavaScript", "React.js", "FastAPI", "Streamlit", "HTML", "CSS"],
      },
      {
        name: "Data Engineering & Analytics",
        skills: [
          "MySQL",
          "MongoDB",
          "Kafka",
          "Docker",
          "PySpark",
          "Tableau",
          "Power BI",
          "Scikit-Learn",
          "Pandas",
          "NumPy",
        ],
      },
      {
        name: "Productivity & Distributed Tech",
        skills: ["Blockchain", "Google Sheets", "MS Excel", "MS Word", "Microsoft Azure"],
      },
    ],
    flatList: [
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
  },

  experience: [
    {
      role: "AI Intern",
      company: "LEARNER'S BYTE",
      period: "Jan 2026 – May 2026",
      summary:
        "Engineered enterprise-grade Generative AI and Agentic AI-driven automation workflows, optimizing mission-critical business processes and LLM applications.",
      responsibilities: [
        "Architected and deployed AI-powered automation workflows leveraging the n8n orchestrator to eliminate repetitive operational procedures.",
        "Integrated Large Language Models (LLMs) with multi-step validation logic for automated information synthesis and context processing.",
        "Collaborated on intelligent workflow automation and AI-driven process optimization projects translating cutting-edge models into production tools.",
        "Ensured rigorous reliability and fault tolerance across asynchronous agentic execution nodes.",
      ],
      technologies: ["n8n", "Generative AI", "Agentic AI", "LLM Integration", "Workflow Automation", "API Orchestration"],
    },
  ] as Experience[],

  projects: [
    {
      title: "LLM Guardrails",
      category: "Generative AI & LLMs",
      technologies: ["Python", "Hugging Face Transformers", "BART MNLI", "FastAPI", "Streamlit", "Groq API"],
      description:
        "Developed a real-time AI safety layer for LLM applications to detect and block harmful instructions, self-harm content, and prompt injection attacks.",
      highlights: [
        "Implemented zero-shot classification pipeline using BART MNLI to identify malicious prompts in real time.",
        "Built a confidence-based decision engine balancing defensive safety posture with low false-positive rates.",
        "Achieved 300–500 ms P95 latency for CPU-based inference, making it production-viable without requiring dedicated GPU infrastructure.",
        "Integrated dual interfaces: a high-throughput FastAPI microservice and an interactive Streamlit testing dashboard.",
      ],
      metrics: "P95 Latency 300–500ms on CPU",
    },
    {
      title: "VISTA - Visually Impaired Smart Tracking Assistant",
      category: "Computer Vision & IoT",
      technologies: ["IoT", "CNN", "YOLOv8", "OCR", "Machine Learning", "Computer Vision"],
      description:
        "Built an assistive smart tracking system that prioritizes personal safety by providing voice-controlled scene description, automatic fall detection, and GPS-enabled emergency location alerts.",
      highlights: [
        "Integrated real-time object detection and spatial understanding using YOLOv8 models.",
        "Engineered optical character recognition (OCR) and scene narration for instant auditory feedback.",
        "Developed automated fall-detection routines with IoT sensor integration for instant emergency triggering.",
        "Equipped with GPS-enabled emergency broadcast dispatching immediate coordinates during incident detection.",
      ],
      metrics: "Real-time Auditory Feedback & GPS Incident Dispatch",
    },
    {
      title: "AI Recruitment System",
      category: "Intelligent Automation",
      technologies: ["n8n", "Grok API", "Gmail API", "Google Sheets", "JavaScript"],
      description:
        "Built an AI-driven recruitment platform that automates resume screening, candidate evaluation, and multi-channel communication workflows.",
      highlights: [
        "Engineered intelligent resume parsing and structured information extraction pipeline via Grok API.",
        "Constructed automated job-fit scoring algorithms based on customized rubric criteria.",
        "Integrated Gmail API for dynamic, personalized candidate invitation generation and interview scheduling.",
        "Connected centralized Google Sheets tracking database with n8n webhooks to maximize talent acquisition operational throughput.",
      ],
      metrics: "End-to-End Automated Screening & Candidate Scheduling",
    },
    {
      title: "NLP Customer Review Analytics Dashboard",
      category: "Machine Learning & Analytics",
      technologies: [
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
        "Developed an NLP-based dashboard to analyze e-commerce customer reviews using advanced sentiment analysis and topic modeling techniques.",
      highlights: [
        "Extracted sentiment polarity and nuanced subjectivity scores using VADER and NLTK semantic algorithms.",
        "Implemented unsupervised topic modeling to isolate recurring customer pain points and product trends.",
        "Constructed an interactive Streamlit web dashboard featuring dynamic visual analytics via Plotly and Altair.",
        "Designed bespoke reporting views for executive-level keyword insights and automated review summaries.",
      ],
      metrics: "Multi-model Topic & Sentiment Extraction",
    },
    {
      title: "Titanic Survival Prediction",
      category: "Machine Learning & Analytics",
      technologies: [
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
        "Built an end-to-end machine learning system that predicts passenger survival using historical data, ensemble ML models, interactive dashboards, and real-time streaming using Apache Kafka.",
      highlights: [
        "Trained and fine-tuned Random Forest ensemble classifiers on multi-variate demographic and voyage features.",
        "Containerized the entire deployment stack using Docker for deterministic runtime portability.",
        "Integrated Apache Kafka message queues for high-concurrency real-time prediction streaming.",
        "Built responsive Streamlit monitoring dashboard showcasing live inference streams and feature importance breakdowns.",
      ],
      metrics: "Kafka-Streamed Real-Time Model Inference",
    },
    {
      title: "Skin Disease Detection",
      category: "Computer Vision & IoT",
      technologies: ["AI", "Machine Learning", "CNN", "TF-IDF Vectorization", "Deep Learning"],
      description:
        "Developed a web application to detect and classify skin diseases using deep learning convolutional neural networks and text-based feature extraction techniques.",
      highlights: [
        "Trained Convolutional Neural Networks (CNNs) for dermatological lesion pattern identification.",
        "Employed TF-IDF vectorization to correlate textual symptom descriptions with visual diagnostic features.",
        "Packaged the inference engine into a responsive web interface for convenient symptom evaluation.",
      ],
      metrics: "Hybrid Vision & Symptom Text Classification",
    },
  ] as Project[],

  education: [
    {
      institution: "Global Academy of Technology",
      degree: "B.E. in Artificial Intelligence & Machine Learning",
      period: "Nov 2022 - June 2026",
      location: "Bengaluru, India",
      cgpa: "7.6",
      courseworkNotes:
        "Core focus on Artificial Intelligence, Machine Learning algorithms, Deep Learning, Natural Language Processing, Data Structures, Distributed Computing, and Database Systems.",
    },
  ] as Education[],

  certifications: [
    {
      title: "Web Development Certification & Internship",
      issuer: "Internshala",
      category: "Web & Full-Stack",
      details:
        "60 days intensive training + 35 days internship: Architected and built 'PG Life', a full-featured web portal enabling university students to search, filter, and book PG accommodations across major Indian cities.",
    },
    {
      title: "PySpark Certification",
      issuer: "Infosys Springboard",
      category: "Big Data & Cloud",
      details:
        "Mastery of PySpark for distributed data processing, resilient distributed datasets (RDDs), Spark DataFrames, and large-scale analytical transformations.",
    },
    {
      title: "Project Excellence: Minor & Major Projects with Real-World Case Studies",
      issuer: "EXCELR",
      category: "Generative AI & LLMs",
      details:
        "Advanced hands-on program focusing on production Gen AI, Agentic AI, and Machine Learning deployment architectures.",
    },
    {
      title: "LLM, NLP, AI & ML Chatbot & Gradio Application Workshop",
      issuer: "Mevi Technologies",
      category: "Generative AI & LLMs",
      details:
        "Specialized workshop covering conversational agent development, context management, prompt engineering, and Gradio interface engineering.",
    },
    {
      title: "TechA Cloud Computing using Microsoft Azure Certification",
      issuer: "Infosys Springboard",
      category: "Big Data & Cloud",
      details:
        "Foundational and architectural training in Microsoft Azure cloud infrastructure, resource provisioning, virtual machines, and cloud-native services.",
    },
  ] as Certification[],

  leadership: [
    {
      role: "Sub-core Member",
      organization: "VTU Youth Fest 2025",
      scope:
        "Contributed to university-wide festival planning, inter-collegiate coordination, technical operations, and logistics execution across competitive tracks.",
    },
    {
      role: "Head of Event Management Club",
      organization: "AIML Department, Global Academy of Technology",
      scope:
        "Spearheaded departmental technical symposiums, hackathons, guest lectures, and student AI workshops, managing cross-functional student teams.",
    },
  ] as Leadership[],
};
