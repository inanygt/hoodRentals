import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-lhome',
  templateUrl: './lhome.component.html',
  styleUrls: ['./lhome.component.css'],
})
export class LhomeComponent {
  constructor(
    public authenticationService: AuthenticationService,
    private router: Router,
    private toast: HotToastService
  ) {}

  // Check out later
  user$ = this.authenticationService.currentUser$;

  logout() {
    this.authenticationService.logout();
    this.toast.success('You are logged out');
    this.router.navigate(['']);
  }
}
