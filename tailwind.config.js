/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  safelist: [
    {
      pattern: /bg-(transparent|black|white|cherry|champagne|gold|gold-dark|grey|grey-pearl)/,
    },
    {
      pattern: /text-(transparent|black|white|cherry|champagne|gold|gold-dark|grey|grey-pearl)/,
    },
  ],
  theme: {
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
      cherry: '#8B0000',
      champagne: {
        DEFAULT: '#F4E1C1',
      },
      gold: {
        DEFAULT: '#B39F6D',
        dark: '#C49E4D',
      },
      grey: {
        DEFAULT: '#D3D3D3',
        pearl: '#A9A9A9',
      },
      'neon-blue': '#00BFFF'
    },
    screens: {
      sm: '340px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px'
    },
    fontFamily: {
      heading: ['Lora', 'serif'],
      body: ['Montserrat', 'sans-serif']
    },
    extend: { 
      sizing: {
        grid: {
          container: '90rem'
        }
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(300%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideUp: 'slideUp 0.6s ease-out',
      },
    },
  },  
  plugins: [],
  corePlugins: {
    container: false
  }
}

