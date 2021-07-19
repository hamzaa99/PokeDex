import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PokedexComponent} from './pokedex/pokedex.component';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'pokedex/:page', component : PokedexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
