import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentt } from '../model/commentt';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }
  addComment(newComment: Commentt): Observable<any> {
    return this.httpClient.post('http://localhost:8090/comment', newComment);
  }
  // getCommentsByPostId(postId: number): Observable<any> {
  //   return this.httpClient.get<Commentt[]>('http://localhost:8090/comment/post/',postId);
  // }
}
