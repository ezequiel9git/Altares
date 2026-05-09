/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cinzel"', 'serif'],
        body: ['"Crimson Text"', 'serif'],
      },
      colors: {
        parchment: '#f5e6c8',
        ember: '#ff6b2b',
        flame: '#ffaa00',
        ash: '#1a1510',
        stone: '#2d2820',
        smoke: '#3d3830',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1', transform: 'scaleY(1) skewX(0deg)' },
          '25%': { opacity: '0.85', transform: 'scaleY(0.97) skewX(1deg)' },
          '50%': { opacity: '0.95', transform: 'scaleY(1.02) skewX(-1deg)' },
          '75%': { opacity: '0.88', transform: 'scaleY(0.98) skewX(0.5deg)' },
        },
        flicker2: {
          '0%, 100%': { opacity: '0.9', transform: 'scaleY(1) skewX(0deg)' },
          '20%': { opacity: '1', transform: 'scaleY(1.03) skewX(-1deg)' },
          '60%': { opacity: '0.8', transform: 'scaleY(0.95) skewX(1.5deg)' },
          '80%': { opacity: '0.95', transform: 'scaleY(1.01) skewX(-0.5deg)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 12px 4px rgba(255,170,0,0.5), 0 0 30px 10px rgba(255,107,43,0.25)' },
          '50%': { boxShadow: '0 0 18px 7px rgba(255,170,0,0.65), 0 0 45px 15px rgba(255,107,43,0.35)' },
        },
        glowOff: {
          '0%, 100%': { boxShadow: '0 0 2px 1px rgba(100,80,50,0.15)' },
          '50%': { boxShadow: '0 0 4px 2px rgba(100,80,50,0.2)' },
        },
        winPulse: {
          '0%, 100%': { textShadow: '0 0 20px rgba(255,170,0,0.8)' },
          '50%': { textShadow: '0 0 40px rgba(255,170,0,1), 0 0 80px rgba(255,107,43,0.6)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        smokeDrift: {
          '0%': { opacity: '0.4', transform: 'translateY(0) scaleX(1)' },
          '100%': { opacity: '0', transform: 'translateY(-20px) scaleX(1.5)' },
        },
      },
      animation: {
        flicker: 'flicker 1.5s ease-in-out infinite',
        flicker2: 'flicker2 2.1s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        glowOff: 'glowOff 3s ease-in-out infinite',
        winPulse: 'winPulse 1.5s ease-in-out infinite',
        fadeIn: 'fadeIn 0.4s ease-out',
        smokeDrift: 'smokeDrift 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
