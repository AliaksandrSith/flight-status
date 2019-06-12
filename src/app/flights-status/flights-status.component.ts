import { Component, OnInit } from '@angular/core';
import { FlightsStatusService } from '../common/services/flights-status.service';

@Component({
  selector: 'app-flights-status',
  templateUrl: './flights-status.component.html',
  styleUrls: ['./flights-status.component.scss']
})
export class FlightsStatusComponent implements OnInit {

  allFlights: any;
  page: any;
  flights: any;

  constructor(private flightStatusService: FlightsStatusService) {

  }

  ngOnInit() {
    this.flightStatusService.getFlightsStatus().subscribe( (data) => {
      this.page = data.page;
      this.allFlights = data.operationalFlights;

      this.setFlights();
    });
  }

  displayPage(i) {
    this.page.pageNumber = i;
    this.setFlights();
  }

  private setFlights() {
    this.flights = this.allFlights.slice(this.page.pageNumber * this.page.pageSize,
      Math.min(this.page.fullCount, (this.page.pageNumber + 1) * this.page.pageSize));
  }
}
