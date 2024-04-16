import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { PokemonService } from '../../services/pokemon.service';
import * as AppActions from './app.actions';

@Injectable()
export class AppOldEffects {
  constructor(
    private pokemonService: PokemonService,
    private actions: Actions
  ) {}

  // @Effect()
  // This is the old way but ngrx 17 doesn't provide this input anymore :(
  // getRandomPokemon$ = this.actions.pipe(
  //   ofType(AppActions.GET_RANDOM_POKEMON),
  //   mergeMap(() =>
  //     this.pokemonService.getRandomPokemon().pipe(
  //       map((pokemon) => new AppActions.GetRandomPokemonSuccess(pokemon)),
  //       catchError(() => of(new AppActions.GetRandomPokemonFailed()))
  //     )
  //   )
  // );

  getRandomPokemon$ = createEffect(() =>
    this.actions.pipe(
      ofType(AppActions.GET_RANDOM_POKEMON),
      mergeMap(() =>
        this.pokemonService.getRandomPokemon().pipe(
          map((pokemon) => new AppActions.GetRandomPokemonSuccess(pokemon)),
          catchError(() => of(new AppActions.GetRandomPokemonFailed()))
        )
      )
    )
  );
}
