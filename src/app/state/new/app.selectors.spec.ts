import { Pokemon } from '../../models/pokemon.model';
import { AppState } from '../shared/app.state';
import { selectAppState, selectPokemon } from './app.selectors';

const mockPokemon: Pokemon = {
  id: 25,
  name: 'Pikachu',
  sprites: {
    front_default: 'test',
  },
};

describe('AuthSelectors', () => {
  const appState: { new: AppState } = {
    new: {
      pokemon: mockPokemon,
    },
  };

  it('should get the whole app state', () => {
    expect(selectAppState(appState)).toEqual(appState.new);
  });

  it('should get the saved Pokémon', () => {
    expect(selectPokemon(appState)).toEqual(mockPokemon);
  });
});
