import { Component } from '@angular/core';
import { Donor } from '../../model/donor';
import { FormsModule } from '@angular/forms';
import { DonorService } from '../../services/donor.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-donor-login',
  standalone: true,
  imports: [FormsModule,CommonModule ],
  templateUrl: './donor-login.component.html',
  styleUrl: './donor-login.component.css'
})
export class DonorLoginComponent {
  message:string="";
  errorMessage:string="";
  constructor(private donorService:DonorService,private router:Router){}
  email:string="";
  password:string="";
  // donor:Donor=new Donor();
  loginDonor()
  {
    this.donorService.loginDonor(this.email,this.password).subscribe(
      {
        next:(data)=>{
          console.log(data);
          let user={id:data.id,name:data.name,email:data.email,role:"donor"};
          sessionStorage.setItem("user",JSON.stringify(user));
          this.message="Logged in successfully!!!";
          this.errorMessage="";
        },
        error:(err)=>{
          console.log(err);
          // this.errorMessage="Couldn't add account";
          this.errorMessage="Logged in failed";
          // this.errorMessage=err.errorMessage;
          this.message="";
        }
      }
    )
    

  }
  register()
  {
    this.router.navigateByUrl('donor-sign-up');
  }


}
