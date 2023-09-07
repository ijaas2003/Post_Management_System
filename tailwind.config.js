/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primarycolor: "#edf2f8",
        secondarycolor: "#313bac",
        blackcolor: "#030303",
        lightGraycolor: "#e4e4e4",
        graycolor: "#6b7688",
        browncolor: "#46364a",
        whitecolor: "#ffffff",
      },
      backgroundColor:{
          primarycolor: "#edf2f8",
          secondarycolor: "#313bac",
          blackcolor: "#030303",
          lightGraycolor: "#e4e4e4",
          graycolor: "#6b7688",
          browncolor: "#46364a",
          whitecolor: "#ffffff"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      fontFamily:{
        google:['Dancing Script', 'cursive','Sigmar', 'cursive'],
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/bgIMG.png')",
      },
    },
  },
  plugins: [],
};
