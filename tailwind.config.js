/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.tsx', './app/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        title: 'Rubik_700Bold',
        body: 'Rubik_400Regular',
      },
    },
  },
  plugins: [],
}
