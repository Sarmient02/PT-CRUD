import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {
  
  private API_URL = 'https://localhost:7289/api/'
  private API_CAR = 'Careers/'

  constructor(private http: HttpClient) { }

  getCareers(): Observable<any>{
    return this.http.get(`${this.API_URL}${this.API_CAR}`);
  }

  getCareerById(id: number): Observable<any>{
    return this.http.get(`${this.API_URL}${this.API_CAR}${id}`);
  }

  deleteCarrera(id: number): Observable<any>{
    return this.http.delete(`${this.API_URL}${this.API_CAR}${id}`);
  }

  saveCarrera(carrera: any): Observable<any>{
    return this.http.post(`${this.API_URL}${this.API_CAR}`, carrera);
  }

  updateCarrera(id: number, estudiante: any): Observable<any>{
    return this.http.put(`${this.API_URL}${this.API_CAR}${id}`, estudiante);
  }
}
