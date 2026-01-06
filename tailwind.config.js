/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        cursive: ['"Dancing Script"', 'cursive'], 
        libertinus: ['"Libertinus Mono"', 'monospace'],

      },

       boxShadow: {
        pinkGlow: '0 4px 30px rgba(236, 72, 153, 0.6)', 
        blueSoft: '0 8px 20px rgba(59, 130, 246, 0.4)', 
      },
    },
  },
  plugins: [],
}