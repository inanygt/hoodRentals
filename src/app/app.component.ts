import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hoodRentals';

  displayNotification: Boolean = false;

  closeNotification() {
    this.displayNotification = true;
  }
}
