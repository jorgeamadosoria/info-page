enum SkillType {
  PRO = "senior",
  INTERMEDIATE = "intermediate",
  BEGINNER = "junior",
  OTHER = "other",
}

export const getSkillType = (value: string) => {
  switch (value) {
    case "senior":
      return SkillType.PRO;
    case "intermediate":
      return SkillType.INTERMEDIATE;
    case "junior":
      return SkillType.BEGINNER;
  }
  return SkillType.OTHER;
};

export default SkillType;
