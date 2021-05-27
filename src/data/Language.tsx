class Language {
  code: String;
  level: String;

  constructor({ code, level }: Language) {
    this.code = code;
    this.level = level;
  }
}

export default Language;
