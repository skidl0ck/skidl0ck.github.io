import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-newsreader)", "Georgia", "serif"],
        body: ["var(--font-worksans)", "sans-serif"],
        mono: ["var(--font-plexmono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
