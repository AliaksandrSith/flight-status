import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightStatusTableComponent } from './flight-status-table.component';

describe('FlightStatusTableComponent', () => {
  let component: FlightStatusTableComponent;
  let fixture: ComponentFixture<FlightStatusTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightStatusTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightStatusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
