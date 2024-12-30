/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui"

export default {
  content: ["./src/**/*.{html,vue,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["emerald"],
  },
}

