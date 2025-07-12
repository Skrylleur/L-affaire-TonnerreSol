/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'festival': '#dbc414',
      },
      fontFamily: {
        'comic': ['var(--font-bangers)', 'cursive'],
        'display': ['var(--font-bangers)', 'cursive'],
        'bangers': ['var(--font-bangers)', 'cursive'],
        'body': ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        'comic': '4px 4px 0px 0px rgba(0, 0, 0, 1)',
        'comic-lg': '6px 6px 0px 0px rgba(0, 0, 0, 1)',
        'comic-xl': '8px 8px 0px 0px rgba(0, 0, 0, 1)',
        'text-comic': '2px 2px 0px 0px rgba(0, 0, 0, 1)',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'bounce-in': 'bounceIn 0.8s ease-out forwards',
        'zoom-in': 'zoomIn 0.6s ease-out forwards',
        'float-slow': 'float 4s ease-in-out infinite',
        'bd-pulse': 'bdPulse 2s ease-in-out infinite',
        'gradient-flow': 'gradientFlow 8s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        bounceIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.3) translateY(50px)'
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.05) translateY(-10px)'
          },
          '70%': { 
            transform: 'scale(0.9) translateY(0)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1) translateY(0)'
          }
        },
        zoomIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.3)'
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.1)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)'
          },
          '50%': { 
            transform: 'translateY(-20px) rotate(5deg)'
          }
        },
        bdPulse: {
          '0%, 100%': { 
            transform: 'scale(1)'
          },
          '50%': { 
            transform: 'scale(1.05)'
          }
        },
        gradientFlow: {
          '0%, 100%': { 
            backgroundPosition: '0% 50%'
          },
          '50%': { 
            backgroundPosition: '100% 50%'
          }
        }
      },
      backgroundImage: {
        'comic-dots': 'radial-gradient(circle, #000 1px, transparent 1px)',
        'comic-diagonal': 'linear-gradient(45deg, #dbc414 25%, transparent 25%), linear-gradient(-45deg, #dbc414 25%, transparent 25%)',
      },
      backgroundSize: {
        'dots': '20px 20px',
        'diagonal': '40px 40px',
      },
    },
  },
  plugins: [],
}
