module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1024px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        gray_400_b7: "#c8c4b7b7",
        amber_400: "#ffd223",
        black_900: "#000000",
        gray_900_cc: "#241c1ccc",
        gray_900: "#241c1c",
        white_A700: "#ffffff",
        amber_A100: "#fee16f",
        gray_100: "#f5f4f2",
      },
      borderRadius: { radius15: "15px", radius20: "20px", radius315: "31.5px" },
      fontFamily: { roboto: "Roboto", montserrat: "Montserrat" },
      letterSpacing: { ls1: "1px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
