class Social {
  name: String;
  url: String;
  icon: String;

  constructor({ name, url, icon }: Social) {
    this.name = name;
    this.url = url;
    this.icon = icon;
  }
}

export default Social;
