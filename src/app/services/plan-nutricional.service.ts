import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanNutricionalService {
  private apiUrl = 'http://localhost:8080/api/v1/planes-nutricionales'; // Cambia esto por la URL de tu backend

  constructor(private http: HttpClient) {}

  crearPlanNutricional(plan: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, plan);
  }

  obtenerPlanNutricional(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/buscar-id/${id}`);
  }

  actualizarPlanNutricional(id: number, plan: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, plan);
  }

  obtenerTodosLosPlanes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  eliminarPlanNutricional(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
