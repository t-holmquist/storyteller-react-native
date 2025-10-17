/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,tsx}',
    './app/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}'
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'primary': '#a855f7',
        'bg-purple': '#F5EFFF',
        'bg-green': '#eafaf9',
        'bg-sand': '#f7f4f2',
        'border': '#cbcbcb',
      }
    },
  },
  plugins: [],
};