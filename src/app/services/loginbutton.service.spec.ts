import { TestBed } from '@angular/core/testing';

import { LoginbuttonService } from './loginbutton.service';

describe('LoginbuttonService', () => {
  let service: LoginbuttonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginbuttonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
