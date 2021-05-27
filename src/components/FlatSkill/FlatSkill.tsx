import React from "react";
import "./FlatSkill.css";
import Skill from "../../data/Skill";

type Props = {
  skill?: Skill;
};
const FlatSkill = ({ skill }: Props) => (
  <div className="FlatSkill">
    {skill && skill.name}
    {skill && skill.level}
  </div>
);

export default FlatSkill;
