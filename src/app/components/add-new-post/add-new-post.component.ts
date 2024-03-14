import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NewPostService } from '../../services/new-post.service';
import { NewPost } from '../../model/new-post';
import { FundraiserService } from '../../services/fundraiser.service';

import { Subscription } from 'rxjs';
import { PostFundraiser } from '../../model/post-fundraiser';

@Component({
  selector: 'app-add-new-post',
  standalone: true,
  imports: [FormsModule ,CommonModule],
  templateUrl: './add-new-post.component.html',
  styleUrl: './add-new-post.component.css'
})
export class AddNewPostComponent {

  message:string="";
  errorMessage:string="";
  user: any;
  constructor(private newPostService:NewPostService,private fundraiserService:FundraiserService,private router:Router){}
 
   newPost:NewPost=new NewPost();
   postFundraiser:PostFundraiser=new PostFundraiser();

   ngOnInit() {
    // Get user details from sessionStorage
    let userData = sessionStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
      console.log(this.user.id + "**");
      this.getFundraiserDetails();
    }
  }

  addNewPost() {
    
    console.log(JSON.stringify(this.newPost));
    this.newPostService.addNewPost(this.newPost).subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.message="post added Successfully!!";
          this.router.navigateByUrl('my-posts');
          this.errorMessage="";
        },
        error:(err)=>{
          this.errorMessage="Posts adding Failed!!!";
          // this.errorMessage="Couldn't add account";
          this.message="";
        }
      }

    )
  }



  getFundraiserDetails() {
    this.fundraiserService.getFundraiserDetails(this.user.id).subscribe(

      {
        
        next: (data) => {
          this.newPost.fundraiser=data;
          
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

  

}
