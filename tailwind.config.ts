import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        fundo: "rgba(41, 46, 42, 0.51)",
        primary: "#993349",
      },
      fontFamily: {
        autograph: ['Autography', 'sans-serif']
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}
export default config
