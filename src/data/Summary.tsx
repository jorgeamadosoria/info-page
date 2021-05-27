class Summary {
  name: String;
  positions: Array<String>;
  description: String;

  constructor({ name, positions, description }: Summary) {
    this.name = name;
    this.positions = positions;
    this.description = description;
  }
}

export default Summary;
