/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        swirl: "url('/src/assets/images/VectorBlack.jpg')",
      },
    },
  },
  plugins: [
    require("tailwindcss-capsize")({
      className: "leading-trim",
    }),
  ],
};
