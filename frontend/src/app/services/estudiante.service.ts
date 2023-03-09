import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private API_URL = 'https://localhost:7289/api/'
  private API_EST = 'Students/'

  constructor(private http: HttpClient) { }

  getEstudiantes(): Observable<any>{
    return this.http.get(`${this.API_URL}${this.API_EST}`);
  }

  getEstudianteById(id: number): Observable<any>{
    return this.http.get(`${this.API_URL}${this.API_EST}${id}`);
  }

  deleteEstudiante(id: number): Observable<any>{
    return this.http.delete(`${this.API_URL}${this.API_EST}${id}`);
  }

  saveEstudiante(estudiante: any): Observable<any>{
    return this.http.post(`${this.API_URL}${this.API_EST}`, estudiante);
  }

  updateEstudiante(id: number, estudiante: any): Observable<any>{
    return this.http.put(`${this.API_URL}${this.API_EST}${id}`, estudiante);
  }
}
