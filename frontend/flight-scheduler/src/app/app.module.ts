import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule
import { AirportsComponent } from './airports/airports.component'; // Import AirportsComponent

import { AppComponent } from './app.component';
// ... other imports

@NgModule({
  declarations: [
    AppComponent,
    AirportsComponent,
    // ... other declarations
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, // Include AppRoutingModule here
    // ... other modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
