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

  updateFundraiserName(id: number, newName: string): Observable<any> {
    console.log('Name:', newName);
    const url = `http://localhost:8090/fundraiser/name?id=${id}&newName=${newName}`;
    return this.httpClient.patch(url, {});
  }
  updateFundraiserPassword(id: number, newPassword: string): Observable<any> {
    const url = `http://localhost:8090/fundraiser/password?id=${id}`;
    const body = { password: newPassword };
    return this.httpClient.patch(url, body);
  }
  deleteFundraiser(id:number):Observable<any>
  {
    return this.httpClient.delete(`http://localhost:8090/fundraiser?id=${id}`);
  }
 
}
