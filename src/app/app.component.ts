import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchText = '';


  changeSearchText(searchInput) {
    console.log(searchInput);
    this.searchText = searchInput;
  }

  /*changeSearchText($event) {
    console.log($event);
    this.searchText = $event;
  }*/
}
