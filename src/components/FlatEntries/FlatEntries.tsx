import React from "react";
import "./FlatEntries.css";
import Entry from "../../data/Entry";
import FlatEntry from "../FlatEntry/FlatEntry";

type Props = {
  entries?: Array<Entry>;
};

const FlatEntries = ({ entries }: Props) => {
  return (
    <div className="FlatEntries">
      {entries &&
        entries.map((entry, index) => <FlatEntry key={index} entry={entry} />)}
    </div>
  );
};

export default FlatEntries;
