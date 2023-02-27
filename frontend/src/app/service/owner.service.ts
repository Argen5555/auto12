import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';
import { Owner } from '../model/owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private ownersUrl = 'api/owners';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.ownersUrl);
  }

  getOwner(id: number): Observable<Owner> {
    const url = `${this.ownersUrl}/${id}`;
    return this.http.get<Owner>(url);
  }

  createOwner(): Observable<Owner> {
    return this.http.post<Owner>(this.ownersUrl, null, this.httpOptions);
  }

  updateOwner(id: number, body: {}): Observable<Owner> {
    const url = `${this.ownersUrl}/${id}`;
    return this.http.post<Owner>(url, body, this.httpOptions);
  }

  getOrders(id: number): Observable<Order[]> {
    const url = `${this.ownersUrl}/${id}/orders`;
    return this.http.get<Order[]>(url);
  }
}
