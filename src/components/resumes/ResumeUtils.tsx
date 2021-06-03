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
  faGraduationCap,
  faHandsHelping,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import Relevance from "../../data/enums/Relevance";
import Resume from "../../data/Resume";
import SocialType from "../../data/enums/SocialType";
import EntryType from "../../data/enums/EntryType";

export type ResumeProps = {
  resume: Resume;
  relevance: Relevance;
  format?: string;
};

export const getIcon = (name: String) => {
  switch (name) {
    case "residence":
      return <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />;
    case "phone":
      return <FontAwesomeIcon icon={faWhatsapp} size="lg" />;
    case "email":
      return <FontAwesomeIcon icon={faEnvelope} size="lg" />;
    case SocialType.GITHUB:
      return <FontAwesomeIcon icon={faGithub} size="lg" />;
    case SocialType.FACEBOOK:
      return <FontAwesomeIcon icon={faFacebook} size="lg" />;
    case SocialType.LINKEDIN:
      return <FontAwesomeIcon icon={faLinkedin} size="lg" />;
    case EntryType.WORK:
      return <FontAwesomeIcon icon={faBriefcase} size="lg" />;
    case EntryType.EDUCATION:
      return <FontAwesomeIcon icon={faGraduationCap} size="lg" />;
    case EntryType.VOLUNTEERING:
      return <FontAwesomeIcon icon={faHandsHelping} size="lg" />;
    case EntryType.CERTIFICATION:
      return <FontAwesomeIcon icon={faCertificate} size="lg" />;
  }
};
