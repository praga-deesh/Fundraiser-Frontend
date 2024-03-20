import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../model/post';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-fundraiser-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './fundraiser-profile.component.html',
  styleUrl: './fundraiser-profile.component.css'
})
export class FundraiserProfileComponent {
  constructor(private postService: PostService,private changeDetector: ChangeDetectorRef) { }

  user: any;
  isDeletePostDetailsVisible: boolean = true;
  message: string = "";
  errorMessage: string = "";
  // deleteId:number;

  posts: Post[] = [];

  ngOnInit(): void {
    // Initially fetch all posts on initialization
    // this.getPosts();
    // Get user details from sessionStorage
    let userData = sessionStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
      console.log(this.user.id + "**");
    }
  }

  getPostsByFundRaiserId(): void {
    this.postService.getPostsByFundraiserId(this.user.id)
      .subscribe(
        posts => {
          this.posts = posts;

          console.log(this.posts);

          for (let post of this.posts) {
            console.log(post.id);
            console.log(post.title);
          }


        }
      );
    console.log(this.user.id);
    console.log(this.posts);
  }


  
  // deletePostById(postId: number): void {
  //   this.postService.deletePostById(postId)
  //     .subscribe({
  //       next: () => {
  //         console.log(postId+"****");
  //         this.isDeletePostDetailsVisible = false;
  //         // this.posts = this.posts.filter(post => post.id !== postId);
  //         // this.getPostsByFundRaiserId();
  //       },
  //       error: error => {
  //         // this.isDeletePostDetailsVisible = false;
  //         console.log(postId+"****");
  //         console.error('Error:', error);
  //       }
  //     });
  // }

  deletePostById(postId: number): void {
    this.postService.deletePostById(postId)
    .pipe(delay(1000))
      .subscribe({
        next: () => {
          console.log(postId+"****");
          this.isDeletePostDetailsVisible = false;
          // this.posts = this.posts.filter(post => post.id !== postId);
          this.getPostsByFundRaiserId();
          this.changeDetector.detectChanges();
        },
        error: error => {
          console.log(postId+"####");
          console.error('Error:', error);
          if (error.status === 200) {
            console.log('Post with id ' + postId + ' does not exist');
          }
        }
      });
  }



  deletePostVisibility(): void {
    this.isDeletePostDetailsVisible = true;
  }

  isPostVisible: boolean = false;
  showPostTab() {
    this.isPostVisible = true;
  }
  hidePostTab() {
    this.isPostVisible = false;
  }

}
