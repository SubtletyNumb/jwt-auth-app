/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'form-label': '0.78rem'
      },
      fontFamily: {
        'font-family-primary': 'Arial'
      },
      height: {
        'underline': '0.01rem'
      }
    },
  },
  plugins: [],
}

