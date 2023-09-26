import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  displayNotification: Boolean = false;

  closeNotification() {
    this.displayNotification = true;
  }
}
