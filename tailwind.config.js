/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        'h1': { fontSize: '2.25rem', fontWeight: '700' }, 
        'h2': { fontSize: '1.875rem', fontWeight: '600' }, 
        'h3': { fontSize: '1.5rem', fontWeight: '600' },   
        'h4': { fontSize: '1.25rem', fontWeight: '500' }, 
        'h5': { fontSize: '1.125rem', fontWeight: '500' },
        'h6': { fontSize: '1rem', fontWeight: '500' },    
      });
    })
  ],
};
