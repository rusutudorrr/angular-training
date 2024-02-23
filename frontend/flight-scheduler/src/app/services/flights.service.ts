import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private apiUrl = `${environment.apiUrl}flights/`;

  constructor(private http: HttpClient) { }

  getAllFlights(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map((response:any) => response['results'])
    );
  }
}
