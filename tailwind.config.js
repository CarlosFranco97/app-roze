module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '30': '30px',
      },
    },
    plugins: [
      require('tailwind-scrollbar')({ nocompatible: true }),
    ],
  }
}