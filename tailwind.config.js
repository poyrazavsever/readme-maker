/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
    },
    extend: {
      screens : {
        "mobile" : {"max" : "623px", "min" : "0px"},
        "desktop" : {"min": "624px"}
      },
    },
  },
  plugins: [],
};
