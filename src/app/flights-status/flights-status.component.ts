import { Component, OnInit } from '@angular/core';
import { FlightsStatusService } from '../common/services/flights-status.service';

@Component({
  selector: 'app-flights-status',
  templateUrl: './flights-status.component.html',
  styleUrls: ['./flights-status.component.scss']
})
export class FlightsStatusComponent implements OnInit {

  flights: any;

  constructor(private flightStatusService: FlightsStatusService) { }

  ngOnInit() {
    this.flightStatusService.getFlightsStatus().subscribe( (data) => {
      this.flights = data.operationalFlights;
    });
  }

}
