import Summary, { SUMMARY_DEFAULT } from "./Summary";
import Contact, { CONTACT_DEFAULT } from "./Contact";
import Language, { LANGUAGE_DEFAULT } from "./Language";
import Skill, { SKILL_DEFAULT } from "./Skill";
import Entry, { ENTRY_DEFAULT } from "./Entry";

class Resume {
  summary: Summary;
  contacts: Array<Contact>;
  languages: Array<Language>;
  skills: Array<Skill>;
  entries: Array<Entry>;
  constructor(
    summary: Summary = SUMMARY_DEFAULT,
    contacts: Array<Contact> = [CONTACT_DEFAULT],
    languages: Array<Language> = [LANGUAGE_DEFAULT],
    skills: Array<Skill> = [SKILL_DEFAULT],
    entries: Array<Entry> = [ENTRY_DEFAULT]
  ) {
    this.summary = summary;
    this.contacts = contacts;
    this.languages = languages;
    this.skills = skills;
    this.entries = entries;
  }
}

export const RESUME_DEFAULT = new Resume();

export default Resume;
