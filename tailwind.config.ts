import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
  theme: {
    extend: {
      screens: {
        '3xl': '1800px',
      },
      fontFamily: {
        Eczar: ["Eczar", "serif"],
        work_sans: ["Work Sans", "sans-serif"]
       },
    },
  },
  plugins: [],
}

