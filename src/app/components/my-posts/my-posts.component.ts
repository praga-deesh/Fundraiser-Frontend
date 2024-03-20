import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../model/post';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-posts',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './my-posts.component.html',
  styleUrl: './my-posts.component.css'
})
export class MyPostsComponent {
  user: any;
  isDeletePostDetailsVisible: boolean = true;
  message: string = "";
  errorMessage: string = "";
  // deleteId:number;

  posts: Post[] = [];


  constructor(private router:Router,private postService: PostService){}

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
  
  

  createNewPost() {
    console.log("new post");
    this.router.navigateByUrl('add-new-post');
  }
  getPostsByFundRaiserId(): void {
    this.postService.getPostsByFundraiserId(this.user.id)
      .subscribe(
        posts => {
          this.posts = posts;

          // console.log(this.posts);

          // for (let post of this.posts) {
          //   console.log(post.id);
          //   console.log(post.title);
          // }


        }
      );
    // console.log(this.user.id);
    // console.log(this.posts);
  }
  deletePostById(postId: number): void {
    this.postService.deletePostById(postId)
      .subscribe({
        next: () => {
          console.log(postId+"****");
          this.isDeletePostDetailsVisible = false;
          // this.posts = this.posts.filter(post => post.id !== postId);
          this.getPostsByFundRaiserId();
        },
        error: error => {
          console.log(postId+"####");
          console.error('Error:', error);
          this.getPostsByFundRaiserId();

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
