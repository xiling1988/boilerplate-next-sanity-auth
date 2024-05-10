/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultConfig'

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        nexusBlue: '#0b4498',
        nexusRed: '#a91cda',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
    },
  },

  plugins: [],
}
