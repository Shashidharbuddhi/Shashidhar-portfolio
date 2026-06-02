/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0b1220',
          800: '#101a2e',
          700: '#14233d',
        },
        silver: {
          50: '#f8fafc',
          200: '#cbd5f5',
          300: '#b6c2e8',
          500: '#93a4c8',
        },
        glass: 'rgba(255, 255, 255, 0.06)',
      },
      boxShadow: {
        glow: '0 0 35px rgba(148, 163, 184, 0.35)',
        card: '0 30px 60px rgba(5, 12, 24, 0.45)',
        soft: '0 12px 30px rgba(5, 12, 24, 0.3)',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'lux-radial':
          'radial-gradient(1200px 500px at 10% -20%, rgba(148, 163, 184, 0.2), transparent 55%), radial-gradient(1000px 500px at 90% -10%, rgba(99, 102, 241, 0.2), transparent 50%), radial-gradient(700px 400px at 50% 120%, rgba(56, 189, 248, 0.15), transparent 55%)',
      },
    },
  },
  plugins: [],
}

