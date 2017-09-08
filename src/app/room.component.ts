import { Component } from '@angular/core';

@Component({
  selector: 'room',
  template:`<h2>{{title}}</h2>`
})
export class RoomComponent {
  title = 'my dark room';
}
