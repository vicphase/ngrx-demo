import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';
import * as AppActions from './app.actions';
import { AppNewEffects } from './app.effects';

const mockPokemon: Pokemon = {
  id: 25,
  name: 'Pikachu',
  sprites: {
    front_default: 'test',
  },
};

describe('AppNewEffects', () => {
  let effects: AppNewEffects;
  let service: PokemonService;
  let actions$ = new Observable<Action>();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppNewEffects,
        provideMockActions(() => actions$),
        { provide: PokemonService, useValue: { getRandomPokemon: jest.fn() } },
      ],
    });
    effects = TestBed.inject(AppNewEffects);
    service = TestBed.inject(PokemonService);
  });

  it('should return a getRandomPokemonSuccess action on success', () => {
    const action = AppActions.getRandomPokemon();
    const completion = AppActions.getRandomPokemonSuccess({
      pokemon: mockPokemon,
    });

    actions$ = hot('-a', { a: action });
    const response = cold('-b|', { b: mockPokemon });
    const expected = cold('--c', { c: completion });

    jest.spyOn(service, 'getRandomPokemon').mockReturnValue(response);

    expect(effects.getRandomPokemon$).toBeObservable(expected);
  });

  it('should return a GetCompanySuggestionFailed action on failed', () => {
    const action = AppActions.getRandomPokemon();
    const completion = AppActions.getRandomPokemonFailed();
    const error = 'Unable to get random Pokémon';

    actions$ = hot('-a', { a: action });
    const response = cold('-#|', {}, error);
    const expected = cold('--c', { c: completion });

    jest.spyOn(service, 'getRandomPokemon').mockReturnValue(response);

    expect(effects.getRandomPokemon$).toBeObservable(expected);
  });
});
