import { Component } from '@angular/core';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataService]
})
export class AppComponent {
  articles;
  searchText = '';

  

constructor(public dataSyc: DataService){
  dataSyc.sayHello();
  this.articles = dataSyc.articles;
}
  changeSearchText(searchInput) {
    console.log(searchInput);
    this.searchText = searchInput;
  }
  
  /*changeSearchText($event) {
    console.log($event);
    this.searchText = $event;
  }*/
}
