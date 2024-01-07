import SkillBody from "./components/SkillBody";

const SkillSection = () => {
  return (
    <div className="w-screen h-auto absolute top-16 flex flex-col select-none pl-10 pr-3 lg:pr-40 md:px-14">
      <div className="text-left w-max font-sectionHeading text-2xl md:text-5xl text-white">
        My {window.innerWidth < 768 && <br />} Skills
      </div>
      <SkillBody />
    </div>
  );
};

export default SkillSection;
