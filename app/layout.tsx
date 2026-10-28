import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deekshith M P | AI & Machine Learning Engineer",
  description:
    "Portfolio of Deekshith M P, AI & Machine Learning Engineer specializing in Generative AI, Agentic Workflows, LLM Guardrails, and Distributed Real-Time Systems.",
  keywords: [
    "Deekshith M P",
    "Artificial Intelligence Engineer",
    "Machine Learning Engineer",
    "Generative AI",
    "Agentic AI",
    "LLM Guardrails",
    "BART MNLI",
    "FastAPI",
    "n8n Automation",
    "Global Academy of Technology",
    "Bengaluru",
  ],
  authors: [{ name: "Deekshith M P" }],
  creator: "Deekshith M P",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Deekshith M P | AI & Machine Learning Engineer",
    description:
      "AI & Machine Learning Engineer specializing in Generative AI, Agentic Workflows, and Production LLM Safety.",
    siteName: "Deekshith M P Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deekshith M P | AI & Machine Learning Engineer",
    description:
      "AI & Machine Learning Engineer specializing in Generative AI, Agentic Workflows, and Production LLM Safety.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-background text-slate-100 font-sans antialiased min-h-screen relative selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
