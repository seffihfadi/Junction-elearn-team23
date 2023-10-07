/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        kbcyan: '#29CBF7', 
        kbcyana: '#1F86A2', 
        kbcyanb: '#1BAAD1',
        bgDarker: '#FBFBFB',
        veryLightBlue:'#F5FEFF',
      }
    },
  },
  plugins: [],
};
