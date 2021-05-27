import Social from "./Social";

class ContactInfo {
  residence: String;
  phone: String;
  email: String;
  socials: Array<Social>;

  constructor({ residence, phone, email, socials }: ContactInfo) {
    this.residence = residence;
    this.phone = phone;
    this.email = email;
    this.socials = socials;
  }
}

export default ContactInfo;
