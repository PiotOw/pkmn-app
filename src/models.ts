export interface Pokemon {
	abilities: Ability[];
	base_experience: number;
	height: number;
	id: number;
	weight: number;
	name: string;
	stats: Stat[];
	types: PokemonType[];
}

export interface Ability {
	effect_entries: Effect[];
	id: number;
	name: string;
}

export interface Effect {
	effect: string;
	language: Language;
	short_effect: string;
}

export interface DamageRelation {
	double_damage_from: DamageRelationType[];
	double_damage_to: DamageRelationType[];
	half_damage_from: DamageRelationType[];
	half_damage_to: DamageRelationType[];
	no_damage_from: DamageRelationType[];
	no_damage_to: DamageRelationType[];
}

export interface DamageRelationType {
	name: string;
}

export class PokemonType {

	constructor() {
		this.type = {
			name: ''
		};
	}

	type: {
		name: string;
	};

	static fromType(type: Type): PokemonType {
		const pokemonType = new PokemonType();
		pokemonType.type.name = type.name;
		return pokemonType;
	}
}

export interface Type {
	name: string;
}

export interface PokemonName {
	name: string;
}

export interface DamageType {
	name: string;
	id: number;
}

export interface Species {
	evolution_chain: EvolutionChain;
	growth_rate: GrowthRate;
	id: number;
	name: string;
	varieties: Pokemon[];
}

export interface EvolutionChain {
	chain: Evolution;
	id: number;
}

export interface Language {
	id: number;
	name: string;
}

export interface Stat {
	base_stat: number;
	stat: StatType;
}

export interface StatType {
	name: string;
}

export interface GrowthRate {
	name: string;
	id: number;
}

export interface Evolution {
	evolves_to: Evolution[];
	species: Species;
}

export interface ApiResponse<T> {
	count: number;
	results: T;
}
