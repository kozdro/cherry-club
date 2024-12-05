/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
      cherry: '#8B0000',
      gold: {
        DEFAULT: '#B39F6D',
        dark: '#C49E4D',
        champagne: '#F4E1D2'
      },
      gray: '#333333',
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
    },
  },  
  plugins: [],
  corePlugins: {
    container: false
  }
}

