import { createReducer, on } from '@ngrx/store';

import { AppState } from '../shared/app.state';
import * as AppActions from './app.actions';

export const initialState: AppState = { pokemon: null };

export const reducer = createReducer(
  initialState,
  on(AppActions.getRandomPokemonSuccess, (state, { pokemon }) => ({
    ...state,
    pokemon,
  }))
);

