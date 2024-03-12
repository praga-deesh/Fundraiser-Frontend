import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundraiserSignUpComponent } from './fundraiser-sign-up.component';

describe('FundraiserSignUpComponent', () => {
  let component: FundraiserSignUpComponent;
  let fixture: ComponentFixture<FundraiserSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundraiserSignUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundraiserSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
