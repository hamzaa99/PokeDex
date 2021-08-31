import { Component, OnInit, Input } from '@angular/core';
import {PokemonService} from '../services/pokemon/pokemon.service';
import {map} from 'lodash';



@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  @Input() pokemonId: string | undefined;

  pokemon: Pokemon = {
    name : '',
    id : 0,
    types : [],
    pictures : []
  };
  static pokeTypeColorMap(typeName: string): string {
    switch (typeName) {
      case 'grass' : return 'green';
      case 'poison' : return 'purple';
      case 'water' : return 'blue';
      case 'fire' : return 'red';
      case 'bug' : return 'green';
      default : return 'gray';
    }
  }

  ngOnInit(): void {
    if (this.pokemonId !== undefined){
      this.pokemonService.getOnePokemon(this.pokemonId).subscribe(res => {
        this.pokemon.name = res.name;
        this.pokemon.id = res.id;
        this.pokemon.types = map(res.types, this.pokeTypeFormat);
        this.pokemon.pictures.push(res.sprites.other.dream_world.front_default);
      });
    }
  }
  pokeTypeFormat(pokemonType: any): PokemonType {
    return {
      name : pokemonType.type.name,
      color: PokemonCardComponent.pokeTypeColorMap(pokemonType.type.name),
      id: pokemonType.type.id
    };

  }

}
