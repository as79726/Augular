import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() data;
  @Output() removeEvent = new EventEmitter<number>();

  remove(){
    this.removeEvent.emit(this.data.id);
  }
  constructor() { }

  ngOnInit() {
  }

}
