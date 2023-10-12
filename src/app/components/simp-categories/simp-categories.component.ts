import { Component, OnInit } from '@angular/core';

import { CategoryService } from 'src/app/services/category.service';

import {
  NgbActiveModal,
  NgbModal,
  NgbNavOutlet,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { SimpSubcategoriesComponent } from '../simp-subcategories/simp-subcategories.component';
import { ShareService } from 'src/app/share.service';

@Component({
  selector: 'app-simp-categories',
  templateUrl: './simp-categories.component.html',
  styleUrls: ['./simp-categories.component.css'],
})
export class SimpCategoriesComponent implements OnInit {
  categories: any = '';

  constructor(
    private CategoryService: CategoryService,
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private shareService: ShareService
  ) {}

  ngOnInit(): void {
    this.CategoryService.getCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }

  openCategory(id: number) {
    this.shareService.setCategoryId(id);
    const modalOptions: NgbModalOptions = {
      centered: true,
      size: 'lg',
    };
    this.modalService.open(SimpSubcategoriesComponent, modalOptions);
  }
}
