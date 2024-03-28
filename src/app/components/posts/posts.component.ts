import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service'; // Import PostService
import { Post } from '../../model/post'; // Import Post model
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { NewPost } from '../../model/new-post';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  post:Post = new Post();

  constructor(private postService: PostService, private router:Router) { }

  ngOnInit(): void {
    // Initially fetch all posts on initialization
    this.getPosts();


  }

  getPosts(): void {

    this.postService.getAllPosts()
      .subscribe(posts => this.posts = posts);
  }

  getCompletedPosts(): void { // Separate method for completed posts
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

  onCategorySelected(selectedCategory: string) {
    if (selectedCategory) {
      this.categoryFilter(selectedCategory);
    } else {
      // Handle case when "All Categories" is selected
    }
  }
  categoryFilter(category: string) {
    console.log(category);
    this.postService.getPostsByCategory(category)
    .subscribe(posts => this.posts = posts);
    
  }

  
  redirectToTransaction(post: Post): void {
  
          console.log(post);
           post ={id:post.id,title:post.title,category:post.category,amountCollected:post.amountCollected,amountRequested:post.amountRequested,status:post.status}
           sessionStorage.setItem("post",JSON.stringify(post));
           this.router.navigateByUrl('donation-transaction');

  }

  redirectToViewDonations(post: Post) {

    console.log(post);
           post ={id:post.id,title:post.title,category:post.category,amountCollected:post.amountCollected,amountRequested:post.amountRequested,status:post.status}
           sessionStorage.setItem("post",JSON.stringify(post));
           this.router.navigateByUrl('view-donations');
  }

  isPostActive(endDate: Date): boolean {
    if(!endDate) {
      return false;
    }
    const currentDate = new Date();
    return currentDate < new Date(endDate);
  }
  




 
}





  


