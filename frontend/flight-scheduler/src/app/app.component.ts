import { Component, OnInit } from '@angular/core';
import { AirportService } from './airports.service';
import { Airport } from './models/airport'; // Import the Airport interface

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'flight-scheduler';
  airports: Airport[] = []; // Use the Airport interface for the airports array

  constructor(private airportService: AirportService) { }

  ngOnInit(): void {
    this.airportService.getAirports().subscribe(
      (data: Airport[]) => { // Type the response with Airport[]
        this.airports = data;
      },
      (error: any) => {
        console.error('There was an error fetching airports!', error);
      }
    );
  }
}
