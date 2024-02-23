import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AirportService {
  private apiUrl = `${environment.apiUrl}airports/`; // Update with your actual API URL

  constructor(private http: HttpClient) { }

  getAllAirports(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map((response: any) => response['results'])
    );
  }
}
