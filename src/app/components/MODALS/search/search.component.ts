import { Component } from '@angular/core';
import { ModalCategoryComponent } from '../modal-category/modal-category.component';

import {
  NgbActiveModal,
  NgbModal,
  NgbNavOutlet,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  constructor(
    private modalService: NgbModal,
    public authenticationService: AuthenticationService
  ) {}

  open() {
    const modalOptions: NgbModalOptions = {
      animation: true,
      backdrop: false,
      fullscreen: 'xxl',
    };

    this.modalService.open(ModalCategoryComponent, modalOptions);
  }
}
