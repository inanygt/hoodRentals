import { Component } from '@angular/core';
import { ModalCategoryComponent } from '../modal-category/modal-category.component';

import {
  NgbActiveModal,
  NgbModal,
  NgbNavOutlet,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalOptions: NgbModalOptions = {
      animation: true,
      backdrop: false,
      fullscreen: 'xxl',
    };

    this.modalService.open(ModalCategoryComponent, modalOptions);
  }
}
