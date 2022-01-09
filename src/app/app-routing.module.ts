import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TypesComponent} from "./types/types.component";
import {PokemonComponent} from "./pkmn-details-components/pokemon/pokemon.component";

const routes: Routes = [
  {path: '', component: TypesComponent},
  {path: 'pokemon/:id', component: PokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
