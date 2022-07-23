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

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'xs':'385px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px'
    },
  },
  plugins: [Myclass],
}
