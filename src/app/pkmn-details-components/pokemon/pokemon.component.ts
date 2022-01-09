import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'pkmn-dtls-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  public link: string = 'http://localhost:3000/main.js'

  public pokemonId: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.pokemonId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
  }

}
