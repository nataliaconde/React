/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        swirl: "url('/src/assets/images/VectorBlack.jpg')",
        swirlLight: "url('/src/assets/images/VectorLight.jpg')",
      },
      boxShadow: {
        fd: "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        fdDark: "0 4px 6px 0 rgba(254,243,199, 0.3), 0 4px 8px 0 rgba(254,243,199, 0.19)",
        toggleDark: "-3px 0 4px 0 rgba(255, 255, 255, 0.9), 0 4px 8px 0 rgba(255, 255, 255, 0.19)",
        toggleLight: "4px 0 6px 0 rgba(12, 74, 110, 0.9), 0 4px 8px 0 rgba(12, 74, 110, 0)",
      }
    },
  },
  plugins: [
    require("tailwindcss-capsize")({
      className: "leading-trim",
    }),
  ],
};
