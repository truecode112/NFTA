/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#000000'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

