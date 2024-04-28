/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', './build/js/*.js'],
  theme: {
    extend: {},
  },
  plugins: ['prettier-plugin-tailwindcss', require('tailwindcss-animated')],
};

// npm i -D prettier-plugin-tailwindcss
