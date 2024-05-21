/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, html}"],
  theme: {
    extend: {
      
      animation: {
        'infinite-scroll': 'infinite-scroll 20s infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: {  backgroundColor: 'black' },
          to: {  backgroundColor: '#500079' },
        }
      }                   
    },
  },
  plugins: [],
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  }
}

