import { Component, OnInit } from '@angular/core';
import { Donor } from '../../model/donor';
import { DonorService } from '../../services/donor.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Payment } from '../../model/payment';
import { Router } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';
import { LoginbuttonService } from '../../services/loginbutton.service';
import { Donation } from '../../model/donation';
@Component({
  selector: 'app-donor-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './donor-profile.component.html',
  styleUrl: './donor-profile.component.css'
})

export class DonorProfileComponent implements OnInit {
  user: any;
  accountId:string="";
  accountBalance:number=0;
  message: string = "";
  errorMessage: string = "";
  password:string="";
  newName: string = "";
  newPassword: string = "";
  constructor(private donorService: DonorService,private router:Router,private navbarService:NavbarService,public loginButtonService:LoginbuttonService) { }

  ngOnInit() {
    // Get user details from sessionStorage
    let userData = sessionStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
      console.log(this.user.id + "**");
    }
    this.getDonations();
  }
  
  

  getDonorDetails() {
    this.donorService.getDonorDetails(this.user.id).subscribe(

      {
        
        next: (data) => {
          console.log(data);
          this.user = data;
          this.message = "Details displayed ";
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

  updateDonorName() {
    console.log("user id : "+this.user.id)
    this.donorService.updateDonorName(this.user.id, this.newName).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.message = "Name updated successfully!!!";
          this.getDonorDetails();
          // this.isUpdateTabVisibile=false;
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
  updateDonorPassword(){
    this.donorService.updateDonorPassword(this.user.id, this.newPassword).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.message = "Password updated successfully!!!";
          // this.isUpdateTabVisibile=false;
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
  showUpdateTab()
  {
    this.isUpdateTabVisibile=true;
  }
  hideUpdateTab()
  {
    this.isUpdateTabVisibile=false;
  }

  updateDonorDetails()
  {
    this.showUpdateTab();
    console.log("hol");
  }
  isAddBankDetailsVisible:boolean=false;

  showBankTab()
  {
    this.isAddBankDetailsVisible=true;
  }

  hideBankTab()
  {
    this.isAddBankDetailsVisible=false;
  }
  addBankDetails()
  {
    this.isAddBankDetailsVisible=true;
  }

  updateBankDetails()
  {
    this.donorService.updateBankDetails(this.user.id,this.accountId,this.accountBalance).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.message = "Account details updated successfully!!!";
          let user={id:data.id,name:data.name,email:data.email,accountId:data.accountId,balance:data.accountBalance};
          sessionStorage.setItem("user",JSON.stringify(user));
          console.log(user)
          this.accountId=this.user.accountId;
          this.accountBalance=this.user.balance;
          this.showAccountDetails();
          this.isAddBankDetailsVisible=false;
          this.errorMessage = "";
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = "Updation failed";
          this.isAddBankDetailsVisible=false;
          this.message = "";
        }
      }
      
    )
  }

  logout()
  {
    sessionStorage.clear();
    this.message="Logged out successfully!!";
    setTimeout(() => {
      this.message = '';
      this.router.navigateByUrl('home'); 
    }, 2000);
    this.loginButtonService.showLoginButton();
  }

  confirmDelete()
  {
    if(window.confirm('Are you sure you want to delete your account??'))
    {
      this.deleteDonorAccount();
    }
    else
    {
      window.close();
    }
  }
  deleteDonorAccount()
  {
    sessionStorage.clear();
    this.loginButtonService.showLoginButton();
    this.donorService.deleteDonorAccount(this.user.id).subscribe(
      {
        next: (data:any) => {
          console.log(data);
          this.message = "Account deleted successfully!!!";
          setTimeout(() => {
            this.message = '';
            this.router.navigateByUrl('home'); // Navigate to another page
          }, 2000);
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
  isViewDonationsVisible:boolean=false;
  showDonations()
  {
    this.isViewDonationsVisible=true;
  }
  hideDonations()
  {
    this.isViewDonationsVisible=false;
  }
  donations:any[]=[];
  getDonations()
  {
    console.log("user id : "+this.user.id);
    this.donorService.getDonations(this.user.id).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.message = "Details displayed ";
          this.donations=data;
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

  isAccountDetailsVisible:boolean=false;
  showAccountDetails()
  {
    this.isAccountDetailsVisible=true;
  }
  hideAccountDetails()
  {
    this.isAccountDetailsVisible=false;
  }

  isCommentVisible:boolean=true;
  showComment()
  {
    this.isCommentVisible=true;
  }
  hideComment()
  {
    this.isCommentVisible=false;
  }
}