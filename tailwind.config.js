/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f4b400',
        'primary-hover': '#ffd54f',
        secondary: '#0f172a',
        light: '#f8f6ef',
        muted: '#64748b',
      },
      fontFamily: {
        display: ['Oxanium', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
