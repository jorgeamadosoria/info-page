enum EntryType {
  WORK = "work",
  EDUCATION = "education",
  VOLUNTEERING = "volunteering",
  CERTIFICATION = "certification",
  OTHER = "other",
}

export const getEntryType = (value: string) => {
  switch (value) {
    case "work":
      return EntryType.WORK;
    case "education":
      return EntryType.EDUCATION;
    case "volunteering":
      return EntryType.VOLUNTEERING;
    case "certification":
      return EntryType.CERTIFICATION;
  }
  return EntryType.OTHER;
};

export default EntryType;
