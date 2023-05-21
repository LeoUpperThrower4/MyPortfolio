/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      flexGrow: {
        2: '2',
        3: '3'
      },
    }
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
}
