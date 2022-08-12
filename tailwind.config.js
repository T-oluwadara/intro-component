/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        red: 'hsl(0, 100%, 74%)',
        green: 'hsl(154, 59%, 51%)',
        lightGreen: 'hsl(154, 76%, 70%)',
        blue: 'hsl(248, 32%, 49%)',
        darkBlue: 'hsl(249, 10%, 26%)',
        grayishBlue: 'hsl(246, 25%, 77%)'
      }
    },
  },
  plugins: [],
}
