import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'The Will Will Web123';
  titleSize = 32;
  isHighLight = false;
  constructor() { }

  ngOnInit() {
  }

  changeTitle($event) {
    console.log($event);
    this.title = this.title + '!';
    ++this.titleSize;
    this.isHighLight = !this.isHighLight;
  }
}
