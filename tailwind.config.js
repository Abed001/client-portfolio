/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      openSans: 'Open Sans, sans-serif'

    },


    fontSize: {
      heading1: '5.61rem',
      heading2: '4.209rem',
      heading3: '3.157rem',
      heading4: '2.369rem',
      heading5: '1.777rem',
      para: '1rem',


    },


   

    backgroundImage: {
      'homelg': "url('/assets/figmapic.png')",

    },
    extend: {

    },
  },

  plugins: [],
}