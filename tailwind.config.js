/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'sm': '375px', // Mobile
        'lg': '1366px', // Desktop
      },
      colors: {
        primary: {
          scissors: ['hsl(39, 89%, 49%)', 'hsl(40, 84%, 53%)'],
          paper: ['hsl(230, 89%, 62%)', 'hsl(230, 89%, 65%)'],
          rock: ['hsl(349, 71%, 52%)', 'hsl(349, 70%, 56%)'],
          lizard: ['hsl(261, 73%, 60%)', 'hsl(261, 72%, 63%)'],
          cyan: ['hsl(189, 59%, 53%)', 'hsl(189, 58%, 57%)'],
          score:'#3e52a3'
        },
        neutral: {
          darkText: '#3b4363',
          scoreText: '#2a46c0',
          headerOutline: '#606e85',
        },
        background: {
          radialGradient: ['hsl(214, 47%, 23%)', 'hsl(237, 49%, 15%)'],
        },
      },
      fontFamily: {
        rockFamily: 'sans-serif',
      },
      fontWeight: {
        '600': 600,
        '700': 700,
      },
    },
  },
  plugins: [],
}
