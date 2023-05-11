/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      flexGrow: {
        2: '2',
        3: '3'
      },
      backgroundImage: {
        'usegptest': "url('../../public/usegptest_hero.png')",
        'nelogica': "url('../../public/nelogica_hero.png')",
        'eu': "url('../../public/eu.jpg')",
        'furg': "url('../../public/furg.jpg')",
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
