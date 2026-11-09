import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { navy: { DEFAULT: "#0b1f4b", 700: "#13306b", 50: "#eef2fa" }, gold: { DEFAULT: "#c9a227", 600: "#a8861c", 50: "#fbf6e5" } },
      fontFamily: { sans: ["var(--font-inter)", "sans-serif"], serif: ["var(--font-serif)", "serif"] },
      boxShadow: { card: "0 8px 30px rgba(11,31,75,0.08)" },
    },
  },
} satisfies Config;
