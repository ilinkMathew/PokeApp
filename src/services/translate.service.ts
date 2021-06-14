import { PokeMon } from "../models/Pokemon";
import axios from "axios";
export async function translateDesc(pokemon: PokeMon) {
  const res = await axios.get(
    `https://api.funtranslations.com/translate/shakespeare.json?text=${pokemon.desc}`
  );
  return res.data["contents"]["translated"];
}
