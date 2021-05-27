import React from "react";
import "./FlatSummary.css";
import Summary from "../../data/Summary";

type Props = {
  summary?: Summary;
};

const FlatSummary = ({ summary }: Props) => {
  return (
    <div className="FlatSummary">
      {summary && summary.name}
      {summary && summary.positions}
    </div>
  );
};

export default FlatSummary;
