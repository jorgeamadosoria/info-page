import Relevance, { getRelevance } from "./enums/Relevance";
import LanguageLevel, { getLanguageLevel } from "./enums/LanguageLevel";
class Language {
  code: string = "";
  shortLevel: string = "";
  level: LanguageLevel = LanguageLevel.OTHER;
  relevance: Relevance = Relevance.TRIVIAL;
  constructor(json: any) {
    if (json) {
      this.code = json.code;
      this.level = getLanguageLevel(json.level);
      this.shortLevel = this.level.substring(0, this.level.indexOf("(")).trim();
      this.relevance = getRelevance(json.relevance);
    }
  }

  public static levelNumber = (level: LanguageLevel) => {
    switch (level) {
      case LanguageLevel.NATIVE:
        return 5;
      case LanguageLevel.PROFICIENT:
        return 4;
      case LanguageLevel.INTERMEDIATE:
        return 3;
      case LanguageLevel.BEGINNER:
        return 2;
      case LanguageLevel.BASIC:
        return 1;
      default:
        return 0;
    }
  };
  static sort = (e1: Language, e2: Language): number => {
    return Language.levelNumber(e2.level) - Language.levelNumber(e1.level);
  };
}

export default Language;
