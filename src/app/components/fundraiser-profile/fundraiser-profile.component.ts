import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FundraiserService } from '../../services/fundraiser.service';
import { Router } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';
import { LoginbuttonService } from '../../services/loginbutton.service';

@Component({
  selector: 'app-fundraiser-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './fundraiser-profile.component.html',
  styleUrl: './fundraiser-profile.component.css'
})
export class FundraiserProfileComponent implements OnInit {
  user: any;
  accountId:string="";
  balance:number=0;
  message: string = "";
  errorMessage: string = "";
  password:string="";
  newName: string = "";
  newPassword: string = "";
  constructor(private fundraiserService: FundraiserService,private router:Router,private navbarService:NavbarService,public loginButtonService:LoginbuttonService) { }

  ngOnInit() {
    // Get user details from sessionStorage
    let userData = sessionStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
      console.log(this.user.id + "**");
    }
  }
  getFundraiserDetails() {
    this.fundraiserService.getFundraiserDetails(this.user.id).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.user = data;
          this.message = "";
          this.errorMessage = "";
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = "Couldn't get details";
          this.message = "";
        }
      }
    )
  }

  updateFundraiserName() {
    this.fundraiserService.updateFundraiserName(this.user.id, this.newName).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.message = "Name updated successfully!!!";
          this.getFundraiserDetails();
          this.isUpdateTabVisibile=false;
          this.errorMessage = "";
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = "Updation failed";
          this.isUpdateTabVisibile=false;
          this.message = "";
        }
      }
    )
  }
  updateFundraiserPassword(){
    this.fundraiserService.updateFundraiserPassword(this.user.id, this.newPassword).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.message = "Password updated successfully!!!";
          this.isUpdateTabVisibile=false;
          this.errorMessage = "";
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = "Updation failed";
          this.isUpdateTabVisibile=false;
          this.message = "";
        }
      }
    )
  }
  isUpdateTabVisibile:boolean=false;

  updateFundraiserDetails()
  {
    this.isUpdateTabVisibile=true;
    console.log("hol");
  }

  logout()
  {
    sessionStorage.clear();
    this.router.navigateByUrl('home');
    this.loginButtonService.showLoginButton();
  }

  

  deleteFundraiserAccount()
  {
    sessionStorage.clear();
    this.router.navigateByUrl('home');
    this.loginButtonService.showLoginButton();
    this.fundraiserService.deleteFundraiser(this.user.id).subscribe(
      {
        next: (data:any) => {
          console.log(data);
          this.message = "Account deleted successfully!!!";
          this.errorMessage = "";
        },
        error: (err:any) => {
          console.log(err);
          this.errorMessage = "Failed";
          this.message = "";
        }
      }
    )
  }
}
