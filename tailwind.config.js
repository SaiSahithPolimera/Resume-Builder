/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'custom': '4fr 10fr',
      },
      textColor: {
        'default': 'black'
      }
    },
  },
  plugins: [],
}