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
        'primary': '#8287ef',
        'secondary': '#b99ad6',
        'accent': '#9f3ff9',
        'bg-purple': '#f6f1ff',
        'bg-green': '#eafaf9',
        'bg-sand': '#f7f4f2',
        'border': '#cbcbcb',
      }
    },
  },
  plugins: [],
};