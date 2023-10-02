import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import {
  NgbActiveModal,
  NgbModal,
  NgbNavOutlet,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from '../components/MODALS/profile/profile.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private authenticationService: AuthenticationService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private router: Router,
    private toast: HotToastService
  ) {}
  ngOnInit(): void {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }

    // Check what happens here
    const { email, password } = this.loginForm.value;
    this.authenticationService
      .login(email, password)
      .pipe(
        this.toast.observe({
          success: 'logged in successfully',
          loading: 'logging in....',
          error: 'there was an error',
        })
      )
      .subscribe(() => {
        this.router.navigate(['/lhome']);
        this.activeModal.dismiss();
      });
  }

  goToSubscribe() {
    const modalOptions: NgbModalOptions = {
      animation: false,
      backdrop: false,
      // fullscreen: 'xxl',
    };
    this.modalService.open(ProfileComponent, modalOptions);
    this.activeModal.dismiss();
  }
}
