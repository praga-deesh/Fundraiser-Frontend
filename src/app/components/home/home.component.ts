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

  constructor(private router: Router,public navbarService: NavbarService)
   { 
    this.navbarService.showNavBar();
   }


  ngOnInit(): void {
    this.showSlides();
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
    setTimeout(() => this.showSlides(), 2000); // Change image every 2 seconds
  }



  donateNowRedirect() {
    this.router.navigate(['posts'])
  }


}
