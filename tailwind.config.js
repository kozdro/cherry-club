/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'app/storyblok/**/*.{vue,js}',
    'app/components/**/*.{vue,js}',
    'app/pages/**/*.vue',
    'app/layouts/**/*.vue',
  ],
  safelist: [
    {
      pattern: /bg-(transparent|black|white|grey|grey-dark|gold|gold-dark|gold-champagne)/,
    },
    {
      pattern: /text-(transparent|black|white|grey|grey-dark|gold|gold-dark|gold-champagne)/,
    },
  ],
  theme: {
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
      grey: {
        DEFAULT: '#D1D1D1',
        dark: '#1E1E1E',
      },
      gold: {
        DEFAULT: '#B39F6D',
        dark: '#8B7C5A',
        champagne: '#F4E3C7',
      },
      error: {
        DEFAULT: '#D95C5C',
        dark: '#B04040',
      }
    },
    screens: {
      sm: '340px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    fontFamily: {
      serif: ['Playfair Display', 'serif'],
      sans: ['Poppins', 'sans-serif'],
    },
    extend: { 
      sizing: {
        grid: {
          container: '90rem',
        },
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
    container: false,
  },
}

