const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports =withMT ({
  content: [   "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        "light-blue" : "#ECF0F3",
        "hot-pink"   : "#FF014F",
        "mine-blue": "#4e54c8",
        "mini-blue": "#8f94fb",
      },
    },
  },
  plugins: [],
});

