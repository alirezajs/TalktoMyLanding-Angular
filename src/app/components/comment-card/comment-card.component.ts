import { Component, OnInit, Input } from '@angular/core';
import { IComment } from '../../models/comment.interface'
import { CommentService } from 'src/app/services/comment.service';
@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent implements OnInit {

  constructor(private _commentService:CommentService) {

  }
  @Input() comment: IComment

  ngOnInit() {
    const id='0b6e6888dfcd461e9f9b582e40e434dd'
    this._commentService.getRandomComment(id).subscribe(res=>{
      console.log()
    })

  }

}
