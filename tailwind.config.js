/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        'color1': "#0B0D17",
        'color2': "#D0D6F9",
        'color3': "#FFFFFF"
      },
      fontFamily:{
        'heading1': 'Bellefair',
        'heading2': 'Barlow Condensed',
        'heading3': 'poppins' 
  
      },
      screens:{
        sm:'580px',
        md:'768px',
        lg:'1095px',
        xl:'1440px'
      }
    },
  },
  plugins: [],
}

