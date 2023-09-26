import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  navigateToVoorwaarden() {
    this.router.navigate(['/voorwaarden']);
    this.activeModal.close();
  }

  constructor(public activeModal: NgbActiveModal, private router: Router) {}

  ngOnInit(): void {}
}
