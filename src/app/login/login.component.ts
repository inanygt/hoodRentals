import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  loginForm: FormGroup;

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private authenticationService: AuthenticationService,
    private router: Router,
    private toast: HotToastService
  ) {}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),
    });
  }

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
        this.router.navigate(['/']);
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
