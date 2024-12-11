/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // for root HTML files
    "./src/**/*.{html,js}" // for any HTML or JS files in the src folder
  ],
  theme: {
    extend: {
      colors:{
        bgColor:'#111827',
        bg2Color:'#374151',
        hoverColor:'#4b5563'
      }
    },
  },
  plugins: [],
}
