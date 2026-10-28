import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deekshith M P | Portfolio",
  description:
    "Portfolio of Deekshith M P - B.E in Artificial Intelligence & Machine Learning, Global Academy of Technology, Bengaluru.",
  authors: [{ name: "Deekshith M P" }],
  creator: "Deekshith M P",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Deekshith M P | Portfolio",
    description:
      "Portfolio of Deekshith M P - B.E in Artificial Intelligence & Machine Learning, Global Academy of Technology, Bengaluru.",
    siteName: "Deekshith M P",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deekshith M P | Portfolio",
    description:
      "Portfolio of Deekshith M P - B.E in Artificial Intelligence & Machine Learning, Global Academy of Technology, Bengaluru.",
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
