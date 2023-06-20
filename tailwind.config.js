/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./incex.html", "./src/**/*.{vue,html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#00668A",
        "weather-secondary": "#004E71",
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: "true",
    },
    screens: {
      sm: "640px",
      md: "766px",
    },
  },
  plugins: [],
};
