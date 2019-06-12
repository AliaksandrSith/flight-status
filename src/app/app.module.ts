import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsStatusComponent } from './flights-status/flights-status.component';

import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './pagination/pagination.component';
import { FlightStatusTableComponent } from './flight-status-table/flight-status-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightsStatusComponent,
    PaginationComponent,
    FlightStatusTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
