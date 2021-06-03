enum Relevance {
  ESSENTIAL = 1,
  STANDARD = 2,
  TRIVIAL = 3,
  UNDEFINED = 1000,
}

export const getRelevance = (value: number) => {
  switch (value) {
    case 1:
      return Relevance.ESSENTIAL;
    case 2:
      return Relevance.STANDARD;
    case 3:
      return Relevance.TRIVIAL;
  }
  return Relevance.UNDEFINED;
};

export default Relevance;
