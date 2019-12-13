import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Pipe({
  name: 'messageTime',
  pure: false
})
export class MessageTimePipe implements PipeTransform {

  value: any;
  timer: any;

  transform(obj: any, args?: any[]): any {
    console.log(this.value)
    if (obj instanceof Number) {
      this.value = obj;
      

      if (!this.timer) {
        this.timer = this.getObservable();
      }

      return this.timer;
    }
    return "";
  }

  private getObservable() {
    return interval(1000).subscribe(() => {
      var result: string;
      // current time
      let now = new Date().getTime();

      // time since message was sent in seconds
      let delta = (now - this.value.getTime()) / 1000;

      // format string
      if (delta < 10) {
        result = 'jetzt';
      }
      else if (delta < 60) { // sent in last minute
        result = 'vor ' + Math.floor(delta) + ' Sekunden';
      }
      else if (delta < 3600) { // sent in last hour
        result = 'vor ' + Math.floor(delta / 60) + ' Minuten';
      }
      else if (delta < 86400) { // sent on last day
        result = 'vor ' + Math.floor(delta / 3600) + ' Stunden';
      }
      else { // sent more than one day ago
        result = 'vor ' + Math.floor(delta / 86400) + ' Tagen';
      }
      return result;
    });
  };
}
