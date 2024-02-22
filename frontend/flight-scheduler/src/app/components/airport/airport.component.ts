import { Component, OnInit } from '@angular/core';
import { AirportService } from '../../services/airport.service'; // Update the path if necessary

@Component({
  selector: 'app-airports',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
export class AirportComponent implements OnInit {
  airports: any[] = [];

  constructor(private airportService: AirportService) { }

  ngOnInit(): void {
    console.log('Airports component initialized');
    this.getAirports();
  }
  

  getAirports(): void {
    this.airportService.getAllAirports().subscribe(
      data => {
        console.log(data); // Add this line to see what you're receiving
        this.airports = data;
      },
      error => {
        console.error('There was an error retrieving airports!', error);
      }
    );
  }
}
