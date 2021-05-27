import React from "react";
import "./FlatResume.css";
import FlatSummary from "../FlatSummary/FlatSummary";
import FlatContactInfo from "../FlatContactInfo/FlatContactInfo";
import FlatLanguages from "../FlatLanguages/FlatLanguages";
import FlatSkills from "../FlatSkills/FlatSkills";
import FlatEntries from "../FlatEntries/FlatEntries";
import FlatFooter from "../FlatFooter/FlatFooter";
import FlatHeader from "../FlatHeader/FlatHeader";
import type Resume from "../../data/Resume";

type Props = {
  resume?: Resume;
};

const FlatResume = ({ resume }: Props) => {
  return (
    <div className="FlatResume">
      <FlatHeader></FlatHeader>
      <i className="fa fab-github"></i>
      <FlatSummary summary={resume && resume.summary} />
      <FlatContactInfo contactInfo={resume && resume.contactInfo} />
      <FlatLanguages languages={resume && resume.languages} />
      <FlatSkills skills={resume && resume.skills} />
      <FlatEntries entries={resume && resume.entries} />
      <FlatFooter></FlatFooter>
    </div>
  );
};

export default FlatResume;
