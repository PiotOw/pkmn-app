import { CommonModule } from '@angular/common';
import { TypeEmblemComponent } from './type-emblem.component';
import {LazyElementsModule} from "@angular-extensions/elements";
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";



@NgModule({
  declarations: [
    TypeEmblemComponent
  ],
  imports: [
    CommonModule,
    LazyElementsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    TypeEmblemComponent
  ]
})
export class TypeEmblemModule { }
