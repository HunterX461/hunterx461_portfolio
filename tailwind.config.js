/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          950: '#070912',
          900: '#0b0f1c',
          800: '#101627',
          700: '#161d33',
        },
        aurora: {
          violet: '#8b5cf6',
          indigo: '#6366f1',
          cyan: '#22d3ee',
          teal: '#14b8a6',
          rose: '#fb7185',
          amber: '#fbbf24',
        },
      },
      keyframes: {
        'float-serene': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -6px, 0)' },
        },
        'aurora-drift': {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)', opacity: '0.55' },
          '33%': { transform: 'translate3d(8%, -6%, 0) scale(1.08)', opacity: '0.7' },
          '66%': { transform: 'translate3d(-6%, 8%, 0) scale(0.96)', opacity: '0.5' },
        },
        'aurora-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(139, 92, 246, 0.45)' },
          '50%': { boxShadow: '0 0 0 14px rgba(139, 92, 246, 0)' },
        },
        gridFade: {
          '0%, 100%': { opacity: '0.10' },
          '50%': { opacity: '0.20' },
        },
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
      },
      animation: {
        'float-serene': 'float-serene 8s ease-in-out infinite',
        'aurora-drift': 'aurora-drift 22s ease-in-out infinite',
        'aurora-shift': 'aurora-shift 12s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        marquee: 'marquee 40s linear infinite',
        pulseGlow: 'pulseGlow 2.4s ease-out infinite',
        gridFade: 'gridFade 10s ease-in-out infinite',
        blink: 'blink 1.1s steps(2, start) infinite',
      },
      backgroundImage: {
        'cyber-veil':
          'radial-gradient(circle at 18% 14%, rgba(122, 166, 197, 0.14), transparent 42%), radial-gradient(circle at 78% 8%, rgba(91, 140, 119, 0.14), transparent 34%), linear-gradient(180deg, rgba(9, 14, 25, 0.56) 0%, rgba(9, 14, 25, 0.72) 100%)',
        'cyber-veil-subtle':
          'linear-gradient(180deg, rgba(7, 12, 20, 0.2) 0%, rgba(7, 12, 20, 0.45) 100%)',
        'aurora-mesh':
          'radial-gradient(60% 50% at 15% 20%, rgba(139,92,246,0.30), transparent 60%), radial-gradient(50% 45% at 85% 25%, rgba(34,211,238,0.22), transparent 60%), radial-gradient(55% 50% at 70% 85%, rgba(20,184,166,0.20), transparent 65%), radial-gradient(40% 40% at 25% 80%, rgba(251,113,133,0.16), transparent 60%)',
        'aurora-text':
          'linear-gradient(120deg, #c4b5fd 0%, #67e8f9 35%, #5eead4 65%, #fda4af 100%)',
        'grid-faint':
          'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-32': '32px 32px',
        'grid-48': '48px 48px',
      },
      transitionTimingFunction: {
        serene: 'cubic-bezier(0.22, 1, 0.36, 1)',
        spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(139, 92, 246, 0.45)',
        'glow-cyan': '0 0 40px -8px rgba(34, 211, 238, 0.45)',
      },
    },
  },
  plugins: [],
};
