import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-borrow-lend-container',
  templateUrl: './borrow-lend-container.component.html',
  styleUrls: ['./borrow-lend-container.component.css'],
})
export class BorrowLendContainerComponent implements OnInit {
  selectedButton: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const segments = event.url.split('/');
        this.selectedButton = segments[segments.length - 1];
      }
    });
  }

  // Function to set the selected button
  selectButton(button: string) {
    this.selectedButton = button;
  }

  ngOnInit(): void {}
}
