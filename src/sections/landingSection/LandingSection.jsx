import HelloWords from "./components/HelloWords";
import NameDesc from "./components/NameDesc";
import ResumeButton from "./components/ResumeButton";
import TechWrite from "./components/TechWrite";
const LandingSection = () => {
  return (
    <>
      <div className="w-screen h-auto absolute top-16 flex flex-col items-center select-none">
        <HelloWords />
        <NameDesc />
        <div className="w-full py-8 flex flex-col md:flex-row justify-center md:justify-evenly lg:justify-around items-center">
          <ResumeButton />
          <TechWrite />
        </div>
      </div>
    </>
  );
};

export default LandingSection;
