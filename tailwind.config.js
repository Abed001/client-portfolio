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
      'investbg': "url('/assets/invest_qatar/200_Camera_2.png')",
      'kioskbg': "url('/assets/neon_kiosk/firstneo.webp')",
      'expobg': "url('/assets/qatar_expo/firstexpo.jpg')",
      'qndbg': "url('/assets/qatar_national_day/amphi-1.jpg')",
      'blackcolor': "url('/assets/Black_colour.jpg')",
     
     

    },
    extend: {

    },
  },

  plugins: [],
}