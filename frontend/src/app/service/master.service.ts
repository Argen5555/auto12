import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Master } from '../model/master';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private mastersUrl = 'api/masters';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getMasters(): Observable<Master[]> {
    return this.http.get<Master[]>(this.mastersUrl);
  }

  getMaster(id: number): Observable<Master> {
    const url = `${this.mastersUrl}/${id}`;
    return this.http.get<Master>(url);
  }

  calculateSalary(id: number): Observable<number> {
    const url = `${this.mastersUrl}/${id}/salary`;
    return this.http.get<number>(url);
  }

  saveMaster(body: {}): Observable<Master> {
    return this.http.post<Master>(this.mastersUrl, body, this.httpOptions);
  }

  updateMaster(id: number, body: {}): Observable<Master> {
    const url = `${this.mastersUrl}/${id}`;
    return this.http.post<Master>(url, body, this.httpOptions);
  }

  getOrders(id: number): Observable<Order[]> {
    const url = `${this.mastersUrl}/${id}/orders`;
    return this.http.get<Order[]>(url);
  }
}
