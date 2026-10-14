/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./lib/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // light mode
        paper: "#FAFAF9",
        ink: "#0A0A0B",
        muted: "#6B6B70",
        surface: "#FFFFFF",

        // dark mode
        void: "#0A0A0B",
        chalk: "#F5F5F4",
        mutedDark: "#9C9CA3",
        surfaceDark: "#131315",
        surfaceDarkHover: "#1A1A1D",

        // the one accent
        accent: "#4C6FFF",

        // reserved for data viz only — never brand UI
        dataGreen: "#3FBF7F",
      },

      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },

      // ---- container widths ----
      maxWidth: {
        content: "1280px", // standard section width
        prose: "680px", // reading-width copy
        wide: "1600px", // ultra-wide ceiling, prevents infinite stretch
      },

      // ---- radius scale (used consistently, never mixed ad hoc) ----
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "20px",
      },

      // ---- shadow scale — soft and restrained, no heavy drop shadows ----
      boxShadow: {
        subtle: "0 1px 2px rgba(10,10,11,0.04)",
        card: "0 12px 32px -16px rgba(10,10,11,0.12)",
        cardDark: "0 12px 32px -16px rgba(0,0,0,0.5)",
        elevated: "0 20px 60px -20px rgba(10,10,11,0.15)",
        elevatedDark: "0 20px 60px -20px rgba(0,0,0,0.55)",
      },

      // ---- animation tokens — shared easing/durations for CSS fallbacks
      // (Framer Motion components use the matching values from lib/motion.js) ----
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        250: "250ms",
        400: "400ms",
        600: "600ms",
      },

      // ---- consistent vertical rhythm for sections ----
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        34: "8.5rem",
      },
    },
  },
  plugins: [],
};
