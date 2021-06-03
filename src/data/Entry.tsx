import Datum from "./Datum";
import EntryType, { getEntryType } from "./enums/EntryType";
import Relevance, { getRelevance } from "./enums/Relevance";

class Entry {
  fromDate: Date = new Date();
  toDate: Date | null = new Date();
  name: string = "";
  entity: string = "";
  reference: Datum = new Datum(null);
  description: Datum = new Datum(null);
  type: EntryType = EntryType.OTHER;
  relevance: Relevance = Relevance.UNDEFINED;
  constructor(json: any) {
    if (json) {
      this.fromDate = new Date(json.fromDate.replace(/-/g, "/"));
      this.toDate = json.toDate
        ? new Date(json.toDate.replace(/-/g, "/"))
        : null;
      this.name = json.name;
      this.entity = json.entity;
      this.reference = new Datum(json.reference);
      this.description = new Datum(json.description);
      this.type = getEntryType(json.type);
      this.relevance = getRelevance(json.relevance);
    }
  }

  filter = (relevance: Relevance): Entry => {
    this.description.clear(relevance);
    this.reference.clear(relevance);
    return this;
  };

  static sort = (e1: Entry, e2: Entry): number => {
    return e2.fromDate.getTime() === e1.fromDate.getTime()
      ? 0
      : Math.sign(e2.fromDate.getTime() - e1.fromDate.getTime());
  };
}

export default Entry;
