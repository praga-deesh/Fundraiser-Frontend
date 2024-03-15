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
      .subscribe(posts => this.posts = posts.map(post => ({...post, expanded: false})));
  }

  getCompletePosts(): void { // Separate method for completed posts
    this.postService.getCompletedPosts()
      .subscribe(posts => this.posts = posts.map(post => ({...post, expanded: false})));
  }

  getIncompletedPosts(): void { // Separate method for incomplete posts
    this.postService.getIncompletedPosts()
      .subscribe(posts => this.posts = posts.map(post => ({...post, expanded: false})));
  }

  getPostsSortedByDate(): void {
    this.postService.getPostsSortedByDate()
      .subscribe(posts => this.posts = posts.map(post => ({...post, expanded: false})));
  }

  showDetails(post: Post): void {
    post.expanded = !post.expanded;
  }

  donate(post: Post): void {
    // Logic for donation action
    console.log('Donate action for post:', post);
  }
}
