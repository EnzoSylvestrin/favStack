/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.tsx', './app/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        title: 'Rubik_700Bold',
        body: 'Rubik_400Regular',
      },
      colors: {
        darkBg: '#1a1a1a',
        whiteBg: '#eeeded',
        darkText: '#eeeded',
        whiteText: '#1a1a1a',
        main: '#8a2be2',
        secondary: '#007fff',
      }
    },
  },
  plugins: [],
}
