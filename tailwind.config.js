/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },

      boxShadow: {
        "main-shadow": "0px 2px 4px rgba(0, 0, 0, 0.0562443)",
        "border-shadow": "0px 0px 4px 1px rgba(0, 0, 0, 0.104931)",
      },

      colors: {
        "main-black": "#2B3844",
        "main-dark": "#2B3844"
      },

      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))",
      },

      screens: {
        sx: "360px",
        ss: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
