/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-green': '#C1D37F',
        'custom-brown': '#664E4C',
        'custom-flax': '#E2D58B',
        'custom-peach': '#F9D4BB',
      },
    },
  },
  plugins: [],
  fontFamily: {
    sans: ['Inconsolata', 'monospace'],
  },
}
