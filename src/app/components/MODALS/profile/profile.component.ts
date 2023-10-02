import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  NgbActiveModal,
  NgbModal,
  NgbNavOutlet,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  navigateToVoorwaarden() {
    this.router.navigate(['/voorwaarden']);
    this.activeModal.close();
  }

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private router: Router
  ) {}

  ngOnInit(): void {}

  goToLogin() {
    const modalOptions: NgbModalOptions = {
      animation: false,
      backdrop: false,
      // fullscreen: 'xxl',
    };
    this.modalService.open(LoginComponent, modalOptions);
    this.activeModal.dismiss();
  }
}
