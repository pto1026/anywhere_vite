const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        100: '#fef3db',
        200: '#fde8b8',
        300: '#fbdc94',
        400: '#fad171',
        500: '#f9c54d',
        600: '#c79e3e',
        700: '#95762e',
        800: '#644f1f',
        900: '#32270f'
      },
      secondary: '#faf7f0',
      black: '#000000',
      white: '#ffffff'
    },
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
