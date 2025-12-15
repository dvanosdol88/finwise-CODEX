import type { Config } from "tailwindcss";
import { tokens } from "./src/styles/tokens";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: tokens.colors.brand,
        accent: tokens.colors.accent,
        danger: tokens.colors.danger,
        neutral: tokens.colors.neutral,
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightish: tokens.typography.trackingTightish,
      },
    },
  },
  plugins: [],
};

export default config;
