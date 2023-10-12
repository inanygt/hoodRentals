import { Component, OnInit } from '@angular/core';

import {
  NgbActiveModal,
  NgbModal,
  NgbNavOutlet,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/services/category.service';
import { AddItemComponent } from '../add-item/add-item.component';
import { ShareService } from 'src/app/share.service';

@Component({
  selector: 'app-simp-subsubcategories',
  templateUrl: './simp-subsubcategories.component.html',
  styleUrls: ['./simp-subsubcategories.component.css'],
})
export class SimpSubsubcategoriesComponent implements OnInit {
  subsubcategory: string = '';
  categories: any = '';
  subsubcategoryId: number;
  selectedCategoryId: number;

  constructor(
    public categoryService: CategoryService,
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private shareService: ShareService
  ) {}
  ngOnInit(): void {
    const id = 1;
    this.categoryService.getSubSubCategories(id).subscribe((res) => {
      this.categories = res;
    });
  }

  // opensubsubcategories() {}

  onRadioClick(id: number) {
    this.shareService.setSubSubCategoryId(id);
    this.modalService.dismissAll();
    this.modalService.open(AddItemComponent);
  }
}
