enum LanguageLevel {
  NATIVE = "native (CEFR C2+)",
  PROFICIENT = "proficient (CEFR C1-C2)",
  INTERMEDIATE = "conversational (CEFR (B1-B2)",
  BEGINNER = "beginner (CEFR A2)",
  BASIC = "basic (CEFR A1)",
  OTHER = "other",
}

export const getLanguageLevel = (value: string) => {
  switch (value) {
    case "native":
      return LanguageLevel.NATIVE;
    case "proficient":
      return LanguageLevel.PROFICIENT;
    case "intermediate":
      return LanguageLevel.INTERMEDIATE;
    case "beginner":
      return LanguageLevel.BEGINNER;
    case "basic":
      return LanguageLevel.BASIC;
  }
  return LanguageLevel.OTHER;
};

export default LanguageLevel;
