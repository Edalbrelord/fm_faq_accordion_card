module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          dark: 'hsl(237, 12%, 33%)',
          DEFAULT: '#c0ccda',
          light: 'hsl(240, 6%, 50%)',
        }
      },
      fontFamily: {
        'sans': ['Kumbh\ Sans', 'Arial', 'sans-serif'],
      },
      transitionProperty: {
        'height': 'height',
        'max-height': 'max-height'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
