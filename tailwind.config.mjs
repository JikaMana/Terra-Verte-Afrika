/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F5DC',
        'cream-light': '#FFFFF0',
        'cream-dark': '#E8E6D1',
        green: {
          light: '#8FBC8F',
          DEFAULT: '#2E8B57',
          dark: '#006400'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}