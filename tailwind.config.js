/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,ts,tsx,jsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('tailwindcss-animate')]
}
