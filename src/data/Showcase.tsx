import Relevance, { getRelevance } from "./enums/Relevance";
class Showcase {
  url: string = "";
  name: string = "";
  description: string = "";
  language: string = "";
  relevance: Relevance = Relevance.UNDEFINED;
  constructor(json: any) {
    if (json) {
      this.url = json.url;
      this.name = json.name;
      this.description = json.description;
      this.language = json.language;
      this.relevance = getRelevance(json.relevance);
    }
  }
}

export default Showcase;
