/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy':           '#edad4d',
        'navy-dark':      '#d4943a',
        'festival':       '#1f4074',
        'festival-dark':  '#163058',
        'cream':          '#F8F5EF',
      },
      fontFamily: {
        'bangers': ['var(--font-bangers)', 'cursive'],
        'body':    ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        'card':    '0 4px 16px 0 rgba(31,64,116,0.10)',
        'card-lg': '0 8px 32px 0 rgba(31,64,116,0.15)',
        'card-xl': '0 16px 48px 0 rgba(31,64,116,0.18)',
      },
      animation: {
        'bounce-in': 'bounceIn 0.7s ease-out forwards',
        'fade-up':   'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        bounceIn: {
          '0%':   { opacity: '0', transform: 'scale(0.4) translateY(40px)' },
          '55%':  { opacity: '1', transform: 'scale(1.06) translateY(-8px)' },
          '75%':  { transform: 'scale(0.95) translateY(0)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
