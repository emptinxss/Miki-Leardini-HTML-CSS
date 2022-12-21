/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        burro: "#eceff1",
        scuro: "#263238",
        darkRed: "#B71C1C",
      },
      minHeight: {
        500: "500px",
        400: "400px",
      },
    },
  },
  plugins: [],
};
