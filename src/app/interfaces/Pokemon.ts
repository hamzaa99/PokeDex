interface Pokemon{
  id: number;
  name: string;
  types: PokemonType[];
  pictures: string[];
  abilities?: Ability[];
}
