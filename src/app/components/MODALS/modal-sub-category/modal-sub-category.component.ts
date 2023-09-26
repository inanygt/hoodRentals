import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  categoryId: number = 0;

  constructor(
    public activeModal: NgbActiveModal,
    private CategoryService: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  openSubCategory(subcategoryId: number) {
    this.modalService.dismissAll();

    this.router.navigate([
      '/dashboard',
      this.categoryId,
      'subcategory',
      subcategoryId,
    ]);

    // this.CategoryService.setSubCategory(this.subCategoryInfo);
  }

  ngOnInit(): void {
    this.CategoryService.getCategoryData(this.category.id).subscribe(
      (data: any) => {
        this.category = data;
        this.categoryId = this.category.id;
        console.log(this.categoryId);
      }
    );
  }
}
