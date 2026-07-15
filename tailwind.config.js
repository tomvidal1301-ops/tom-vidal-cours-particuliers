/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spindle: {
          '50': '#f1f6fd',
          '100': '#dfeafa',
          '200': '#c7dbf6',
          '300': '#afcef2',
          '400': '#73a6e7',
          '500': '#5387de',
          '600': '#3e6bd2',
          '700': '#3558c0',
          '800': '#30499d',
          '900': '#2c407c',
          '950': '#1f294c',
        },
        paprika: {
          '50': '#fff1f2',
          '100': '#ffe4e6',
          '200': '#fecdd3',
          '300': '#fda4af',
          '400': '#fb7185',
          '500': '#f43f5e',
          '600': '#e11d48',
          '700': '#be123c',
          '800': '#9f1239',
          '900': '#881337',
          '950': '#4c0519',
        }
      }
    },
  },
  plugins: [],
}