import { TestBed } from '@angular/core/testing';

import { ViewDonationsService } from './view-donations.service';

describe('ViewDonationsService', () => {
  let service: ViewDonationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewDonationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
