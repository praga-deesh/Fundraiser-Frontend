import { Component } from '@angular/core';

@Component({
  selector: 'app-view-donations',
  standalone: true,
  imports: [],
  templateUrl: './view-donations.component.html',
  styleUrl: './view-donations.component.css'
})
export class ViewDonationsComponent {
  post: any;
  user: any;

  constructor() {

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

  }

}
