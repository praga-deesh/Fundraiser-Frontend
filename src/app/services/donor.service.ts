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
   
  getDonorDetails(userId: number): Observable<any> {
    console.log('User id:', userId);
    return this.httpClient.get<Donor>(`http://localhost:8090/donor/{id}?id=${userId}`);
  }
  updateDonorName(id: number, newName: string): Observable<any> {
    console.log('Name:', newName);
    const url = `http://localhost:8090/donor/name?id=${id}&newName=${newName}`;
    return this.httpClient.patch(url, {});
  }
  updateDonorPassword(id: number, newPassword: string): Observable<any> {
    const url = `http://localhost:8090/donor/password?id=${id}`;
    const body = { password: newPassword };
    return this.httpClient.patch(url, body);
  }

  updateBankDetails(id: number, accountId: string, balance:number):Observable<any>
  {
    console.log(accountId+" "+balance+" "+id);
    const url = `http://localhost:8090/donor/bankDetails/${id}?accountId=${accountId}&balance=${balance}`;
    const body ={id: id,accountId: accountId,balance: balance};
    return this.httpClient.post(url,body);
  }

  deleteDonorAccount(id:number):Observable<any>
  {
    return this.httpClient.delete(`http://localhost:8090/donor?id=${id}`);
  }
  
}


