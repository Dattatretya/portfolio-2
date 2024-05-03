/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, html}"],
  theme: {
    extend: {
      animation: {
        type: 'type 2.7s ease-out .8s infinite alternate both',
      },
      keyframes: {
        type: {
          // '0%': { transform: 'translateX(3ch)' },
          // '5%, 10%': { transform: 'translateX(4ch)' },
          
          // '45%, 50%': { transform: 'translateX(5ch)' },
          
          // '85%, 90%': { transform: 'translateX(6ch)' },
          // '95%, 100%': { transform: 'translateX(7ch)' },
        },
      },


    },
  },
  plugins: [],
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  }
}

