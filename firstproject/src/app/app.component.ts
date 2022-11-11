import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproject';
  name = 'angular';
  framework={
    name:"angular",
    language:"type-script",
    rating:4.6
  }
}
