import { Component, OnInit } from '@angular/core';

import {
  NgbActiveModal,
  NgbModal,
  NgbNavOutlet,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/services/category.service';
import { SimpSubsubcategoriesComponent } from '../simp-subsubcategories/simp-subsubcategories.component';
import { ShareService } from 'src/app/share.service';

@Component({
  selector: 'app-simp-subcategories',
  templateUrl: './simp-subcategories.component.html',
  styleUrls: ['./simp-subcategories.component.css'],
})
export class SimpSubcategoriesComponent implements OnInit {
  subcategory: any = '';
  constructor(
    public categoryService: CategoryService,
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private shareService: ShareService
  ) {}
  ngOnInit(): void {
    const id = 1;
    this.categoryService.getCategoryData(id).subscribe((res) => {
      this.subcategory = res;
    });
  }

  openSubSubCategories(id: number) {
    this.shareService.setSubCategoryId(id);
    const modalOptions: NgbModalOptions = {
      centered: true,
      size: 'lg',
    };
    this.modalService.open(SimpSubsubcategoriesComponent, modalOptions);
  }
}
