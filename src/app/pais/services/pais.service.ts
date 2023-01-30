import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  private params = new HttpParams()
    .set('fields', 'name,capital,region,population,flags,cca3');

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Pais[]> {

    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Pais[]>(url, {params: this.params}); // return an observable tipo Pais

  }

  buscarCapital(termino: string): Observable<Pais[]> {

    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Pais[]>(url, { params: this.params });
    
  }

  buscarRegion(termino: string): Observable<Pais[]> {

    const url = `${this.apiUrl}/region/${termino}`;
    return this.http.get<Pais[]>(url, { params: this.params });
    
  }

  getPaisPorAlpha(id: string): Observable<Pais[]> {

    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Pais[]>(url);
  }
}
