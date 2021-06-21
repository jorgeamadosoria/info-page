class Style {
  name: string = "";
  pdfUrl: string = "";
  htmlUrl: string = "";
  description: string = "";
  constructor(name: string, description: string) {
    this.name = name;
    this.htmlUrl = "/" + name.toLowerCase();
    this.pdfUrl = this.htmlUrl + "-pdf";
    this.description = description;
  }
}

export const FLAT = new Style(
  "Flat",
  "Standard black and white CV with full information. Your standard go to CV to show to prospective employers."
);
export const COLORFUL = new Style(
  "Colorful",
  "A flight of fancy, this format is a copy of the Flat format but with added colors and some other decorations. It's there to give a different view on how a CV can look like, but I wouldn't recommend it for serious use."
);
export const COMPACT = new Style(
  "Compact",
  "The most succinct of the formats, this is a way to show just the most essential information in the smallest space possible. For the people that likes one page summaries and elevator pitches."
);
export const LEFTRAIL = new Style(
  "Leftrail",
  "Left rail, shades of grey. A more elegant presentation with relevant information, but not all of it. A good choice to show your work."
);

export const STYLES = [FLAT, COLORFUL, COMPACT, LEFTRAIL];
export default Style;
