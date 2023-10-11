import { Component, OnInit } from '@angular/core';

import {
  NgbActiveModal,
  NgbModal,
  NgbNavOutlet,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/services/category.service';
import { SimpSubsubcategoriesComponent } from '../simp-subsubcategories/simp-subsubcategories.component';

@Component({
  selector: 'app-simp-subcategories',
  templateUrl: './simp-subcategories.component.html',
  styleUrls: ['./simp-subcategories.component.css'],
})
export class SimpSubcategoriesComponent implements OnInit {
  subcategory: any;
  constructor(
    public categoryService: CategoryService,
    public activeModal: NgbActiveModal,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    const id = 1;
    this.categoryService.getCategoryData(id).subscribe((res) => {
      console.log(res);
      this.subcategory = res;
    });
  }

  openSubSubCategories(id: number) {
    console.log(id);
    const modalOptions: NgbModalOptions = {
      centered: true,
      size: 'lg',
    };
    this.modalService.open(SimpSubsubcategoriesComponent, modalOptions);
  }
}
