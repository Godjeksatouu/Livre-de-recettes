
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        marcellus: "Marcellus",
      },
      colors: {
        customWhite: "#F2F1EC",
        customGreen: "#345333",
        customYellow: "#f2c94c",
        customLightGray: "#f2f2ec",
        customBorderColor: "#e9e9e9",
        customBlack: "#212529",
        customRed: "#F95755",
        borderColorCard: "#e4e4e4",
        categoryFilterColor: "#8b8b94",
        titleGreen: "#4DA537",
      },
      container: {
        center: true,
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          lg: "1024px",
          xl: "1280px",
        },
      },
      backgroundImage: {
        "hero-image": "url('./src/assets/images/1.jpg')",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
