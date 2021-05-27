class Entry {
  fromDate: Date;
  toDate: Date;
  name: String;
  entity: String;
  reference: String;
  description: String;
  type: String;

  constructor({
    fromDate,
    toDate,
    name,
    entity,
    reference,
    description,
    type,
  }: Entry) {
    console.log(fromDate);

    this.fromDate = fromDate;
    console.log(this.fromDate);
    this.toDate = toDate;
    this.name = name;
    this.entity = entity;
    this.reference = reference;
    this.description = description;
    this.type = type;
  }
}

export default Entry;
