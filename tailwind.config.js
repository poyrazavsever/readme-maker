/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '948px',
      xl: '1148px',

    },
    extend: {
      colors: {
        'primary': "#EEEEEE",
        'secondary': "#76ABAE",
        'tert': "#31363F",
        'fourth': "#222831",
      },
      screens: {
        "mobile": {
          "max": "623px",
          "min": "0px"
        },
        "desktop": {
          "min": "624px"
        }
      },
      transitionProperty: {
        'height': 'height'
      },
      keyframes: {
        card: {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        }
      },

      animation: {
        card: 'card .2s ease-in forwards'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/typography'),
  ],
};