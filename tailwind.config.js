module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '30': '30px',
      },
      fontFamily:{
        sans: ['Inter', 'sans-serif']
      }
    },
    plugins: [
      require('tailwind-scrollbar')({ nocompatible: true }),
    ],
  }
}