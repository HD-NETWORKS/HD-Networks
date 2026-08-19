import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        signal: {
          blue: "#3E4095",
          "blue-dark": "#2C2D6B",
          red: "#ED3237",
        },
        ink: "#15162B",
        slate: {
          DEFAULT: "#8A8CA8",
        },
        paper: "#F7F7FB",
        line: "#E5E5F0",
      },
      fontFamily: {
        heading: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        card: "4px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "bar-scan": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 -160px" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "bar-scan": "bar-scan 6s linear infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
