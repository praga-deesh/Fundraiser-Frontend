// import { CanActivateFn } from '@angular/router';

// export const profileGuardGuard: CanActivateFn = (route, state) => {
//   return true;
// };

import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

export const ProfileGuardGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = route.routeConfig?.path === 'profile' ? new Router() : undefined;
  // let user = sessionStorage.getItem('user');
  // if (user) {
  //   user = JSON.parse(user);
  //   if (user.role === 'donor') {
  //     router?.navigate(['donor-profile']);
  //   } else if (user.role === 'fundraiser') {
  //     router?.navigate(['fundraiser-profile']);
  //   }
  //   return false;
  // }
  // return true;

  // let user = sessionStorage.getItem('user');
  // console.log('User from session storage:', user);
  // if (user) {
  //   user = JSON.parse(user);
  //   console.log('Parsed user:', user);
  //   if (user.role === 'donor') {
  //     this.router.navigate(['donor-profile']);
  //   } else if (user.role === 'fundraiser') {
  //     this.router.navigate(['fundraiser-profile']);
  //   }
  //   return false;
  // }
  // return true;


  let user = sessionStorage.getItem('user');
  console.log('User from session storage:', user);
  if (user) {
    let parsedUser = JSON.parse(user);
    console.log('Parsed user:', parsedUser);
    if (parsedUser && parsedUser.role) {
      if (parsedUser.role === 'donor') {
        router?.navigate(['donor-profile']);
      } else if (parsedUser.role === 'fundraiser') {
        router?.navigate(['fundraiser-profile']);
      }
      return false;
    }
  } else {
    router?.navigate(['empty']);

  }
  return true;
};