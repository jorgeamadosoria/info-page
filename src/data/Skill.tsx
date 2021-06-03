import Relevance, { getRelevance } from "./enums/Relevance";
import SkillType, { getSkillType } from "./enums/SkillType";
class Skill {
  name: string = "";
  level: SkillType = SkillType.OTHER;
  relevance: Relevance = Relevance.UNDEFINED;
  constructor(json: any) {
    if (json) {
      this.name = json.name;
      this.level = getSkillType(json.level);
      this.relevance = getRelevance(json.relevance);
    }
  }

  private static levelNumber = (level: SkillType) => {
    switch (level) {
      case SkillType.PRO:
        return 3;
      case SkillType.INTERMEDIATE:
        return 2;
      case SkillType.BEGINNER:
        return 1;
      default:
        return 0;
    }
  };
  static sort = (e1: Skill, e2: Skill): number => {
    return Skill.levelNumber(e2.level) - Skill.levelNumber(e1.level);
  };
}

export default Skill;
