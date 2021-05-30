import Relevance from "./enums/Relevance";
class Skill {
  name: string;
  level: string;
  relevance: number;
  constructor(
    name: string = "skill name",
    level: string = "advanced",
    relevance: number = Relevance.TRIVIAL
  ) {
    this.name = name;
    this.level = level;
    this.relevance = relevance;
  }
}

export const SKILL_DEFAULT = new Skill();

export default Skill;
