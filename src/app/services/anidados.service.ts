import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Marca } from '../models/marca';

@Injectable({
  providedIn: 'root'
})
export class AnidadosService {

  private baseURL = 'http://localhost:8080/marcas';
  private httpHeaders = new HttpHeaders({ 'ContentType': 'application/json' });

  constructor(private httpClient: HttpClient) { }

  getCoches(): Observable<Marca[]> {
    return this.httpClient.get(this.baseURL).pipe(
      map(coches => coches as Marca[])
    );
  }
}
