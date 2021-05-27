import React from "react";
import "./FlatContactInfo.css";
import type ContactInfo from "../../data/ContactInfo";
import FlatSocial from "../FlatSocial/FlatSocial";
type Props = {
  contactInfo?: ContactInfo;
};

const FlatContactInfo = ({ contactInfo }: Props) => {
  console.log(contactInfo && contactInfo.socials);
  return (
    <div className="FlatContactInfo">
      {contactInfo && contactInfo.residence}
      {contactInfo && contactInfo.phone}
      {contactInfo && contactInfo.email}
      {contactInfo &&
        contactInfo.socials.map((social, index) => (
          <FlatSocial key={index} social={social} />
        ))}
    </div>
  );
};

export default FlatContactInfo;
