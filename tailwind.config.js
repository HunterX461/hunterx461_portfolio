/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'float-serene': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -6px, 0)' },
        },
      },
      animation: {
        'float-serene': 'float-serene 8s ease-in-out infinite',
      },
      backgroundImage: {
        'cyber-veil':
          'radial-gradient(circle at 18% 14%, rgba(122, 166, 197, 0.14), transparent 42%), radial-gradient(circle at 78% 8%, rgba(91, 140, 119, 0.14), transparent 34%), linear-gradient(180deg, rgba(9, 14, 25, 0.56) 0%, rgba(9, 14, 25, 0.72) 100%)',
        'cyber-veil-subtle':
          'linear-gradient(180deg, rgba(7, 12, 20, 0.2) 0%, rgba(7, 12, 20, 0.45) 100%)',
      },
      transitionTimingFunction: {
        serene: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
