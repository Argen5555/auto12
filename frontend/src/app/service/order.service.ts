import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order, OrderStatus } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ordersUrl = 'api/orders';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl);
  }

  getOrder(id: number): Observable<Order> {
    const url = `${this.ordersUrl}/${id}`;
    return this.http.get<Order>(url);
  }

  calculatePrice(id: number): Observable<number> {
    const url = `${this.ordersUrl}/${id}/price`;
    return this.http.get<number>(url);
  }

  saveOrder(body: {}): Observable<Order> {
    return this.http.post<Order>(this.ordersUrl, body, this.httpOptions);
  }

  updateOrder(id: number, body: {}): Observable<Order> {
    const url = `${this.ordersUrl}/${id}`;
    return this.http.post<Order>(url, body, this.httpOptions);
  }

  updateStatus(id: number, status: OrderStatus): Observable<Order> {
    const url = `${this.ordersUrl}/${id}/status`;
    const body = {
      name: status
    }
    return this.http.post<Order>(url, body, this.httpOptions);
  }
}
