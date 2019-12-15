import { Component, OnInit, Input } from '@angular/core';
import { IComment } from '../../models/comment.interface'
import { interval } from 'rxjs';
@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent implements OnInit {

  constructor() {

  }
  @Input() public comment: IComment

  ngOnInit() {
    console.log(this.comment);
  }

  public getTimeSpan(value: number) {
    if (value) {
      const date = new Date(value).getTime();
      let now = new Date().getTime();
      let delta = ((now - date) / 1000);

      if (delta < 10) {
        return 'همین الان';
      }
      if (delta < 60) { // sent in last minute
        return Math.floor(delta) + '  ثانیه قبل';
      }
      if (delta < 3600) { // sent in last hour
        return Math.floor(delta / 60) + '  دقیقه قبل';
      }
      if (delta < 86400) { // sent on last day
        return Math.floor(delta / 3600) + '  ساعت قبل';
      }
      return Math.floor(delta / 86400) + ' روز قبل';
    }
  }
}
