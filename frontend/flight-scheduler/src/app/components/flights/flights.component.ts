import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../../services/flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  flights: any[] = [];

  constructor(private flightsService: FlightsService) { }

  ngOnInit(): void {
  console.log("Flights component initialized");
  this.getFlights();
  }

  getFlights(): void {
    this.flightsService.getAllFlights().subscribe(
    data => {
      console.log(data);
      this.flights = data;
      },
      error => {
        console.error('There was an error retrieving flights!', error);
      }
    );
  }
}
