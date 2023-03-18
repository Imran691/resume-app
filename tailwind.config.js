/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
      padding:{
        default: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem"
      }
    },
    extend: {
      colors: {
        primary:{
          default: "#00ADB9",
          black: "#222831",
          gray: "#393E46",
          white: "#EEEEEE"
        }
      }
    },
    fontFamily: {
      open:["'Open Sans', sans-serif;"],
      nunito:["'Nunito Sans', sans-serif;"]
    }
  },
  darkMode:"class",
  mode: "jit",
  plugins: [],
}