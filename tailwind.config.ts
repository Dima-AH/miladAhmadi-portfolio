import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deepGreen: {
          DEFAULT: "#023020",
          light: "#044d33",
          dark: "#011a11",
        },
        luxury: {
          bg: "#FAFAFA",
          darkBg: "#050505",
          text: "#1a1a1a",
          darkText: "#EAEAEA",
          muted: "#6b7280",
          darkMuted: "#9ca3af",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
