import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        autograph: ['Autography', 'sans-serif']
      },
      colors: {
        primary: "#993349",
        secondary: "rgba(41, 46, 42, 0.51)"
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}
export default config
