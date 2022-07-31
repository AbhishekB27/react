/** @type {import('tailwindcss/plugin').Config} */
const plugin = require('tailwindcss/plugin')
const Myclass = plugin(function({addUtilities}){
  addUtilities({
    ".my-rotate-180":{
      transform:'rotateY(180deg)'
    },
    ".preserve-3d":{
      transformStyle:'preserve-3d'
    },
    ".perspective":{
      perspective:'1000px'
    },
    ".backface-hidden":{
      backfaceVisibility:'hidden'
    }
  })
})
//whenever we want to add custom css style in the component always remember put that css inside the extend obj
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'crimson':{
          100:'#fde8ec',
          200:'#f9b9c6',
          300:'#f48a9f',
          400:'#f05b79',
          500:'#ec2d53',
          600:'#d21339',
          700:'#a40f2d',
          800:'#750b20',
          900:'#460613',
        }
      },
      fontFamily:{
        poppins:['Poppins','sans-serif'],
        Edu_VIC_WA_NT_Beginner:['Edu VIC WA NT Beginner', 'cursive']
      }
    },
    screens:{
      'xs':'385px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px'
    },
    boxShadow: {
      'my-shadow':'0.5px 0.5px 8.5px 2px rgba(192, 38, 211, 0.32)'
    },
  },
  plugins: [Myclass],
}
