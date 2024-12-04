/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6500",
        "dark-blue": "#1E3E62",
        "darker-blue": "#0B192C",
        "snow-white": "#fffafa",
      },
      padding: {
        "section-padding": "8rem",
      },
    },
  },
  plugins: [],
};
