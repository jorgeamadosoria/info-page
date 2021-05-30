import Relevance from "./enums/Relevance";

class Datum {
  value: string;
  relevance: number;
  constructor(value: string = "value", relevance: number = Relevance.TRIVIAL) {
    this.value = value;
    this.relevance = relevance;
  }
}

export default Datum;
