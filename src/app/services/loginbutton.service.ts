import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginbuttonService {

  constructor() { }
  isLoginButtonVisible:boolean=true;
  showLoginButton()
  {
    this.isLoginButtonVisible=true;
  }
  hideLoginButton()
  {
    this.isLoginButtonVisible=false;
  }
  
}
