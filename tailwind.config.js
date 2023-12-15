/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        helloWordsFont: ["Montserrat"],
        sectionHeading: ["Finlandica"],
        sectionDescription: ["Fahkwang"],
        firstDescription: ["Electrolize"],
        secondDescription: ["Poppins"],
      },
      animation: {
        helloWordsAnimation:
          "helloWordsKeyframes 2.5s steps(5,end) alternate infinite,borderKeyframes 0.5s alternate infinite",
      },
      keyframes: {
        helloWordsKeyframes: {
          "0%": { width: "0px" },
          "80%": { width: "150px" },
          "100%": { width: "150px" },
        },
        borderKeyframes: {
          "0%": { borderColor: "white" },
          "100%": { borderColor: "transparent" },
        },
      },
    },
  },
  plugins: [],
};
