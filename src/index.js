import { getPokemons } from "./api/apiCalls.js";
import { updatePokemonList } from "./ui/pokemonListFunctions.js";
import { handleButtonClick } from "./ui/buttonEventHandlers.js";

const $previousButton = document.querySelector("#previous-button");
$previousButton.addEventListener("click", handleButtonClick);

const $nextButton = document.querySelector("#next-button");
$nextButton.addEventListener("click", handleButtonClick);

export async function init() {
  const data = await getPokemons();
  updatePokemonList(data);
}

init();
