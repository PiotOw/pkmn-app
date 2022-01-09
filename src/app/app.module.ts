import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TypesComponent} from "./types/types.component";
import {TypeService} from "./types/services/type.service";
import {HttpClientModule} from "@angular/common/http";
import {LazyElementsModule} from "@angular-extensions/elements";
import {TypeEmblemModule} from "./pkmn-details-components/type-emblem/type-emblem.module";
import {PokemonModule} from "./pkmn-details-components/pokemon/pokemon.module";

@NgModule({
  declarations: [
    AppComponent,
    TypesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LazyElementsModule,
    TypeEmblemModule,
    PokemonModule
  ],
  providers: [
    TypeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
