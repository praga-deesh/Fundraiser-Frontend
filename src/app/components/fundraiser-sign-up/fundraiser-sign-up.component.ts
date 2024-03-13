import { Component } from '@angular/core';
import { Fundraiser } from '../../model/fundraiser';
import { FundraiserService } from '../../services/fundraiser.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-fundraiser-sign-up',
  standalone: true,
  imports: [FormsModule ,CommonModule ],
  templateUrl: './fundraiser-sign-up.component.html',
  styleUrl: './fundraiser-sign-up.component.css'
})
export class FundraiserSignUpComponent {
  message:string="";
  errorMessage:string="";
  constructor(private fundraiserService:FundraiserService,private router:Router){}
  newFundraiser:Fundraiser=new Fundraiser();
  redirectToFundraiserLogin()
  {
    this.fundraiserService.createNewFundraiser(this.newFundraiser).subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.message="Registered Successfully!!";
          this.router.navigateByUrl('fundraiser-login');
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
