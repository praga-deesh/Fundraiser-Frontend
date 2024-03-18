import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../model/transaction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient: HttpClient) { }

  paymentTransaction(newTransaction:Transaction):Observable<any> {
    console.log("newTransaction: "+newTransaction)
    return this.httpClient.patch('http://localhost:8090/payment/transaction',newTransaction);
  }
}
