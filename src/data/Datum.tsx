import Relevance, { getRelevance } from "./enums/Relevance";

class Datum {
  value: string = "";
  relevance: Relevance = Relevance.TRIVIAL;
  constructor(json: any) {
    if (json) {
      this.value = json.value;
      this.relevance = getRelevance(json.relevance);
    }
  }

  clear(relevance: Relevance): boolean {
    this.value = this.relevance > relevance ? "" : this.value;
    return this.value !== null;
  }
}

export default Datum;
