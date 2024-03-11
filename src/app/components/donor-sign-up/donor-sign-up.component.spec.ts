import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorSignUpComponent } from './donor-sign-up.component';

describe('DonorSignUpComponent', () => {
  let component: DonorSignUpComponent;
  let fixture: ComponentFixture<DonorSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonorSignUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonorSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
