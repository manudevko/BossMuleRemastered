/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#262b36',
      },
      fontSize: {
        xsm: '0.6rem',
      },
    },
  },
  plugins: [],
};
