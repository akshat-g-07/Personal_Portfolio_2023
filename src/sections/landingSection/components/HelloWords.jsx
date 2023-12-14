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
    <div className="text-white border-r-8 text-5xl font-helloWordsFont overflow-x-hidden animate-helloWordsAnimation origin-left">
      {helloWords[wordIndex]}
    </div>
  );
};

export default HelloWords;
