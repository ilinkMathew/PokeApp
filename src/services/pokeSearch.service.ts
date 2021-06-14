import { PokeMonSpeciesData } from "../models/Species";
import axios from "axios";
import { PokeMon } from "../models/Pokemon";
import { translateDesc } from "./translate.service";
export function searchPokemonByName(name: string) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}/`);
}

export async function getShakespeareanDesc(searchText: string) {
  const speciesData = (await (
    await searchPokemonByName(searchText)
  ).data) as PokeMonSpeciesData;
  const [desc, shakespeareanDes, isFavourite] = [
    getFlavorText(speciesData),
    "",
    false,
  ];
  const pokemon: PokeMon = {
    ...speciesData,
    desc,
    shakespeareanDes,
    isFavourite,
  };
  pokemon.shakespeareanDes = await translateDesc(pokemon);
  return pokemon;
}

function getFlavorText(speciesData: PokeMonSpeciesData) {
  return speciesData.flavor_text_entries.filter(
    (entry) => entry.language.name === "en"
  )[0].flavor_text;
}
