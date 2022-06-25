module.exports = {
 content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
 theme: {
  extend: {
   colors: {
    'dark-blue': '#24285b',
    'sea-blue': '#68e1fb',
   },
   backgroundImage: {
    landingBgImage: "url('./assets/images/Wave-Line.svg')",
   },
  },
 },
 plugins: [],
}
