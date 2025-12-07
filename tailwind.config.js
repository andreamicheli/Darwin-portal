/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        darwin: {
          black: "#050505",
          dark: "#0a0a0a",
          gray: "#262626",
          light: "#e5e5e5",
          white: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
