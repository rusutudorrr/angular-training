import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirportComponent } from '../app/components/airport/airport.component'; // Adjust the path as necessary

export const routes: Routes = [
  { path: 'airports', component: AirportComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
