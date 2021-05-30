import Relevance from "./enums/Relevance";
class Language {
  code: string;
  level: string;
  relevance: number;
  constructor(
    code: string = "en",
    level: string = "native",
    relevance: number = Relevance.TRIVIAL
  ) {
    this.code = code;
    this.level = level;
    this.relevance = relevance;
  }
}

export const LANGUAGE_DEFAULT = new Language();
export default Language;
