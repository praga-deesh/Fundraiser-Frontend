import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Donor } from '../../model/donor';
import { DonorService } from '../../services/donor.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-donor-sign-up',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './donor-sign-up.component.html',
  styleUrl: './donor-sign-up.component.css'
})
export class DonorSignUpComponent {
  message:string="";
  errorMessage:string="";
  constructor(private donorService:DonorService,private router:Router){}
  newDonor:Donor=new Donor();
  signUp()
  {
    this.donorService.createNewDonor(this.newDonor).subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.message="Registered Successfully!!";
          setTimeout(() => {
            this.message = '';
            this.router.navigateByUrl('donor-login'); // Navigate to another page
          }, 2000);
          // this.router.navigateByUrl('donor-login');
          this.errorMessage="";
        },
        error:(err)=>{
          console.log(err);
          // this.errorMessage="Couldn't add account";
          this.errorMessage="Registration Failed!!!";
          this.message="";
        }
      }
    )
  }
}
