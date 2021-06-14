import Contact from "./Contact";
import Language from "./Language";
import Skill from "./Skill";
import Entry from "./Entry";
import Relevance, { compare } from "./enums/Relevance";
import Datum from "./Datum";
import Showcase from "./Showcase";

class Resume {
  name: Datum = new Datum(null);
  positions: Array<Datum> = new Array<Datum>();
  summary: Datum = new Datum(null);
  showcase: Array<Showcase> = new Array<Showcase>();
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
      this.showcase = json.showcase.map((e: any) => new Showcase(e));
      this.contacts = json.contacts.map((e: any) => new Contact(e));
      this.languages = json.languages.map((e: any) => new Language(e));
      this.skills = json.skills.map((e: any) => new Skill(e));
      this.entries = json.entries.map((e: any) => new Entry(e));
    }
  }

  prepareResume(relevance: Relevance = Relevance.TRIVIAL): Resume {
    const filterRelevance = (e: any) => compare(e.relevance, relevance);
    var resume = new Resume();
    resume.name = this.name;
    resume.summary = this.summary;

    resume.name.clear(relevance);
    resume.positions = this.positions.filter(filterRelevance);
    resume.summary.clear(relevance);
    resume.showcase = this.showcase.filter(filterRelevance);
    resume.contacts = this.contacts.filter(filterRelevance);
    resume.languages = this.languages
      .filter(filterRelevance)
      .sort(Language.sort);
    resume.skills = this.skills.filter(filterRelevance).sort(Skill.sort);
    resume.entries = this.entries
      .filter(filterRelevance) //filters the entries array
      .map((e) => e.filter(relevance)) // filters the datums inside each entry
      .sort(Entry.sort);
    resume.format = "flat";
    return resume;
  }
}

export default Resume;
