/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#002366",
      },
      fontFamily: {
        kalnia: ["Kalnia", "sans-serif"],
      },
    },
  },
  plugins: [],
};
