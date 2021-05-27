import React from "react";
import "./FlatSocial.css";
import Social from "../../data/Social";
type Props = {
  social?: Social;
};

const FlatSocial = ({ social }: Props) => {
  console.log(social);
  return (
    <div className="FlatSocial">
      {social && social.name}
      {social && social.url}
      {social && social.icon}
    </div>
  );
};

export default FlatSocial;
