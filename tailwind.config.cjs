/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        'satin-100': '#404040',
        'satin-900': '#A87000'
      },
      boxShadow: {
        'satin-xl': '0px 10px 50px -5px rgba(0, 0, 0, 0.26)'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
