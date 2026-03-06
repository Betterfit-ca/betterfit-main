import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0d1117",
        surface: "#161b22",
        border: "#21262d",
        "text-primary": "#f0f6fc",
        "text-secondary": "#8b949e",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "mark-gradient": "linear-gradient(135deg, #9ca3af, #2b323d)",
      },
    },
  },
  plugins: [],
};
export default config;
