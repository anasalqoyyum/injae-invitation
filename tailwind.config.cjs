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
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 500ms ease-in-out"
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
