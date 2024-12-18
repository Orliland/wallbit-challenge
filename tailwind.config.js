/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        light: "url('/light.webp')",
        dark: "url('/dark.webp')",
      },
    },
  },
  plugins: [],
};
