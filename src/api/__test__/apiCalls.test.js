import { getPokemons } from "../apiCalls.js";
import { getPokemonDetails } from "../apiCalls.js";

jest.mock("../apiCalls.js", () => ({
  getPokemons: jest.fn(),
  getPokemonDetails: jest.fn(),
}));

describe("Testing Pokémon API with fixtures", () => {
  test("Fetching Pokémon with mocked response", async () => {
    // Define fixture
    const mockPokemons = [
      { id: 1, name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      { id: 2, name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
    ];
    // Mock config
    getPokemons.mockResolvedValue(mockPokemons);
    // Call getPokemons function
    const result = await getPokemons();
    // Verify that the function was called
    expect(getPokemons).toHaveBeenCalled();
    // Verify the result using the fixture
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining(mockPokemons[0]),
        expect.objectContaining(mockPokemons[1]),
      ])
    );
  });
});
