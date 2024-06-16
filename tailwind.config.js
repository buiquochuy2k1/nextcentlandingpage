/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        newtralSilver: "#F5F7FA",
        newtralDGrey: "#4D4D4D",
        newtralBlack: "#263238",
        brandPrimary: "#4CAF4F",
        newtralGrey: "#717171",
        gray900: "#18191F",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
