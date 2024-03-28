import { Component } from '@angular/core';
import { Donor } from '../../model/donor';
import { FormsModule } from '@angular/forms';
import { DonorService } from '../../services/donor.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';
import { LoginbuttonService } from '../../services/loginbutton.service';
import { MatSnackBarService } from '../../services/mat-snack-bar.service';

@Component({
  selector: 'app-donor-login',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './donor-login.component.html',
  styleUrl: './donor-login.component.css'
})
export class DonorLoginComponent {
  message:string="";
  errorMessage:string="";
  constructor(private donorService:DonorService,private router:Router,public navbarService: NavbarService,public loginbuttonService:LoginbuttonService,public matsnackBarService:MatSnackBarService)
  {
    this.navbarService.hideNavBar();
    this.loginbuttonService.hideLoginButton();
    
  }
  email:string="";
  password:string="";
  isLoggedIn:boolean=false;
  
  loginDonor()
  {
    this.donorService.loginDonor(this.email,this.password).subscribe(
      {
        next:(data)=>{
          console.log(data);
          let user={id:data.id,name:data.name,email:data.email,role:"donor",accountId:data.accountId,balance:data.accountBalance};
          sessionStorage.setItem("user",JSON.stringify(user));
          this.message="Logged in successfully!!!";
          
          // this.router.navigateByUrl('home');

          setTimeout(() => {
            this.message = '';
            this.router.navigateByUrl('home'); // Navigate to another page
          }, 2000);
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
  registerDonor()
  {
    this.router.navigateByUrl('donor-sign-up');
    this.isLoggedIn=true;
  }
  redirectToFundraiserLogin()
  {
    this.router.navigateByUrl('fundraiser-login');
  }

}
