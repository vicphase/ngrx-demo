import { Pokemon } from '../../models/pokemon.model';

export const GET_RANDOM_POKEMON = '[Old App] Get Random Pokémon';
export const GET_RANDOM_POKEMON_SUCCESS = '[Old App] Get Random Pokémon Success';
export const GET_RANDOM_POKEMON_FAILED = '[Old App] Get Random Pokémon Failed';

export class GetRandomPokemon {
  readonly type = GET_RANDOM_POKEMON;
}

export class GetRandomPokemonSuccess {
  readonly type = GET_RANDOM_POKEMON_SUCCESS;
  constructor(public pokemon: Pokemon) {}
}

export class GetRandomPokemonFailed {
  readonly type = GET_RANDOM_POKEMON_FAILED;
}

export type AppActions =
  | GetRandomPokemon
  | GetRandomPokemonSuccess
  | GetRandomPokemonFailed;
