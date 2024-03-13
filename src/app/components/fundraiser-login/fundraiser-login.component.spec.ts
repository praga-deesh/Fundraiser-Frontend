import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundraiserLoginComponent } from './fundraiser-login.component';

describe('FundraiserLoginComponent', () => {
  let component: FundraiserLoginComponent;
  let fixture: ComponentFixture<FundraiserLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundraiserLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundraiserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
