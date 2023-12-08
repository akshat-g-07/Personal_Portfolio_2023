import { useState } from "react";
import ThreeDModel from "./threeDModel/ThreeDModel";
import "./App.css";

function App() {
  const [scrollTo, setScrollTo] = useState("landing");
  const [scrollDown, setScrollDown] = useState(0);
  const sectionArray = [
    "landing",
    "skills",
    "projects",
    "experience",
    "education",
    "hobby",
    "contact",
  ];

  return (
    <>
      <ThreeDModel scrollTo={scrollTo} scrollDown={scrollDown} />
      <div className="fixed bottom-16 right-16 z-10 bg-neutral-500">
        <div
          className="bg-red-500"
          onClick={() => {
            let indexVal = sectionArray.indexOf(scrollTo);
            if (indexVal === 0) return;
            indexVal -= 1;
            setScrollTo("transition");
            setScrollDown(-1);
            setTimeout(() => {
              setScrollTo(sectionArray[indexVal]);
            }, 50);
          }}
        >
          Prvs
        </div>
        <div
          className="bg-blue-500"
          onClick={() => {
            let indexVal = sectionArray.indexOf(scrollTo);
            if (indexVal === 6) return;
            indexVal += 1;
            setScrollTo("transition");
            setScrollDown(1);
            setTimeout(() => {
              setScrollTo(sectionArray[indexVal]);
            }, 50);
          }}
        >
          Next
        </div>
      </div>
    </>
  );
}

export default App;
