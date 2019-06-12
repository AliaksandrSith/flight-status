import { Component, OnInit,  Input} from '@angular/core';
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
  filteredFlights: any;

  @Input()
  destFilter: string;

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

  filterOnDestination(dest) {
    this.page.pageNumber = 0;
    this.setFlights();
  }

  private setFlights() {
    if (this.destFilter) {
      this.filteredFlights = this.allFlights.filter((flight) => {
        return flight.route[1].indexOf(this.destFilter) !== -1;
      });
      } else {
      this.filteredFlights = this.allFlights;
    }
    this.page.totalPages = Math.ceil(this.filteredFlights.length / this.page.pageSize);

    this.flights = this.filteredFlights.slice(this.page.pageNumber * this.page.pageSize,
      Math.min(this.page.fullCount, (this.page.pageNumber + 1) * this.page.pageSize));
  }
}
