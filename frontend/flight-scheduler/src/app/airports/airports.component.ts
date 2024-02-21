import { Component, OnInit } from '@angular/core';
import { AirportService } from '../airports.service';
import { Airport, AirportResponse } from '../models/airport';


@Component({
  selector: 'app-airports',
  templateUrl: '../airports/airports.component.html',
  styleUrls: ['../airports/airports.component.css']
})
export class AirportsComponent implements OnInit {
  airports!: Airport[];



  constructor(private airportService: AirportService) {}

  ngOnInit() {
    this.airportService.getAirports().subscribe(
      (airports: Airport[]) => {
        this.airports = airports;
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );

  }
}
