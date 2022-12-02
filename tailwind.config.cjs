/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      content:{
        'phone':'url(./assets/phone.svg)'
      },
      fontFamily: {
        'Orchidea': ['Orchidea'],
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        '@font-face': {
            fontFamily: 'Orchidea',
            fontWheight: '300',
            src: 'url(./assets/fonts/OrchideaPro-Light.woff)'
        }
      })
    }),
  ],
}
