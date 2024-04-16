import { AppState } from '../shared/app.state';
import * as AppActions from './app.actions';

const initialState: AppState = { pokemon: null };

export function reducer(
  state = initialState,
  action: AppActions.AppActions
): AppState {
  switch (action.type) {
    case AppActions.GET_RANDOM_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: action.pokemon,
      };
    default:
      return state;
  }
}
