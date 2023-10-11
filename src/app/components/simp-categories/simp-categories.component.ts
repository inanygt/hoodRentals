import { Component, OnInit } from '@angular/core';

import { CategoryService } from 'src/app/services/category.service';

import {
  NgbActiveModal,
  NgbModal,
  NgbNavOutlet,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { SimpSubcategoriesComponent } from '../simp-subcategories/simp-subcategories.component';

@Component({
  selector: 'app-simp-categories',
  templateUrl: './simp-categories.component.html',
  styleUrls: ['./simp-categories.component.css'],
})
export class SimpCategoriesComponent implements OnInit {
  categories: any;

  constructor(
    private CategoryService: CategoryService,
    public activeModal: NgbActiveModal,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.CategoryService.getCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }

  openCategory(id: number) {
    console.log(id);
    const modalOptions: NgbModalOptions = {
      centered: true,
      size: 'lg',
    };
    this.modalService.open(SimpSubcategoriesComponent, modalOptions);
  }
}
