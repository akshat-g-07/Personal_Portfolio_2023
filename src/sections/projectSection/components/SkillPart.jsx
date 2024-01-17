/* eslint-disable react/prop-types */

import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

const SkillPart = ({ skills }) => {
  return (
    <div className="flex flex-wrap justify-evenly">
      {skills.map((skill) => {
        return (
          <Chip
            key={skill}
            color="secondary"
            avatar={
              <Avatar alt={skill} src={`/skills/${skill.toLowerCase()}.png`} />
            }
            label={skill}
            variant="contained"
            size={window.innerWidth < 768 ? "small" : "medium"}
            sx={{ margin: "2.5px 0px" }}
          />
        );
      })}
    </div>
  );
};

export default SkillPart;
