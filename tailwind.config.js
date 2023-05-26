/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './<custom directory>/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        title: 'Rubik_700Bold',
        body: 'Rubik_400Regular',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
