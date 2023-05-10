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
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
}
