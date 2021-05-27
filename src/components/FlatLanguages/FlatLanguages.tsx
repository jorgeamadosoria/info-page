import React from "react";
import "./FlatLanguages.css";
import FlatLanguage from "../FlatLanguage/FlatLanguage";
import Language from "../../data/Language";
type Props = {
  languages?: Array<Language>;
};

const FlatLanguages = ({ languages }: Props) => {
  return (
    <div className="FlatLanguages">
      {languages &&
        languages.map((language, index) => (
          <FlatLanguage key={index} language={language} />
        ))}
    </div>
  );
};

export default FlatLanguages;
