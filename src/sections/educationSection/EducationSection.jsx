import { Avatar } from "@mui/material";
const EducationSection = () => {
  return (
    <div className="w-screen lg:w-max h-auto absolute top-72 lg:top-24 lg:right-48 lg:px-0 flex flex-col select-none pl-10 pr-3 md:px-14">
      <div className="text-left w-max font-sectionHeading text-xl md:text-4xl lg:text-5xl text-white">
        Institution that {window.innerWidth < 768 && <br />} shaped ME.
        <div className="font-sectionDescription flex items-center text-sm md:text-2xl lg:text-3xl my-1 lg:my-5">
          <div className="w-[20px] h-0.5 mr-2 bg-white" />
          Education
        </div>
      </div>
      <div className="text-white font-firstDescription font-bold text-xl md:text-3xl pt-4 flex flex-row items-center">
        <Avatar
          alt="NIT"
          src="/images/nitp.png"
          sx={{ height: 56, width: 56 }}
        />
        <div className="ml-4">
          National Institute of Technology{" "}
          <span className="text-stone-400 text-sm md:text-lg font-bold font-secondDescription block md:inline">
            Patna
          </span>
          <span className="text-stone-600 text-xs md:text-base font-secondDescription block md:my-2">
            2017-2021
          </span>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
