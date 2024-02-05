/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        header: '#1e1e1e',

        // secondary color must be cyan
        secondary: '#2699f2',
      },
    },
  },
  plugins: [],
};
