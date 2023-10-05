import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalCategoryComponent } from '../../MODALS/modal-category/modal-category.component';
import { ProfileComponent } from '../../MODALS/profile/profile.component';

import {
  NgbActiveModal,
  NgbModal,
  NgbNavOutlet,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from '../../signup/signup.component';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AddItemComponent } from '../../add-item/add-item.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  // Methods
  home() {
    console.log('home');
    window.location.href = '/';
  }

  constructor(
    private modalService: NgbModal,
    public authenticationService: AuthenticationService
  ) {}

  // open categories modal
  open() {
    const modalOptions: NgbModalOptions = {
      animation: true,
      backdrop: false,
      fullscreen: 'xxl',
    };
    this.modalService.open(ModalCategoryComponent, modalOptions);
  }

  // Open profilecomponent
  subscribe() {
    const modalOptions: NgbModalOptions = {
      size: 'lg',
    };
    this.modalService.open(SignupComponent, modalOptions);
  }

  ngOnInit(): void {}

  addItem() {
    const modalOptions: NgbModalOptions = {
      centered: true,
      size: 'lg',
    };
    this.modalService.open(AddItemComponent, modalOptions);
  }
}
