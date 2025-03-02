/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#143AA2",
        secondary: "#3E8DE3",
        background: {
          light: "#F5F5F5",
          dark: "#121212",
        },
        text: {
          light: "#121212",
          dark: "#F5F5F5",
        },
      },
      backgroundImage: {
        "procure-gradient": "linear-gradient(135deg, #143AA2 0%, #3E8DE3 100%)",
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
