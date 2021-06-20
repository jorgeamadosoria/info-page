import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faCertificate,
  faEnvelope,
  faGlobe,
  faGraduationCap,
  faHandsHelping,
  faMapMarkerAlt,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import Relevance from "../../data/enums/Relevance";
import Resume from "../../data/Resume";
import SocialType from "../../data/enums/SocialType";
import EntryType from "../../data/enums/EntryType";
import ShowCaseType from "../../data/enums/ShowCaseType";
import IconColor from "../../data/enums/IconColor";

export type ResumeProps = {
  resume: Resume;
  relevance: Relevance;
  format?: string;
};

export const getIcon = (name: String, color: IconColor = IconColor.BLACK) => {
  switch (name) {
    case "residence":
      return (
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          color={color === IconColor.COLOR ? "#ea4335" : color}
          size="lg"
          fixedWidth
        />
      );
    case "phone":
      return (
        <FontAwesomeIcon
          icon={faWhatsapp}
          color={color === IconColor.COLOR ? "#25d366" : color}
          size="lg"
          fixedWidth
        />
      );
    case "email":
      return (
        <FontAwesomeIcon
          icon={faEnvelope}
          color={color === IconColor.COLOR ? "#ffa930" : color}
          size="lg"
          fixedWidth
        />
      );
    case "portfolio":
      return (
        <FontAwesomeIcon
          icon={faBriefcase}
          color={color === IconColor.COLOR ? "#601700" : color}
          size="lg"
          fixedWidth
        />
      );
    case ShowCaseType.WEB:
      return (
        <FontAwesomeIcon
          icon={faGlobe}
          color={color === IconColor.COLOR ? "#601700" : color}
          size="lg"
          fixedWidth
        />
      );
    case ShowCaseType.APP:
      return (
        <FontAwesomeIcon
          icon={faMobileAlt}
          color={color === IconColor.COLOR ? "#601700" : color}
          size="lg"
          fixedWidth
        />
      );
    case SocialType.GITHUB:
      return (
        <FontAwesomeIcon
          icon={faGithub}
          color={color === IconColor.COLOR ? "#333" : color}
          size="lg"
          fixedWidth
        />
      );
    case SocialType.FACEBOOK:
      return (
        <FontAwesomeIcon
          icon={faFacebook}
          color={color === IconColor.COLOR ? "#3b5998" : color}
          size="lg"
          fixedWidth
        />
      );
    case SocialType.LINKEDIN:
      return (
        <FontAwesomeIcon
          icon={faLinkedin}
          color={color === IconColor.COLOR ? "#00a0dc" : color}
          size="lg"
          fixedWidth
        />
      );
    case EntryType.WORK:
      return (
        <FontAwesomeIcon
          icon={faBriefcase}
          color={color === IconColor.COLOR ? "#7094F9" : color}
          size="lg"
          fixedWidth
        />
      );
    case EntryType.EDUCATION:
      return (
        <FontAwesomeIcon
          icon={faGraduationCap}
          color={color === IconColor.COLOR ? "#93B8AD" : color}
          size="lg"
          fixedWidth
        />
      );
    case EntryType.VOLUNTEERING:
      return (
        <FontAwesomeIcon
          icon={faHandsHelping}
          color={color === IconColor.COLOR ? "#F4626C" : color}
          size="lg"
          fixedWidth
        />
      );
    case EntryType.CERTIFICATION:
      return (
        <FontAwesomeIcon
          icon={faCertificate}
          color={color === IconColor.COLOR ? "#FFA25B" : color}
          size="lg"
          fixedWidth
        />
      );
  }
};
