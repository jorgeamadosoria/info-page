enum SocialType {
  GITHUB = "github",
  FACEBOOK = "facebook",
  LINKEDIN = "linkedin",
  OTHER = "other",
}

export const getSocialType = (value: string) => {
  switch (value) {
    case "github":
      return SocialType.GITHUB;
    case "facebook":
      return SocialType.FACEBOOK;
    case "linkedin":
      return SocialType.LINKEDIN;
  }
  return SocialType.OTHER;
};

export const isSocialType = (value: string): boolean => {
  return getSocialType(value) !== SocialType.OTHER;
};

export default SocialType;
