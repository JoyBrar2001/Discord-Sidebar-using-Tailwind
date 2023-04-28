const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */

export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      primary: '#202225',
      secondary: '#5865f2',
      gray: colors.trueGray,
      gray:{
        900: '#202225',
        800: '#2f3136',
        700: '#36393f',
        600: '#4f545c',
        500: '#d4d7dc',
        400: '#e3e5e8',
        300: '#ebedef',
        200: '#ebedef',
        100: '#f2f3f5',
      },
    },
  },
  plugins: [],
}

