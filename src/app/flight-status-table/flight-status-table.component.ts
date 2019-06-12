import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flight-status-table',
  templateUrl: './flight-status-table.component.html',
  styleUrls: ['./flight-status-table.component.scss']
})
export class FlightStatusTableComponent implements OnInit {

  @Input() flights: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
