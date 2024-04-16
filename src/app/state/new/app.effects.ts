import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { PokemonService } from '../../services/pokemon.service';
import * as AppActions from './app.actions';

@Injectable()
export class AppNewEffects {
  constructor(
    private pokemonService: PokemonService,
    private actions: Actions
  ) {}

  getRandomPokemon$ = createEffect(() =>
    this.actions.pipe(
      ofType(AppActions.getRandomPokemon),
      mergeMap(() =>
        this.pokemonService.getRandomPokemon().pipe(
          map((pokemon) => AppActions.getRandomPokemonSuccess({ pokemon })),
          catchError(() => of(AppActions.getRandomPokemonFailed()))
        )
      )
    )
  );
}
