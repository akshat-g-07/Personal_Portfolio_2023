const ProjectSection = () => {
  return (
    <div className="w-screen h-auto absolute top-16 flex flex-col select-none pl-10 pr-3 lg:pr-40 md:px-14">
      <div className="text-left w-max font-sectionHeading text-2xl md:text-5xl text-white">
        Some things {window.innerWidth < 768 && <br />} I've built
      </div>
    </div>
  );
};

export default ProjectSection;
