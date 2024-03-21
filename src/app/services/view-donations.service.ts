import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../model/transaction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewDonationsService {

  constructor(private httpClient: HttpClient) { }

  viewComments(postId:number):Observable<any> {
    return this.httpClient.get('http://localhost:8090/comment/post/'+postId);
  }

  viewDonations(postId:number):Observable<any> {
    return this.httpClient.get('http://localhost:8090/view/donations?donationPostId='+postId);
  }
  
}
