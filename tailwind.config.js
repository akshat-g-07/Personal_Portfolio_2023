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
    },
  },
  plugins: [],
};
