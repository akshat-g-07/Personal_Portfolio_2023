import { useState } from "react";
import ThreeDModel from "./globalComps/ThreeDModel";
import NextPrevButton from "./globalComps/NextPrevButton";
import SocialHandles from "./globalComps/SocialHandles";
import "./App.css";

function App() {
  const [scrollTo, setScrollTo] = useState("landing");
  const [scrollDown, setScrollDown] = useState(0);
  const [transitionTime, setTransitionTime] = useState(2);

  return (
    <>
      <ThreeDModel
        scrollTo={scrollTo}
        scrollDown={scrollDown}
        transitionTime={transitionTime}
      />
      <NextPrevButton
        scrollTo={scrollTo}
        setScrollTo={setScrollTo}
        setScrollDown={setScrollDown}
        setTransitionTime={setTransitionTime}
      />
      <SocialHandles />
    </>
  );
}

export default App;
