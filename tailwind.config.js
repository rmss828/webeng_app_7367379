/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1b1b1e",
        secondary: "#ff5db2",
        tertiary: "#ffdb99",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "640px",
      sm: "768px",
      md: "1080px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

