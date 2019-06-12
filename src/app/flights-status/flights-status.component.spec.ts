import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsStatusComponent } from './flights-status.component';

describe('FlightsStatusComponent', () => {
  let component: FlightsStatusComponent;
  let fixture: ComponentFixture<FlightsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
