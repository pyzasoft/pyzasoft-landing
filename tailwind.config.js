/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-900': '#1e3a8a',
        'blue-50': '#eff6ff',
        'orange-500': '#f97316',
        'orange-600': '#ea580c',
      },
    },
  },
  plugins: [],
} 