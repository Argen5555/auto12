import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service, ServiceStatus } from '../model/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceModelService {
  private serviceUrl = 'api/services';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.serviceUrl);
  }

  getService(id: number): Observable<Service> {
    const url = `${this.serviceUrl}/${id}`;
    return this.http.get<Service>(url);
  }

  saveService(body: {}): Observable<Service> {
    return this.http.post<Service>(this.serviceUrl, body, this.httpOptions);
  }

  updateService(id: number, body: {}): Observable<Service> {
    const url = `${this.serviceUrl}/${id}`;
    return this.http.post<Service>(url, body, this.httpOptions);
  }

  updateStatus(id: number, status: ServiceStatus): Observable<Service>  {
    const url = `${this.serviceUrl}/${id}/status`;
    const body = {
      name: status
    }
    return this.http.post<Service>(url, body, this.httpOptions);
  }
}
