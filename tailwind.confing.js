/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        lime: '#d1f542',
        sky: '#6ac9ff',
        brand: '#fa7228',
        track: '#c8c8c0',
        road: '#3a8a00',
        dark: '#0d0d0d',
      },
    },
  },
  plugins: [],
}
