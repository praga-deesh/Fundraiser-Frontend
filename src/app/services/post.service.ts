import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:8090/AllPosts'); 
  }
  getCompletedPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:8090/posts/complete');
  }

  getIncompletedPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:8090/posts/incomplete');
  }
  getPostsByCategory(category: string): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:8090/posts/category/' + category);
  }

  getPostsByTitle(title: string): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:8090/posts/title/' + title);
  }

  getPostById(postId: number): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:8090/posts/' + postId);
  }

  getPostsSortedByDate(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:8090/posts/newestFirst');
  }

  getPostsByFundraiserId(fundraiserId: number):Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:8090/post/fundraiser/' + fundraiserId);
  }
  deletePostById(postId: number): Observable<any> {
    return this.http.delete(`http://localhost:8090/post/${postId}?id=${postId}`);
    
  }
}