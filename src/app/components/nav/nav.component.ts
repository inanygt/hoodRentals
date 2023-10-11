import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import {
  NgbActiveModal,
  NgbModal,
  NgbNavOutlet,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { InstellingComponent } from '../instelling/instelling.component';
import { HomeComponent } from '../HOME/home/home.component';
import { AddItemComponent } from '../add-item/add-item.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(
    public authenticationService: AuthenticationService,
    private modalService: NgbModal,
    private router: Router
  ) {}
  ngOnInit(): void {}

  gohome() {
    this.router.navigate(['']);
  }

  openchats() {
    this.router.navigate(['/chats']);
  }

  openadditems() {
    const modalOptions: NgbModalOptions = {
      size: 'lg',
    };
    this.modalService.open(AddItemComponent, modalOptions);
  }

  opensettings() {
    const modalOptions: NgbModalOptions = {
      size: 'lg',
    };
    this.modalService.open(InstellingComponent, modalOptions);
  }
}
