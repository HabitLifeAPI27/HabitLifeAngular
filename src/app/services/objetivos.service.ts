import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjetivoService {
  private apiUrl = 'http://localhost:8080/api/v1/objetivos'; // Cambia esto por la URL de tu backend

  constructor(private http: HttpClient) {}

  crearObjetivo(objetivo: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, objetivo);
  }

  editarObjetivo(id: number, objetivo: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, objetivo);
  }

  obtenerObjetivos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAllObjetivos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteObjetivo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}
