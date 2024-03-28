import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Router } from '@angular/router';
import { Transaction } from '../../model/transaction';
import { PostService } from '../../services/post.service';
import { DonorService } from '../../services/donor.service';
import { NewPost } from '../../model/new-post';
import { Donor } from '../../model/donor';
import { FormsModule } from '@angular/forms';
import { CommentService } from '../../services/comment.service';
import { Commentt } from '../../model/commentt';


@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent {
  message: string = "";
  errorMessage: string = "";
  user: any;
  post: any;
  donor: Donor | undefined;



  constructor(private transactionService: TransactionService, private router: Router, private postService: PostService, private donorService: DonorService,
    private commentService: CommentService) {

  }

  newComment: Commentt = new Commentt();
  newTransaction: Transaction = new Transaction();
  donationPost: NewPost = new NewPost();


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

    this.newComment.donorId = this.user.id;

    this.newComment.postId = this.post.id;


    this.newTransaction.senderId = this.user.accountId;


    const userId = this.user.id; // Assuming `this.user.id` is defined and holds the current user's ID
    this.donorService.getDonorDetails(this.user.id).subscribe(

      {

        next: (data) => {
          this.newTransaction.senderId = data.accountId;
          console.log(data.accountId)
          console.log("donor dets : ", data);
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

    const postId = this.post.id; // Assuming `this.user.id` is defined and holds the current user's ID
    this.postService.getPostById(this.post.id).subscribe(

      {

        next: (data) => {
          this.newTransaction.receiverId = data.donationAccountId;
          console.log("post dets : ", data);
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


  donationTransaction() {
    console.log('user : ' + this.user.id);
    console.log('post:' + this.post.id);

    console.log("transactionDto : ", this.newTransaction)
    this.transactionService.paymentTransaction(this.newTransaction).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.message = "Payment Donation Successfully!!";
          this.addComment();
          this.router.navigateByUrl('posts');
          this.errorMessage = "";
        },
        error: (err) => {
          console.log(err);
          console.log("Error");
          console.log("hello hi  hoooo")
          // this.errorMessage="Couldn't add account";
          this.errorMessage = err.error;
          this.message = "";
        }
      }
    )
  }


  addComment() {
    console.log("comment : ** " + this.newComment);
    this.commentService.addComment(this.newComment).subscribe(
      {
        next: (data) => {
          console.log(data);
          console.log("Success");
          this.message = "Comment added Successfully!!";
        },
        error: (err) => {
          console.log(err);
          console.log("Error");
          // this.errorMessage="Couldn't add account";
        }
      }

    )

  }


}
