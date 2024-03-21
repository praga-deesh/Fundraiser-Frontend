import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewDonationsService } from '../../services/view-donations.service';
import { Commentt } from '../../model/commentt';
import { Donation } from '../../model/donation';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Donor } from '../../model/donor';
import { DonorService } from '../../services/donor.service';


@Component({
  selector: 'app-view-donations',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './view-donations.component.html',
  styleUrl: './view-donations.component.css'
})
export class ViewDonationsComponent {
  post: any;
  user: any;

  message:string = "";
  errorMessage:string = "";
  
  commentts: Commentt[] = [];

  commentt:Commentt = new Commentt();

  donations: Donation[] = [];

  donation:Donation = new Donation();

  donors:Donor[] = [];
  
  donor:Donor = new Donor();

  constructor(private viewDonationService:ViewDonationsService,private donorService:DonorService,private router:Router) {
  }

  ngOnInit() {
        // Get user details from sessionStorage
        let userData = sessionStorage.getItem('user');
        if (userData) {
          this.user = JSON.parse(userData);
          console.log(this.user.id + "**");
          let postData = sessionStorage.getItem('post');
          if (postData) {
            this.post = JSON.parse(postData);
            console.log(this.post.id + "**");
          }
        }

        this.getDonations(this.post.id);
        this.getComments(this.post.id);


  }

  getDonations(postId:number) {
      if(postId) {
        this.viewDonationService.viewDonations(postId)
        .subscribe(donations => this.donations = donations);
   
      }
      else {
        this.errorMessage="No donations to Show ";
      }
    }

    getComments(postId:number) {
      if(postId) {
        this.viewDonationService.viewComments(postId)
        .subscribe(commentts => this.commentts = commentts);

        
      }
      else {
        this.errorMessage="No Comments to Show";
      }
    }
}
