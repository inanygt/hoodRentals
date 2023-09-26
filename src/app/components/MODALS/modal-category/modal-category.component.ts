import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { ModalSubCategoryComponent } from '../modal-sub-category/modal-sub-category.component';

import {
  NgbActiveModal,
  NgbModal,
  NgbNavOutlet,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-category',
  templateUrl: './modal-category.component.html',
  styleUrls: ['./modal-category.component.css'],
})
export class ModalCategoryComponent implements OnInit {
  // Properties
  categories: any;

  // Methods

  constructor(
    private modalService: NgbModal,
    private CategoryService: CategoryService,
    public activeModal: NgbActiveModal
  ) {}

  open(category: any) {
    const modalOptions: NgbModalOptions = {
      animation: true,
      backdrop: false,
      fullscreen: 'xxl',
    };
    const modalRef = this.modalService.open(
      ModalSubCategoryComponent,
      modalOptions
    );
    modalRef.componentInstance.category = category;
  }

  ngOnInit(): void {
    this.CategoryService.getCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }
}
