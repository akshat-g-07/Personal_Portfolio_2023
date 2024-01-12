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
        projectSlideAnimation: "projectSlideKeyframes 15s infinite linear",
      },
      keyframes: {
        helloWordsKeyframes: {
          from: { width: "0px" },
        },
        borderKeyframes: {
          "0%": { borderColor: "white" },
          "100%": { borderColor: "transparent" },
        },
        projectSlideKeyframes: {
          "0%": {
            transform: "translateX(0)",
          },
          "10%": {
            transform: "translateX(0)",
          },
          "20%": {
            transform: "translateX(-20%)",
          },
          "30%": {
            transform: "translateX(-21%)",
          },
          "40%": {
            transform: "translateX(-40%)",
          },
          "50%": {
            transform: "translateX(-40%)",
          },
          "60%": {
            transform: "translateX(-60%)",
          },
          "70%": {
            transform: "translateX(-60%)",
          },
          "80%": {
            transform: "translateX(-80%)",
          },
          "90%": {
            transform: "translateX(-80%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
