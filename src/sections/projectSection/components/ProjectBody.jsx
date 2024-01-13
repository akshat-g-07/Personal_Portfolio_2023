import Projects from "./Projects";
import ProjectCard from "./ProjectCard";

const ProjectBody = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-between items-center pt-4 lg:pt-0 lg:pl-96 mb-24">
      {Projects.map((item) => {
        return <ProjectCard key={item.name} item={item} />;
      })}
    </div>
  );
};

export default ProjectBody;
