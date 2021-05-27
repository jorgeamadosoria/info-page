import React from "react";
import "./FlatLanguage.css";
import Language from "../../data/Language";
type Props = {
  language?: Language;
};

const FlatLanguage = ({ language }: Props) => {
  console.log(language);
  return (
    <div className="FlatLanguage">
      {language && language.code}
      {language && language.level}
    </div>
  );
};

export default FlatLanguage;
