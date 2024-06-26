import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RutinaService {
  private apiUrl = 'http://localhost:8080/api/v1/rutinas-ejercicio'; // Asegúrate de que la URL sea correcta

  constructor(private http: HttpClient) {}

  getAllRutinas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createRutina(rutina: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, rutina);
  }

  updateRutina(rutinaId: number, rutinaData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${rutinaId}`, rutinaData);
  }

  deleteRutina(rutinaId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${rutinaId}`);
  }

  getRoutines(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
