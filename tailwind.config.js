module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        'card-bg-light': '#ffffff',
        'card-bg-dark': '#1f2937',
        'text-light': '#374151',
        'text-dark': '#e5e7eb',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};