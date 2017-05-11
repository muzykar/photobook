import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    <b>{{title   | uppercase}}</b>
  </h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active"><b>My favourites</b></a>
    <a routerLink="/pictures" routerLinkActive="active"><b>All</b></a>
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PhotoBook';
}
