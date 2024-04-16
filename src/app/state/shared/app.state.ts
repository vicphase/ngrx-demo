import { Pokemon } from '../../models/pokemon.model';

export interface AppState {
  pokemon: Pokemon | null;
}
