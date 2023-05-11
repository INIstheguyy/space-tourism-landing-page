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
        'heading2': 'Barlow Condensed'   
  
      },
      screens:{
        sm:'375px',
        md:'768px',
        lg:'1095px',
        xl:'1440px'
      },
      backgroundImage:{
        'home-desktop':'./src/assets/home/background-home-desktop.jpg',
        'home-tablet':'./src/assets/home/background-home-tablet.jpg',
        'home-mobile':'./src/assets/home/background-home-mobile.jpg'
      }
    },
  },
  plugins: [],
}

