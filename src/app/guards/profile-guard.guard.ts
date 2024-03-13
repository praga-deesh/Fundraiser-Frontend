import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuardGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    let user = sessionStorage.getItem('user');
    console.log('User from session** storage:', user);

    if (user) {
      let parsedUser = JSON.parse(user);
      console.log('Parsed user:', parsedUser);
      if (parsedUser && parsedUser.role) {
        if (parsedUser.role === 'donor') {
          return this.router.parseUrl('/donor-profile');
        } else if (parsedUser.role === 'fundraiser') {
          return this.router.parseUrl('/fundraiser-profile');
        }
      }
    } else {
      return this.router.parseUrl('/empty');
    }
    return true;
  }
}