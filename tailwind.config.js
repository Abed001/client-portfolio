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

      heading: '11.391rem',
      heading1: '5.61rem',
      heading2: '4.209rem',
      heading3: '3.157rem',
      heading4: '2.369rem',
      heading5: '1.777rem',
      heading6: '1.333rem',
      para: '1rem',
      smallpara: '0.75rem',


    },




    backgroundImage: {
      'homelg': "url('/assets/figmapic.png')",
      'qatalum': "url('/assets/qatalum/qatalum(11).webp')",
      'qub': "url('/assets/qup/qup(1).webp')",
      'mun': "url('/assets/mun/mun1.webp')",
      'quphb': "url('/assets/quphb/QUPBHUB2.webp')",
      'bmw': "url('/assets/bmw/BMWStand3.webp')",
      'boaw': "url('/assets/boaw/BOAW1.webp')",

      'blackcolor': "url('/assets/Black_colour.jpg')"


    },
    extend: {

    },
  },

  plugins: [],
}