import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service'; // Import PostService
import { Post } from '../../model/post'; // Import Post model
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    // Initially fetch all posts on initialization
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getAllPosts()
      .subscribe(posts => this.posts = posts);
  }

  getCompletePosts(): void { // Separate method for completed posts
    this.postService.getCompletedPosts()
      .subscribe(posts => this.posts = posts);
  }

  getIncompletedPosts(): void { // Separate method for incomplete posts
    this.postService.getIncompletedPosts()
      .subscribe(posts => this.posts = posts);
  }
  getPostsSortedByDate(): void {
    this.postService.getPostsSortedByDate()
      .subscribe(posts => this.posts = posts);
  }




 
}





  


