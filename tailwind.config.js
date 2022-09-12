/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: ["eb-garamond"],
      sans: ["poppins"],
    },
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      success: "#2AC368",
      error: "#FD8383",
      alert: "#F2CD4F",
      blue: {
        50: "#C5DBFF",
        100: "#597AB1",
      },
      grey: {
        25: "#F5F5F5",
        50: "#E9E9E9",
        75: "#D4E5E5",
        100: "#CDD1D5",
        150: "#595959",
        200: "#373737",
      },
      green: {
        50: "#60D009",
        100: "#009C3F",
      },
      red: {
        100: "#E23434",
      },
      orange: {
        100: "#E9652F",
        200: "#BC3903",
      },
    },
    extend: {},
  },
  plugins: [],
};
