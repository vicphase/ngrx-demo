import { createAction, props } from '@ngrx/store';
import { Pokemon } from '../../models/pokemon.model';

export const getRandomPokemon = createAction('[New App] Get random Pokémon');

export const getRandomPokemonSuccess = createAction(
  '[New App] Get random Pokémon success',
  props<{ pokemon: Pokemon }>()
);

export const getRandomPokemonFailed = createAction(
  '[New App] Get random Pokémon failed'
);
