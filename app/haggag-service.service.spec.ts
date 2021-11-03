import { TestBed } from '@angular/core/testing';

import { HaggagServiceService } from './haggag-service.service';


describe('HaggagServiceService', () => {
  let service: HaggagServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HaggagServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
