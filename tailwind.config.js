/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        min320: { min: "320px" },
        max320: { max: "320px" },
        max768: { max: "768px" },
        ...require("tailwindcss/defaultTheme").screens,
      }
    },
  },
  plugins: [],
}