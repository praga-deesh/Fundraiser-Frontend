import { TestBed } from '@angular/core/testing';

import { FundraiserProfileService } from './fundraiser-profile.service';

describe('FundraiserProfileService', () => {
  let service: FundraiserProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundraiserProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
