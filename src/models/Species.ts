export interface PokeMonSpeciesData {
  id: number;
  name: string;
  flavor_text_entries: Array<FlavorText>;
}

export interface FlavorText {
  flavor_text: string;
  language: Language;
}

export interface Language {
  name: string;
  url: string;
}
