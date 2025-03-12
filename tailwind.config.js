/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Add the paths to your React files
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
      colors: {
        verte: '#8CA658',
        gray: '#424242',
        graylight:'#E8E8E8',
        orange:'#FFA726',
        shadow:'#E4E3E8'
      },
    },
  },
  plugins: [],  
}
