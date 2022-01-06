import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TypesComponent} from "./types/types.component";
import {TypeEmblemComponent} from "./components/type-emblem/type-emblem.component";
import {TypeService} from "./types/services/type.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TypesComponent,
    TypeEmblemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    TypeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
