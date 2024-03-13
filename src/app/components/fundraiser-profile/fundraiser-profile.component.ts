import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundraiser-profile',
  standalone: true,
  imports: [],
  templateUrl: './fundraiser-profile.component.html',
  styleUrl: './fundraiser-profile.component.css'
})
export class FundraiserProfileComponent implements OnInit{
  user: any;

  ngOnInit() {
    // Get user details from sessionStorage
    let userData = sessionStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
  }

}
