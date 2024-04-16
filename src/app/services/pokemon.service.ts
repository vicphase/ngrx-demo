import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pokemon } from '../models/pokemon.model';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  constructor(private http: HttpClient) {}

  getRandomPokemon(): Observable<Pokemon> {
    const pokemonThatExist = 1025;
    const randomNumber = Math.floor(Math.random() * pokemonThatExist + 1);
    return this.http.get<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${randomNumber}`
    );
  }
}
