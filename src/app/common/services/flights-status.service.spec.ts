import { TestBed } from '@angular/core/testing';

import { FlightsStatusService } from './flights-status.service';

describe('FlightsStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlightsStatusService = TestBed.get(FlightsStatusService);
    expect(service).toBeTruthy();
  });
});
