/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        header: '#1e1e1e',
        section: '#2b2b2b',

        // secondary color must be cyan
        primary: '#2699f2',
        'primary-contrast': '#046AB9',
      },
      borderColor: {
        primary: '#2699f2',
      },
      textColor: {
        primary: '#2699f2',
      },
    },
  },
  plugins: [],
};
