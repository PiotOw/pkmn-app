import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokemonComponent} from './pokemon.component';
import {LazyElementsModule} from "@angular-extensions/elements";


@NgModule({
  declarations: [
    PokemonComponent
  ],
  imports: [
    CommonModule,
    LazyElementsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    PokemonComponent
  ]
})
export class PokemonModule {
}
