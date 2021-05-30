import Relevance from "./enums/Relevance";
class Contact {
  type: string;
  name: string;
  url: string;
  relevance: number;

  constructor(
    name: string = "place of residence",
    type: string = "telephone",
    url: string = "http://google.com",
    relevance: number = Relevance.TRIVIAL
  ) {
    this.name = name;
    this.type = type;
    this.url = url;
    this.relevance = relevance;
  }
}

export const CONTACT_DEFAULT = new Contact();
export default Contact;
