import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Good } from '../model/good';

@Injectable({
  providedIn: 'root'
})
export class GoodService {
  private goodsUrl = 'api/goods';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getGoods(): Observable<Good[]> {
    return this.http.get<Good[]>(this.goodsUrl);
  }

  getGood(id: number): Observable<Good> {
    const url = `${this.goodsUrl}/${id}`;
    return this.http.get<Good>(url);
  }

  saveGood(body: {}): Observable<Good> {
    return this.http.post<Good>(this.goodsUrl, body, this.httpOptions);
  }

  updateGood(id: number, body: {}): Observable<Good> {
    const url = `${this.goodsUrl}/${id}`;
    return this.http.post<Good>(url, body, this.httpOptions);
  }
}
