import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1><h2>{{user}}'s photos!</h2>`
})
export class AppComponent {
  title = 'Photobook';
  user = 'user1';
}