import Summary from "./Summary";
import ContactInfo from "./ContactInfo";
import Language from "./Language";
import Skill from "./Skill";
import Entry from "./Entry";

class Resume {
  summary: Summary;
  contactInfo: ContactInfo;
  languages: Array<Language>;
  skills: Array<Skill>;
  entries: Array<Entry>;

  constructor({ summary, contactInfo, languages, skills, entries }: Resume) {
    this.summary = summary;
    this.contactInfo = contactInfo;
    this.languages = languages;
    this.skills = skills;
    this.entries = entries;
  }
}

export default Resume;
