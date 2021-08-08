import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url = 'https://pokeapi.co/api/v2';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:no-shadowed-variable
  getOnePokemon(pokemonUrl: string): Observable<any> {
  return this.http.get<any>(pokemonUrl);
}
  getPokemons(offset: number, limit: number): Observable<any> {
    return this.http.get<any>(this.url + `/pokemon/?offset=${offset}&limit=${limit}`);
  }


}
