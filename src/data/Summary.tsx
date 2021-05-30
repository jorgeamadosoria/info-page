import Relevance from "./enums/Relevance";
import Datum from "./Datum";
class Summary {
  name: Datum;
  positions: Array<Datum>;
  description: Datum;
  relevance: number;

  constructor(
    name: Datum = new Datum("full name"),
    positions: Array<Datum> = [new Datum("Developer")],
    description: Datum = new Datum("long description of applicant"),
    relevance: number = Relevance.ESSENTIAL
  ) {
    this.name = name;
    this.positions = positions;
    this.description = description;
    this.relevance = relevance;
  }
}

export const SUMMARY_DEFAULT = new Summary();

export default Summary;
