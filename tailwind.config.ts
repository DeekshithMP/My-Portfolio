import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#090d16",
        surface: {
          50: "#f8fafc",
          100: "#f1f5f9",
          800: "#111827",
          900: "#0b1120",
          950: "#070b14",
        },
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
        },
        accent: {
          cyan: "#06b6d4",
          teal: "#14b8a6",
          emerald: "#10b981",
        }
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      boxShadow: {
        "glow-indigo": "0 0 25px -5px rgba(99, 102, 241, 0.25)",
        "glow-cyan": "0 0 25px -5px rgba(6, 182, 212, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;

