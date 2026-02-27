import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        nordic: {
          white: "#FFFFFF",
          offwhite: "#F7F7F5",
          gray: "#EAEAEA",
          charcoal: "#2E2E2E",
          beige: "#D6CEC3"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "ui-serif", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(46, 46, 46, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
