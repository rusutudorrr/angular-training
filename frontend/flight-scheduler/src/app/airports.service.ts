import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Airport } from './models/airport';

@Injectable({
  providedIn: 'root'
})
export class AirportService {
  private apiUrl = 'http://localhost:8000/api/airports/'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // In your airport.service.ts
  getAirports(): Observable<Airport[]> {
    return this.http.get<Airport[]>(this.apiUrl);
    }
}
