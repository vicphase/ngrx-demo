import { Pokemon } from '../../models/pokemon.model';
import * as AppActions from './app.actions';
import { initialState, reducer } from './app.reducer';

const mockPokemon: Pokemon = {
  id: 25,
  name: 'Pikachu',
  sprites: {
    front_default: 'test',
  },
};

describe('AppNewReducer', () => {
  it('should get the state', () => {
    const action = AppActions.getRandomPokemon();
    const state = reducer(undefined, action);

    expect(state).toEqual(initialState);
  });

  it('should save the random Pokémon', () => {
    const action = AppActions.getRandomPokemonSuccess({ pokemon: mockPokemon });
    const state = reducer(initialState, action);

    expect(state.pokemon).toEqual(mockPokemon);
  });
});
