import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../../services/comment.service';
import { ICommentsHttp } from '../../models/http-models/comment-http.interface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  constructor(
    private readonly _commentService: CommentService,
    private _route: ActivatedRoute) { }

  comment: ICommentsHttp;

  private GetComment(id: string) {
    this._commentService.getRandomComment(id).subscribe(res => {
      this.comment = res;
    })
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      if (params && params.id) {
        this.GetComment(params.id)
      }
      else{
        this._route.queryParams.subscribe(queryParams => {
          this.GetComment(queryParams.id)
        })
      }
    })
  }

}
