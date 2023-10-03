import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

import {
  NgbActiveModal,
  NgbModal,
  NgbNavOutlet,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { InstellingComponent } from '../../instelling/instelling.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    public authenticationService: AuthenticationService,
    private router: Router,
    private toast: HotToastService,
    private modalService: NgbModal
  ) {}

  // Check out later
  user$ = this.authenticationService.currentUser$;

  logout() {
    this.authenticationService.logout();
    this.toast.success('You are logged out');
    this.router.navigate(['']);
  }

  ngOnInit(): void {}

  openSettings() {
    const modalOptions: NgbModalOptions = {
      animation: true,
      centered: true,
    };

    this.modalService.open(InstellingComponent, modalOptions);
  }
}
