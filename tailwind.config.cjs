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
          color6: '#8FD2FE',
        },
      },
      fontFamily: {
        font1: ['Cherry Swash', 'cursive'],
        font2: ['Lobster', 'cursive'] 
      }
    },
  },
  plugins: [],
}