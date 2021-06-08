enum ShowCaseType {
  WEB = "web",
  APP = "app",
  OTHER = "other",
}

export const getShowCaseType = (value: string) => {
  switch (value) {
    case "web":
      return ShowCaseType.WEB;
    case "app":
      return ShowCaseType.APP;
  }
  return ShowCaseType.OTHER;
};

export default ShowCaseType;
