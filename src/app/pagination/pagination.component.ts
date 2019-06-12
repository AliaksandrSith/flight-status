import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() page: any;
  @Output() eventEmitter = new EventEmitter<string>();
  totalPages;

  constructor() {}

  ngOnInit() {}

  displayPage(i: string) {
    this.eventEmitter.next(i);
  }

}
