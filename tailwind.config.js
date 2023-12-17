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
        spinSlow: "spin 15s linear infinite",
        spinRev: "spin 15s linear infinite reverse",
      },
      keyframes: {
        helloWordsKeyframes: {
          from: { width: "0px" },
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
