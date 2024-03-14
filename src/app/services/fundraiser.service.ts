import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fundraiser } from '../model/fundraiser';

@Injectable({
  providedIn: 'root'
})
export class FundraiserService {
  constructor(private httpClient:HttpClient) { }
  loginFundraiser(email: string, password: string):Observable<any> {
   return this.httpClient.post('http://localhost:8090/fundraiser/login',{email,password});
  }

  createNewFundraiser(newFundraiser:Fundraiser):Observable<any>
  {
    return this.httpClient.post('http://localhost:8090/fundraiser',newFundraiser);
  }

  getFundraiserDetails(userId: number): Observable<any> {
    console.log('User id:', userId);
    return this.httpClient.get<Fundraiser>(`http://localhost:8090/fundraiser/{id}?id=${userId}`);
  }
}
