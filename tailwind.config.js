// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],

  theme: {
    extend: {
      fontFamily: {
        marvel: ['"Marvel"', "sans-serif"],
      },
      scrollBehavior: {
        smooth: "smooth",
      },
    },
  },
  plugins: [],
};
