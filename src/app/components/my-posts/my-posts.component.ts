import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-posts',
  standalone: true,
  imports: [],
  templateUrl: './my-posts.component.html',
  styleUrl: './my-posts.component.css'
})
export class MyPostsComponent {

  constructor(private router:Router){}
  

  createNewPost() {
    console.log("new post");
    this.router.navigateByUrl('add-new-post');
  }

}
