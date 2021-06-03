import Contact from "./Contact";
import Language from "./Language";
import Skill from "./Skill";
import Entry from "./Entry";
import Relevance from "./enums/Relevance";
import Datum from "./Datum";

class Resume {
  name: Datum = new Datum(null);
  positions: Array<Datum> = new Array<Datum>();
  summary: Datum = new Datum(null);
  contacts: Array<Contact> = new Array<Contact>();
  languages: Array<Language> = new Array<Language>();
  skills: Array<Skill> = new Array<Skill>();
  entries: Array<Entry> = new Array<Entry>();
  format: string = "";
  constructor(json?: any) {
    this.format = "flat";
    if (json) {
      this.name = new Datum(json.name);
      this.positions = json.positions.map((e: any) => new Datum(e));
      this.summary = new Datum(json.summary);
      this.contacts = json.contacts.map((e: any) => new Contact(e));
      this.languages = json.languages.map((e: any) => new Language(e));
      this.skills = json.skills.map((e: any) => new Skill(e));
      this.entries = json.entries.map((e: any) => new Entry(e));
    }
  }

  prepareResume(relevance: Relevance = Relevance.TRIVIAL): Resume {
    this.name.clear(relevance);
    this.positions = this.positions.filter((e) => e.clear(relevance));
    this.summary.clear(relevance);
    this.contacts = this.contacts.filter((e1) => e1.relevance <= relevance);
    this.languages = this.languages
      .filter((e1) => e1.relevance <= relevance)
      .sort(Language.sort);
    this.skills = this.skills
      .filter((e1) => e1.relevance <= relevance)
      .sort(Skill.sort);
    this.entries = this.entries
      .filter((e1) => e1.relevance <= relevance) //filters the entries array
      .map((e1) => e1.filter(relevance)) // filters the datums inside each entry
      .sort(Entry.sort);
    this.format = "flat";
    return this;
  }
}

export default Resume;
