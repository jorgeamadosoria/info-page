import Datum from "./Datum";
import EntryType from "./enums/EntryType";
import Relevance from "./enums/Relevance";

class Entry {
  fromDate: Date;
  toDate: Date;
  name: string;
  entity: string;
  reference: Datum;
  description: Datum;
  type: EntryType;
  relevance: number;
  constructor(
    fromDate: Date = new Date(),
    toDate: Date = new Date(),
    name: string = "workplace",
    entity: string = "Corporation SA",
    reference: Datum = new Datum("http://google.com"),
    description: Datum = new Datum(
      "Workplace position and responsabilities description"
    ),
    type: EntryType = EntryType.WORK,
    relevance: number = Relevance.TRIVIAL
  ) {
    this.fromDate = fromDate;
    this.toDate = toDate;
    this.name = name;
    this.entity = entity;
    this.reference = reference;
    this.description = description;
    this.type = type;
    this.relevance = relevance;
  }
}

export const ENTRY_DEFAULT = new Entry();

export default Entry;
