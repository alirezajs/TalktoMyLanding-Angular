import { Component, OnInit } from '@angular/core';
import { ICommentsHttp } from 'src/app/models/http-models/comment-http.interface';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  constructor(private _commentService: CommentService) { }

  comment: ICommentsHttp;



  ngOnInit() {
    const id = '0b6e6888dfcd461e9f9b582e40e434dd'
    this._commentService.getRandomComment(id).subscribe(res => {
      this.comment = res;
      console.log(this.comment)
    })
  }

}
