import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CommentService {


  constructor(private httpClient: HttpClient) { }
  // loginDonor(email: string, password: string):Observable<any> {
  //  return this.httpClient.post('http://localhost:8090/donor/login',{email,password});
  // }

  addComment(newComment: Comment): Observable<any> {
    return this.httpClient.post('http://localhost:8090/donor/addComment', newComment);
  }
}
