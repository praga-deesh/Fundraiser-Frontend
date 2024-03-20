import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient:HttpClient) { }
  addComment(newComment:Comment):Observable<any> {
   return this.httpClient.post('http://localhost:8090/comment',newComment);
  }
}
