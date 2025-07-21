/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: '#F1F8FE',
        DarkBlue: '#0c2534',
      },
      fontFamily: {
        lora: ['Lora', 'serif'],

      },
      boxShadow: {
    customShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
  },
    },
  },
  plugins: [],
};
