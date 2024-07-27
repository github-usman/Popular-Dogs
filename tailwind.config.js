/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: '491px',
        sm: '540px',
        md: '768px',
        lg: '990px',
        xl: '1280px',
        xxl: '1440px',
      },
    },
  },
  plugins: [],
}

