import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }
  isNavBarVisible: boolean = true;

  hideNavBar() {
    this.isNavBarVisible = false;
  }

  showNavBar() {
    this.isNavBarVisible = true;
  }
}
