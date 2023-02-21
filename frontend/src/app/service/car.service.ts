import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private carUrl = 'api/cars';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carUrl);
  }

  getCar(id: number): Observable<Car> {
    const url = `${this.carUrl}/${id}`;
    return this.http.get<Car>(url);
  }

  saveCar(body: {}): Observable<Car> {
    return this.http.post<Car>(this.carUrl, body, this.httpOptions);
  }

  updateCar(id: number, body: {}): Observable<Car> {
    const url = `${this.carUrl}/${id}`;
    return this.http.post<Car>(url, body, this.httpOptions);
  }
}
