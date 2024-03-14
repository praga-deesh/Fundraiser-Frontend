import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewPost } from '../model/new-post';
import { Observable } from 'rxjs';
import { Fundraiser } from '../model/fundraiser';


@Injectable({
  providedIn: 'root'
})
export class NewPostService {

  constructor(private httpClient:HttpClient) { }

  addNewPost(newPost:NewPost):Observable<any> {
    console.log("newPOstL"+newPost)
    return this.httpClient.post('http://localhost:8090/post',newPost);
   }
 

}
