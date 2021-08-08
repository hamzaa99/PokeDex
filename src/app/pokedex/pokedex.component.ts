import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../services/pokemon/pokemon.service';
@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

   page: number | undefined ;
   start: number | undefined ;
   end: number | undefined ;
   totalResults: number | undefined;
   urlTable: any[] = [];

  constructor(private pokemonService: PokemonService) {

  }

  ngOnInit(): void {
    this.start = 0;
    this.getPokemons(this.start, 10);
    this.page = 1;
  }
  public setTable(): void{
    this.urlTable = [];
    if (this.page){
      this.start = ((this.page - 1) * 10) + 1 ;
    }
    else { this.start = 0; }
    this.getPokemons(this.start, 10);
    console.log(this.urlTable);

  }

  handlePageChange(event: any): void {
    console.log(this.page);
    console.log(event);
    this.page = event;
    this.setTable();
  }
  getPokemons(offset: number, limit: number): void{
    this.pokemonService.getPokemons(offset, limit).subscribe( res =>
    {
      this.totalResults = res.count;
      this.urlTable = res.results.map((elem: { url: any; }) => elem.url);
    }
    );

  }

}
