/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a5688",
        secondary: "#b92a3b",
        "primary-light": "#3e6b6e",
      },
      fontFamily: {
        changa: ["Changa", "sans-serif"],
      },
    },
  },
  plugins: [],
};
