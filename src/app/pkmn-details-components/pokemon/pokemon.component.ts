import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'pkmn-dtls-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  public link: string = 'https://pkmn-details-app.herokuapp.com/main.js'

  public pokemonId: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.pokemonId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
  }

}
