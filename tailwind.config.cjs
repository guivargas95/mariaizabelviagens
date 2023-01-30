/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*/*.tsx",
    "./src/components/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        my: {
          color1: '#60A5FA',
          color2: '#2F7FE0',
          color3: '#2462AD',
          color4: '#143761',
          color5: '#314761',
        },
      },
      fontFamily: {
        padrao: ['Ibarra Real Nova', 'serif'],
        logo: ['Caveat', 'cursive'],
        logo2: ['Pacifico', 'cursive']
      }
    },
  },
  plugins: [],
}