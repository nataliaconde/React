/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        toggleDark: "-3px 0 4px 0 rgba(255, 255, 255, 0.9), 0 4px 8px 0 rgba(255, 255, 255, 0.19)",
        toggleLight: "4px 0 6px 0 rgba(12, 74, 110, 0.9), 0 4px 8px 0 rgba(12, 74, 110, 0)",
        cvms2: "0 4px 8px 0 rgba(134, 25, 143, 0.5), 0 6px 20px 0 rgba(134, 25, 143, 0.19)",
      }
    },
  },
  plugins: [],
}
