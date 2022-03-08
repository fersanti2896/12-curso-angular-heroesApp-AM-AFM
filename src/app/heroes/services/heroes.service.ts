import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interface/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private apiURL = 'http://localhost:3000/heroes';

  /* Inyectamos el servicio para hacer las peticiones Http */
  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(this.apiURL);
  }

  getHeroeById(id: string): Observable<Heroe> {
    const url = `${this.apiURL}/${id}`;

    return this.http.get<Heroe>(url);
  }
}
