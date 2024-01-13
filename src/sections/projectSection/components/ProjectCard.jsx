/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import ImagesPart from "./ImagesPart";
import NameLinkPart from "./NameLinkPart";
import SkillPart from "./SkillPart";
import DescriptionPart from "./DescriptionPart";

const ProjectCard = ({ item }) => {
  return (
    <motion.div
      key={item.name}
      className="bg-stone-700 h-auto w-72 overflow-x-hidden my-2 text-white text-sm md:h-32 md:w-32 lg:h-36 lg:w-36 lg:m-px lg:p-0 lg:grayscale hover:grayscale-0 lg:text-slate-500 hover:text-white"
    >
      <ImagesPart images={item.images} name={item.name} />
      <NameLinkPart name={item.name} github={item.github} live={item.live} />
      <SkillPart skills={item.skills} />
      <DescriptionPart description={item.description} />
    </motion.div>
  );
};

export default ProjectCard;
