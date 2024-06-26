/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "docs/content/**/*.md",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          50: '#fffdea',
          100: '#fff6c5',
          200: '#ffed85',
          300: '#ffdd46',
          400: '#ffca1b',
          500: '#ffa800',
          600: '#e27f00',
          700: '#bb5802',
          800: '#984308',
          900: '#7c370b',
          950: '#481b00'
        },
      }
    }
  },
  plugins: [],
}

