import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

import {
  NgbActiveModal,
  NgbModal,
  NgbNavOutlet,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { ModalCategoryComponent } from '../modal-category/modal-category.component';

@Component({
  selector: 'app-modal-sub-category',
  templateUrl: './modal-sub-category.component.html',
  styleUrls: ['./modal-sub-category.component.css'],
})
export class ModalSubCategoryComponent implements OnInit {
  modalsNumber = 0;
  categories: any = [];
  category: any;
  subCategory: any;
  subCategoryInfo: any;

  constructor(
    public activeModal: NgbActiveModal,
    private CategoryService: CategoryService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  openSubCategory(subcategory: any) {
    this.subCategoryInfo = subcategory;
    // console.log(this.subCategoryInfo);
    this.modalService.dismissAll();
    this.router.navigate(['/dashboard']);

    this.CategoryService.setSubCategory(this.subCategoryInfo);
  }

  ngOnInit(): void {
    this.CategoryService.getCategoryData(this.category.id).subscribe(
      (data: any) => {
        this.category = data;
        console.log(data);
      }
    );
  }
}
