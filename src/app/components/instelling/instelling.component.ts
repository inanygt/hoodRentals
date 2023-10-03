import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instelling',
  templateUrl: './instelling.component.html',
  styleUrls: ['./instelling.component.css'],
})
export class InstellingComponent implements OnInit {
  open() {
    console.log('open');
  }

  constructor(
    public activeModal: NgbActiveModal,
    public authenticationService: AuthenticationService,
    private toast: HotToastService,
    private router: Router
  ) {}

  logout() {
    this.authenticationService.logout();
    this.activeModal.dismiss();
    this.toast.success('You are logged out');
    this.router.navigate(['']);
  }

  ngOnInit(): void {}
}
