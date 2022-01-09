import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponse, Type} from "../../../models";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private BASE_API_URL: string = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {
  }

  getTypes(): Observable<ApiResponse<Type[]>> {
    return this.http.get<ApiResponse<Type[]>>(`${this.BASE_API_URL}/type`)
  }

  getRandomPokemonIdOfType(typeId: number): Observable<number> {
    return this.http.get(`${this.BASE_API_URL}/type/${typeId}`)
      .pipe(
        map((res: any) => {
          const entry: any = res.pokemon[Math.floor(Math.random() * (res.pokemon.length + 1))];
          const urlArr: string[] = entry.pokemon.url.split('/');
          return Number(urlArr[urlArr.length - 2]);
        })
      )
  }
}
