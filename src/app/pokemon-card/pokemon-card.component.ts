import { Component, OnInit, Input } from '@angular/core';
import {PokemonService} from '../services/pokemon/pokemon.service';



@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemonId: number | undefined;

  pokemon: Pokemon = {
    name : '',
    id : 0,
    types : [],
    pictures : []
  };

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    if (this.pokemonId !== undefined){
      this.pokemonService.getOnePokemon(this.pokemonId).subscribe(res => {
        this.pokemon.name = res.name;
        this.pokemon.id = res.id;
        // tslint:disable-next-line:no-shadowed-variable
        for (const element of res.types) {
          this.pokemon.types.push({
            name : element.type.name,
            id : element.type.url,
            color : this.pokeTypeColorMap(element.type.name)});
        }
        this.pokemon.pictures.push(res.sprites.other.dream_world.front_default);
      });
    }
  }
  pokeTypeColorMap(typeName: string): string {
    switch (typeName) {
      case 'grass' : return 'green';
      case 'poison' : return 'purple';
      case 'water' : return 'blue';
      case 'fire' : return 'red';
      case 'bug' : return 'green';
      default : return 'gray';
    }
  }

}
