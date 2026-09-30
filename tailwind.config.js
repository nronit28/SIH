/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        page: '#F3E5CC',
        card: '#FBF4E6',
        'card-hover': '#FFFDF8',
        'text-dark': '#543B25',
        'text-secondary': '#78634B',
        'text-muted': '#968169',
        olive: {
          DEFAULT: '#4C5833',
          hover: '#3D4729',
          light: '#E6EBDD',
          dark: '#30391F',
        },
        gold: {
          DEFAULT: '#B59A70',
          dark: '#937951',
          light: '#DFCDB2',
          border: 'rgba(181, 154, 112, 0.45)',
        },
        terracotta: {
          DEFAULT: '#9A4E2B',
          light: '#F5EBE6',
          dark: '#7A3D22',
        },
        cream: '#FDFBF5',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        brush: ['"Alex Brush"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'heritage': '0 4px 20px -2px rgba(84, 59, 37, 0.08), 0 2px 6px -1px rgba(84, 59, 37, 0.04)',
        'heritage-lg': '0 10px 30px -4px rgba(84, 59, 37, 0.12), 0 4px 10px -2px rgba(84, 59, 37, 0.06)',
        'heritage-hover': '0 12px 32px -4px rgba(84, 59, 37, 0.16), 0 6px 12px -2px rgba(84, 59, 37, 0.08)',
      },
      maxWidth: {
        'desktop': '1200px',
      },
      borderRadius: {
        'heritage': '18px',
        'heritage-lg': '24px',
      },
      backgroundImage: {
        'parchment-pattern': "radial-gradient(#B59A70 0.75px, transparent 0.75px), radial-gradient(#B59A70 0.75px, #F3E5CC 0.75px)",
      },
    },
  },
  plugins: [],
}
