import {Component, Input, OnInit} from '@angular/core';
import {PokemonType} from "../../../models";

@Component({
  selector: 'pkmn-dtls-type-emblem',
  templateUrl: './type-emblem.component.html',
  styleUrls: ['./type-emblem.component.scss']
})
export class TypeEmblemComponent implements OnInit {
  link: string = 'https://pkmn-details-app.herokuapp.com/main.js'
  @Input() types: PokemonType[] = [];
  @Input() active: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
