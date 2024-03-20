import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Donor } from '../model/donor';
import { DonorService } from '../services/donor.service';

export const donationGuard: CanActivateFn = (route, state) => { 


  let user = sessionStorage.getItem("user");
  let userObj;
  console.log(user);
  if(user) {
    userObj = JSON.parse(user);
    console.log(userObj);
    const donorService = inject(DonorService);
    let donor = donorService.getDonorDetails(userObj.id);
    if(userObj.accountId == null) {
      console.log("donation guard on donor no bank details(accountId is null)");
      inject(Router).navigateByUrl('donor-profile');
      //gg
    }

  }
  else {
    inject(Router).navigateByUrl('donor-login');
  }

  return true;
};
