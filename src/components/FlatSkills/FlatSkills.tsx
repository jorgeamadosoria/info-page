import React from "react";
import "./FlatSkills.css";
import FlatSkill from "../FlatSkill/FlatSkill";
import Skill from "../../data/Skill";

type Props = {
  skills?: Array<Skill>;
};

const FlatSkills = ({ skills }: Props) => {
  return (
    <div className="FlatLanguages">
      {skills &&
        skills.map((skill, index) => <FlatSkill key={index} skill={skill} />)}
    </div>
  );
};

export default FlatSkills;
