import Relevance, { getRelevance } from "./enums/Relevance";

class Datum {
  value: string = "";
  relevance: Relevance = Relevance.UNDEFINED;
  constructor(json: any) {
    if (json) {
      this.value = json.value;
      this.relevance = getRelevance(json.relevance);
    }
  }

  clear(relevance: Relevance): boolean {
    return (this.value = this.relevance > relevance ? "" : this.value) !== "";
  }
}

export default Datum;
