import { Component, OnInit, Input } from '@angular/core';
import { IComment } from '../../models/comment.interface'
import { CommentService } from 'src/app/services/comment.service';
@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent implements OnInit {

  constructor(private _commentService: CommentService) {

  }
  @Input() public comment: IComment

  ngOnInit() {
    console.log(this.comment);
  }
  public getTimeSpan() {

  }
}
