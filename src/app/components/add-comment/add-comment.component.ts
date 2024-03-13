import { Component } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-comment',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-comment.component.html',
  styleUrl: './add-comment.component.css'
})
export class AddCommentComponent {
  message:string="";
  errorMessage:string="";
  constructor(private commentService:CommentService){}
  newComment:Comment=new Comment();
  createComment()
  {
    this.commentService.addComment(this.newComment).subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.message="Comment added successfully!!";
          this.errorMessage="";
        },
        error:(err)=>{
          console.log(err);
          // this.errorMessage="Couldn't add account";
          this.errorMessage="Could not add comment!!!";
          this.message="";
        }
      }
    )
  }

}
