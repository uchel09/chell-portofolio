/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primary:"Monserrat",
        secondary:"Orbitron"
      },
      colors:{
        primary: "#b809c3",
        secondary: "#ff014f",
        third: "#fef6c7",
        fourth: "#011eff",
      }
    },
  },
  plugins: [],
}