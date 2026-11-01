/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#FF1738',
          'red-glow': 'rgba(255, 23, 56, 0.45)',
          deep: '#05070B',
          charcoal: '#0B0D12',
          card: '#0E1117',
          'card-hover': '#141822',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-red': 'rgba(255, 23, 56, 0.35)',
          'border-blue': 'rgba(0, 229, 255, 0.35)',
          blue: '#00E5FF',
          'blue-electric': '#0066FF',
          'blue-glow': 'rgba(0, 229, 255, 0.4)',
          gray: '#A1A1AA',
          lightgray: '#D4D4D8'
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Outfit', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Syne"', '"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(255, 23, 56, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 28px rgba(0, 229, 255, 0.6))' }
        }
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}

