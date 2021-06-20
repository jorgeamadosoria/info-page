enum Relevance {
  ESSENTIAL = "essential",
  STANDARD = "standard",
  TRIVIAL = "trivial",
}

export const getRelevance = (value: string) => {
  switch (value) {
    case "essential":
      return Relevance.ESSENTIAL;
    case "standard":
      return Relevance.STANDARD;
    default:
      return Relevance.TRIVIAL;
  }
};

export const compare = (e1: Relevance, e2: Relevance) => {
  var value = (value: Relevance) => {
    switch (value) {
      case Relevance.ESSENTIAL:
        return 1;
      case "standard":
        return 2;
      default:
        return 3;
    }
  };
  return value(e1) <= value(e2);
};

export default Relevance;
