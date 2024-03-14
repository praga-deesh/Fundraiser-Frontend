import { Component, OnInit } from '@angular/core';
import { Donor } from '../../model/donor';
import { DonorService } from '../../services/donor.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-donor-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './donor-profile.component.html',
  styleUrl: './donor-profile.component.css'
})
// export class DonorProfileComponent {

// }
export class DonorProfileComponent implements OnInit {
  // console.log("hi");
  user: any;
  
  message: string = "";
  errorMessage: string = "";
  newName: string = "";
  newPassword: string = "";
  constructor(private donorService: DonorService) { }

  ngOnInit() {
    // Get user details from sessionStorage
    let userData = sessionStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
      console.log(this.user.id + "**");
    }
  }
  getDonorDetails() {
    this.donorService.getDonorDetails(this.user.id).subscribe(

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
  updateDonorName() {
    this.donorService.updateDonorName(this.user.id, this.newName).subscribe(
      {
        next: (data) => {
          console.log(data);

          this.message = "Name updated successfully!!!";
          this.errorMessage = "";
        },
        error: (err) => {
          console.log(err);
          // this.errorMessage="Couldn't add account";
          this.errorMessage = "Updation failed";
          // this.errorMessage=err.errorMessage;
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
          this.errorMessage = "";
        },
        error: (err) => {
          console.log(err);
          // this.errorMessage="Couldn't add account";
          this.errorMessage = "Updation failed";
          // this.errorMessage=err.errorMessage;
          this.message = "";
        }
      }
    )
  }

}



