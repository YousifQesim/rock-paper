/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    
    extend: {
      borderWidth: {
      
        '12': '12px',
        '16': '16px',
        '14': '14px',
      },
      screens: {
        'sm': '375px', // Mobile
        'lg': '1366px', // Desktop
      },
      colors: {
      
          scissors: '#ECA922',
          paper:'#4865F4',
          rock: '#DD405D',
          lizard: '#8C5DE5',
          cyan: '#52BED1',
          score:'#3e52a3',
          scoreText: '#2a46c0',
        // neutral: {
        //   darkText: '#3b4363',
        //   
        //   headerOutline: '#606e85',
        // },
        // background: {
        //   radialGradient: ['hsl(214, 47%, 23%)', 'hsl(237, 49%, 15%)'],
        // },
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
