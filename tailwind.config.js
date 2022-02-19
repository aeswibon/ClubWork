module.exports = {
  mode:'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '10xl': '8rem',
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'abhaya-libre': ['Abhaya Libre'],
        'alegraya-sans': ['Alegreya Sans'],
      },
      letterSpacing: {
        widest: '.25em',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
        require('tailwind-scrollbar-hide')
  ],
}
