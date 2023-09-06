import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

import {
  NgbActiveModal,
  NgbModal,
  NgbNavOutlet,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-sub-category',
  templateUrl: './modal-sub-category.component.html',
  styleUrls: ['./modal-sub-category.component.css'],
})
export class ModalSubCategoryComponent implements OnInit {
  modalsNumber = 0;
  categories: any = [];

  category: any;

  constructor(
    public activeModal: NgbActiveModal,
    private CategoryService: CategoryService,
    private router: Router
  ) {}

  opensubsub() {
    console.log('subsubcategory');
    this.router.navigate(['/dashboard']);
    this.activeModal.close();
  }

  ngOnInit(): void {
    this.CategoryService.getCategoryData(this.category.id).subscribe(
      (data: any) => {
        console.log(data);
        this.category = data;
      }
    );
  }
}
