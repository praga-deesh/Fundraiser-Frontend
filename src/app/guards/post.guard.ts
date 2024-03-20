import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const postGuard: CanActivateFn = (route, state) => {
  let user = sessionStorage.getItem("user");
  let userObj;
  console.log(user);
  if(user) {
    userObj = JSON.parse(user);
    console.log(userObj);
    if(userObj.role == "fundraiser") {
      console.log("post guard for fundraiser");
      inject(Router).navigateByUrl('my-posts');
    }
  }
  return true;
};
