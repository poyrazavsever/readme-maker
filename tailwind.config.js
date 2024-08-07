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
      transitionProperty: {
        'height': 'height'
      },
      keyframes : {
        card: {
          '0%' : {opacity:0},
          '100%': { opacity:1 }
        }
      },

      animation: {
        card : 'card .3s ease-in forwards'
      },
    },
  },
  plugins: [],
};
