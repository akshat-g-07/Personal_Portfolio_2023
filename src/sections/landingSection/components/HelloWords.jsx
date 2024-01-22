import { useState } from "react";

const HelloWords = () => {
  const [wordIndex, setWordIndex] = useState(0);

  setTimeout(() => {
    let tempIndex = wordIndex;
    tempIndex = (tempIndex + 1) % helloWords.length;
    setWordIndex(tempIndex);
  }, 1000 * 5);

  const helloWords = ["नमस्ते", "Hello", "Hallo", "Hola", "Ciao", "Helló"];

  return (
    <div className="w-24 md:w-44 text-white border-r-8 text-2xl md:text-5xl font-helloWordsFont overflow-y-clip overflow-x-hidden animate-helloWordsAnimation origin-left">
      {helloWords[wordIndex]}
    </div>
  );
};

export default HelloWords;
