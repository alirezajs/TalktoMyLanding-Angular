import { Component, OnInit, Input } from '@angular/core';
import { IComment } from '../../models/comment.interface';

@Component({
  selector: 'app-response-comment-card',
  templateUrl: './response-comment-card.component.html',
  styleUrls: ['./response-comment-card.component.scss']
})
export class ResponseCommentCardComponent implements OnInit {

  constructor() { }
  @Input() comment: IComment

  ngOnInit() {
  }

}
