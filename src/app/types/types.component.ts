import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {ApiResponse, PokemonType, Type} from "../../models";
import {TypeService} from "./services/type.service";

@Component({
	selector: 'pok-types',
	templateUrl: './types.component.html',
	styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {

	pokemonTypes: PokemonType[] | undefined;
	breakpoint: number | undefined;
	widthClass: string | undefined;

	private unsubscribe$ = new Subject<void>();


	constructor(private typeService: TypeService) {
	}

	ngOnInit() {
		this.breakpoint = Math.floor(window.innerWidth / 210);
		if(this.breakpoint > 5) {
			this.breakpoint = 5;
		}
		else if(this.breakpoint == 0){
			this.breakpoint = 1;
		}
		this.getTypes();
	}

	onClickTest(index: number): void {
	}

	onResize(event: any): void {
		this.breakpoint = Math.floor(window.innerWidth / 210);
		if(this.breakpoint > 5) {
			this.breakpoint = 5;
		}
		else if(this.breakpoint == 0){
			this.breakpoint = 1;
		}
		this.widthClass = "types-emblem-container-" + this.breakpoint;
		console.log(this.widthClass);
	}

	getTypes(): void {
		this.typeService.getTypes()
			.pipe(takeUntil(this.unsubscribe$))
			.subscribe((response: ApiResponse<Type[]>) => {
				this.pokemonTypes = response.results.map(type => PokemonType.fromType(type));
			})
	}
}
