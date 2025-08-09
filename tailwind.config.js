/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'bounce-slow': 'bounce 3s infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 20px rgba(38, 232, 232, 0.3))' },
          '50%': { filter: 'drop-shadow(0 0 40px rgba(38, 232, 232, 0.6))' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(38, 232, 232, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(38, 232, 232, 0.6)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
      },
      colors: {
        'nscc': {
          50: '#e6fffe',
          100: '#b3fffd',
          200: '#80fffc',
          300: '#4dfffb',
          400: '#1afffa',
          500: '#00e6e6',
          600: '#00b3b3',
          700: '#008080',
          800: '#004d4d',
          900: '#001a1a',
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(38, 232, 232, 0.3)',
        'glow-lg': '0 0 40px rgba(38, 232, 232, 0.5)',
        'glow-xl': '0 0 60px rgba(38, 232, 232, 0.7)',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}