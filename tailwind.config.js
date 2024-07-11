// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(14, 33, 73, 1)",
        secondary: "rgba(213, 175, 134, 1)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
        },
        screens: {
          lg: "1240px",
        },
      },
    },
  },
  plugins: [],
};
