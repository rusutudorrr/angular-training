import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirportComponent } from '../app/components/airport/airport.component';
import { FlightsComponent } from '../app/components/flights/flights.component';

export const routes: Routes = [
  { path: 'airports', component: AirportComponent },
  { path: 'flights', component: FlightsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
