import Relevance, { getRelevance } from "./enums/Relevance";
import ShowCaseType, { getShowCaseType } from "./enums/ShowCaseType";
class Showcase {
  url: string = "";
  name: string = "";
  description: string = "";
  language: string = "";
  type: ShowCaseType = ShowCaseType.WEB;
  relevance: Relevance = Relevance.UNDEFINED;
  constructor(json: any) {
    if (json) {
      this.url = json.url;
      this.name = json.name;
      this.description = json.description;
      this.language = json.language;
      this.type = getShowCaseType(json.type);
      this.relevance = getRelevance(json.relevance);
    }
  }
}

export default Showcase;
