/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'textColor' : '#141414',
        'textBase' : '#3575E2'
      },
      fontFamily: {
        'poppins' : 'Poppins , sans-serif'
      }

    },
  },
  plugins: [require("daisyui")],
}