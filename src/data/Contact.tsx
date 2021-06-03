import Relevance, { getRelevance } from "./enums/Relevance";
class Contact {
  type: string = "";
  name: string = "";
  url: string = "";
  relevance: Relevance = Relevance.UNDEFINED;

  constructor(json: any) {
    if (json) {
      this.name = json.name;
      this.type = json.type;
      this.url = json.url;
      this.relevance = getRelevance(json.relevance);
    }
  }
}

export default Contact;
