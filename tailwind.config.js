/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all relevant file extensions
  ],
  theme: {
    extend: {fontFamily: {
      sans: ['DM Sans', 'sans-serif'], // This sets DM Sans as the default sans-serif font
    },},
  },
  plugins: [],
}
