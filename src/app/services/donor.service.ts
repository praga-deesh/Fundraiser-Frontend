import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Donor } from '../model/donor';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DonorService {
  constructor(private httpClient:HttpClient) { }
  loginDonor(email: string, password: string):Observable<any> {
   return this.httpClient.post('http://localhost:8090/donor/login',{email,password});
  }

  createNewDonor(newDonor:Donor):Observable<any>
  {
    return this.httpClient.post('http://localhost:8090/donor',newDonor);
  }
}


