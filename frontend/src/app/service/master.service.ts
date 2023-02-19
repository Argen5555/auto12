import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Master } from '../model/master';

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
}
