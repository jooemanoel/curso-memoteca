import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pensamento } from '../shared/pensamento';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://127.0.0.1:3000/pensamentos';
  itensPorPagina: number = 3;
  constructor(private http: HttpClient) { }

  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API);
  }

  listarPagina(pagina: number, filtro?: string): Observable<Pensamento[]> {
    let params = new HttpParams().set("_page", pagina).set("_limit", this.itensPorPagina);
    if (filtro && filtro.trim().length > 2) {
      params = params.set("q", filtro);
    }
    return this.http.get<Pensamento[]>(this.API, { params });
  }

  listarFavoritos(pagina: number, filtro?: string): Observable<Pensamento[]> {
    let params = new HttpParams().set("_page", pagina).set("_limit", this.itensPorPagina).set("favorito", true);
    if (filtro && filtro.trim().length > 2) {
      params = params.set("q", filtro);
    }
    return this.http.get<Pensamento[]>(this.API, { params });
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento);
  }
  buscar(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.get<Pensamento>(url);
  }
  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<Pensamento>(url, pensamento);
  }
  excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Pensamento>(url);
  }
}
