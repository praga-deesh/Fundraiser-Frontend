import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private slideIndex = 0;
  user: any;

  constructor(private router: Router,public navbarService: NavbarService)
   { 
    this.navbarService.showNavBar();
   }


  ngOnInit(): void {
    this.showSlides();
     // Get user details from sessionStorage
     let userData = sessionStorage.getItem('user');
     if (userData) {
       this.user = JSON.parse(userData);
       console.log(this.user.id + "**");
     }

  }

  private showSlides(): void {
    let i: number;
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName("dot");
    
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    this.slideIndex++;
    if (this.slideIndex > slides.length) { this.slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
    setTimeout(() => this.showSlides(), 4000); // Change image every 4 seconds
  }



  donateNowRedirect() {
    if(this.user) {
      if(this.user.role === "donor")
    this.router.navigate(['posts'])
    }
    else {
      this.router.navigate(['donor-login']);
    }
  }

  creatPostRedirect() {
    if(this.user) {
      if(this.user.role === "fundraiser")
      this.router.navigate(['my-posts']);
    }
    else {
      this.router.navigate(['fundraiser-login']);
    }
  }


}
