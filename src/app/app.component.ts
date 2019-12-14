import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'talktomylanding-angular';
  public show: boolean = true;
  ngOnInit() {
    setTimeout(() => {
      this.show = false
    }, 2000);
  }
}
