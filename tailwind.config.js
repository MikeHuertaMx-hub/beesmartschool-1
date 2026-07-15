/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#16233D',
        paper: '#FBF9F2',
        navy: {
          DEFAULT: '#1B3F7A',
          deep: '#0F2850',
          mid: '#2B5BA8',
          light: '#E8EEF8',
        },
        honey: {
          DEFAULT: '#F5C800',
          hover: '#E0B600',
          light: '#FFF4C2',
        },
      },
      fontFamily: {
        display: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        hexgrid:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52' viewBox='0 0 60 52'%3E%3Cpolygon points='30,2 58,17 58,37 30,52 2,37 2,17' fill='none' stroke='%23ffffff' stroke-width='1.5' opacity='0.14'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
