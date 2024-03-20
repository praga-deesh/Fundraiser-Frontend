import { Component } from '@angular/core';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  comment:?Comment;
 addComment(){
  console.log("user id : "+this.user.id)
    this.commentService.addComment(comment).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.message = "Name updated successfully!!!";
          this.getDonorDetails();
          this.isUpdateTabVisibile=false;
          this.errorMessage = "";
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = "Updation failed";
          this.isUpdateTabVisibile=false;
          this.message = "";
        }
      }
    )
 }
}
