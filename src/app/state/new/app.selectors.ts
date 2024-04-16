import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../shared/app.state';

export const selectAppState = createFeatureSelector<AppState>('new');

export const selectPokemon = createSelector(
  selectAppState,
  (state: AppState) => state.pokemon
);
