import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TypesComponent} from "./types/types.component";

const routes: Routes = [
  {path: '', component: TypesComponent},
  {path: 'pokemons', loadChildren: './pokemons/pokemons.module#PokemonsModule'},
  {path: 'pokemon/:id', loadChildren: './pokemon/pokemon.module#PokemonModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
