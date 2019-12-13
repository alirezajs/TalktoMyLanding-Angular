import { Component, OnInit } from '@angular/core';
import { ICommentsHttp } from 'src/app/models/http-models/comment-http.interface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  constructor() { }
  comments: ICommentsHttp[];

  ngOnInit() {
  }

}
