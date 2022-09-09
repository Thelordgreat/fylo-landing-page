/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{

      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',

    },
    
    extend: {
      colors:{
        veryDarkBlue: 'hsl(243, 87%, 12%)',
        desaturatedBlue: 'hsl(238, 22%, 44%)',
        moderateBlue: 'hsl(224, 93%, 58%)',
        moderateCyan: 'hsl(170, 45%, 43%)',
        lightGrayishBlue: 'hsl(240, 75%, 98%)',
        lightGray: 'hsl(0, 0%, 75%)',
      }
    },
  },
  plugins: [],
}
