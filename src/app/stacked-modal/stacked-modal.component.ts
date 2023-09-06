import { Component, OnInit } from '@angular/core';

import {
  NgbActiveModal,
  NgbModal,
  NgbNavOutlet,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';

import { CategoryService } from '../category.service';
import { ModalCategoryComponent } from '../modal-category/modal-category.component';

@Component({
  selector: 'app-stacked-modal',
  templateUrl: './stacked-modal.component.html',
  styleUrls: ['./stacked-modal.component.css'],
})
export class StackedModalComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}
}
