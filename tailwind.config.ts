import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#ededed",
        primary: {
          DEFAULT: "#3b82f6",
          dark: "#1d4ed8",
        },
        surface: "#111111",
      },
    },
  },
  plugins: [],
};
export default config;