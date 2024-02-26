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
      heading1: '7.993rem',
      heading2: '5.653rem',
      heading3: '3.998rem',
      heading4: '2.827rem',
      heading5: '1.999rem',
      heading6: '1.414rem',
      para: '1rem',
      smallpara: '0.707rem',


    },


   

    backgroundImage: {
      'homelg': "url('/assets/figmapic.png')",

    },
    extend: {

    },
  },

  plugins: [],
}