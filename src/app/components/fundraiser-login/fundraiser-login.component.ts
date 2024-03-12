import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FundraiserService } from '../../services/fundraiser.service';
@Component({
  selector: 'app-fundraiser-login',
  standalone: true,
  imports: [FormsModule ,CommonModule],
  templateUrl: './fundraiser-login.component.html',
  styleUrl: './fundraiser-login.component.css'
})
export class FundraiserLoginComponent
 {
    message:string="";
    errorMessage:string="";
    constructor(private fundraiserService:FundraiserService,private router:Router){}
    email:string="";
    password:string="";
    isLoggedIn:boolean=false;
    loginFundraiser()
    {
      this.fundraiserService.loginFundraiser(this.email,this.password).subscribe(
        {
          next:(data)=>{
            console.log(data);
            let user={id:data.id,name:data.name,email:data.email,role:"fundraiser"};
            sessionStorage.setItem("user",JSON.stringify(user));
            this.message="Logged in successfully!!!";
            this.router.navigateByUrl('home');
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
    registerFundraiser()
    {
      this.router.navigateByUrl('fundraiser-sign-up');
      this.isLoggedIn=true;
    }

}



