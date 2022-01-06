import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponse, Type} from "../../../models";

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
}
