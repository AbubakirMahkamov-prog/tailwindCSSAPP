/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        userbg: '#F6F8FA',
        oneBlack: '#181F2A',
        oneGray: '#71757A',
        hoverBg: 'rgb(240,243,255)',
        grayR: '#88898D',
      }
    },
  },
  plugins: [],
}
