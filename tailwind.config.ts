import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        softBlue: '#5468E7',
        softViolet: '#C897E4',
        darkBlue: '#232340',
        desaturatedBlue: '#7676B2',
        offWhite: '#F5F5F5',
        lightOrange: '#FFBA79',
      },
      boxShadow: {
        review: "0px 16px 24px 0px rgba(118, 118, 178, 0.24)"
      }
    },
  },
  plugins: [],
}
export default config
