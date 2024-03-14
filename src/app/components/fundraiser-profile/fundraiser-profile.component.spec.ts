import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundraiserProfileComponent } from './fundraiser-profile.component';

describe('FundraiserProfileComponent', () => {
  let component: FundraiserProfileComponent;
  let fixture: ComponentFixture<FundraiserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundraiserProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundraiserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
