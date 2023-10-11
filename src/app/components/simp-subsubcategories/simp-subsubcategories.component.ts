import { Component, OnInit } from '@angular/core';

import {
  NgbActiveModal,
  NgbModal,
  NgbNavOutlet,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/services/category.service';
import { AddItemComponent } from '../add-item/add-item.component';

@Component({
  selector: 'app-simp-subsubcategories',
  templateUrl: './simp-subsubcategories.component.html',
  styleUrls: ['./simp-subsubcategories.component.css'],
})
export class SimpSubsubcategoriesComponent implements OnInit {
  categories: any;
  subsubcategoryId: number;
  selectedCategoryId: number;

  constructor(
    public categoryService: CategoryService,
    public activeModal: NgbActiveModal,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    const id = 1;
    this.categoryService.getSubSubCategories(id).subscribe((res) => {
      console.log(res);
      this.categories = res;
    });
  }

  // opensubsubcategories() {}

  onRadioClick(id: number) {
    console.log(id);
    this.modalService.dismissAll();
    this.modalService.open(AddItemComponent);
  }
}
