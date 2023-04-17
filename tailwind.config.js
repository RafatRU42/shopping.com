/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        green:'#00DDB3'
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ['light'],
  },
}