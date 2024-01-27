import ProjectBody from "./components/ProjectBody";
const ProjectSection = () => {
  return (
    <div className="w-screen h-auto absolute top-16 flex flex-col select-none pl-10 pr-3 lg:pr-40 md:px-14">
      <div className="text-left w-max font-sectionHeading text-2xl md:text-5xl text-white">
        Some things {window.innerWidth < 768 && <br />} I've BUILT
        <div className="font-sectionDescription flex flex-row items-center text-sm md:text-2xl lg:text-3xl my-1 lg:my-5">
          <div className="w-[20px] h-0.5 mr-2 bg-white" />
          Projects
        </div>
      </div>
      <ProjectBody />
    </div>
  );
};

export default ProjectSection;
