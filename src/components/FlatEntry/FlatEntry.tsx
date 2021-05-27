import React from "react";
import "./FlatEntry.css";
import Entry from "../../data/Entry";

type Props = {
  entry: Entry;
};
const FlatEntry = ({ entry }: Props) => (
  <div className="FlatEntry">
    {entry && entry.fromDate}
    {entry && entry.toDate}
    {entry && entry.name}
    {entry && entry.entity}
    {entry && entry.reference}
    {entry && entry.description}
    {entry && entry.type}
  </div>
);

export default FlatEntry;
