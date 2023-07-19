/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './src/**/*.[tj]sx'],
  media: false,
  theme: {
    extend: {
      colors: {
        turquoise: '#4BC0C8',
        lightPurple: '#C779D0',
        fadeOrange: '#FEAC5E',
        background: '#E9E4E4',
      },
      fontFamily: {
        body: ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
