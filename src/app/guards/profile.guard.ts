import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const profileGuard: CanActivateFn = (route, state) => {

  let user = sessionStorage.getItem("user");
  let userObj;
  console.log(user);
  if(user) {
    userObj = JSON.parse(user);
    console.log(userObj);
    if(userObj.role == "donor") {
      console.log("profile guard on donor");
      inject(Router).navigateByUrl('donor-profile');
    }
    else if(userObj.role == "fundraiser") {
      console.log("profile guard on fundraiser");
      inject(Router).navigateByUrl('fundraiser-profile');
    }
  }

  return true;
};
