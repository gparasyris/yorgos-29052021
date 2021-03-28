import { IConfiguration } from '@interfaces/configuration.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  get(url: string): Observable<IConfiguration>{
    return this.http.get<IConfiguration>(url);
  }
}