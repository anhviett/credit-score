/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'title': '#181818',
        'description': '#a0a5a8',
        'gray-1': '#ecf0f3',
        'primary': '#01AD52',
        'primary-hover': '#008346',
        'header': 'linear-gradient(90deg, #00B74F 0%, #017196 100%)'
      }
    },
  },
  plugins: [],
}

