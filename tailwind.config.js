/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7f6',
          100: '#ccefed',
          200: '#99dfdb',
          300: '#66cfc9',
          400: '#33bfb7',
          500: '#00afa5',
          600: '#00736D', /* Main teal color - associated with Islam */
          700: '#005c57',
          800: '#004642',
          900: '#00302d',
        },
        secondary: {
          50: '#fdf8ed',
          100: '#fbf1db',
          200: '#f7e3b7',
          300: '#f3d593',
          400: '#efc76f',
          500: '#ebb94b',
          600: '#8C5E2A', /* Gold/amber - represents prosperity */
          700: '#704b22',
          800: '#54381a',
          900: '#382511',
        },
        blue: {
          50: '#e9edf5',
          100: '#d3dbeb',
          200: '#a7b7d7',
          300: '#7b93c3',
          400: '#4f6faf',
          500: '#3d5a96',
          600: '#1D3557', /* Deep blue - represents trust */
          700: '#172a46',
          800: '#122034',
          900: '#0c1523',
        },
      },
      fontFamily: {
        sans: ['Noto Sans', 'Noto Sans Arabic', 'sans-serif'],
      },
      backgroundImage: {
        'geometric-pattern': "url('/src/assets/geometric-pattern.svg')",
      },
      borderRadius: {
        'mosque': '50% 50% 0 0 / 80% 80% 0 0',
      },
    },
  },
  plugins: [],
}
