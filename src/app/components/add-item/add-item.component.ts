import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import {
  NgbActiveModal,
  NgbModal,
  NgbNavOutlet,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from 'src/app/login/login.component';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SimpCategoriesComponent } from '../simp-categories/simp-categories.component';
import { ShareService } from 'src/app/share.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  private url = 'http://localhost:8000/api';
  addItemForm: FormGroup;
  selected: string = 'huur';
  title: string = '';
  category: any;
  categoriesArray: any[];
  selectedToggleBtn: string = '';
  selectedCategoryId: number = 1;
  selectedSubCategoryId: number = 1;
  selectedSubSubCategoryId: number = 1;
  selectedCategory: string = 'test';

  constructor(
    public itemService: ItemService,
    public activeModal: NgbActiveModal,
    private http: HttpClient,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private shareService: ShareService,
    private categoryService: CategoryService
  ) {
    this.addItemForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      visible: ['', Validators.required],
      borrowable: ['', Validators.required],
      price_per_day: ['', Validators.required],
      price_per_extra_day: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.selectedCategoryId = this.shareService.getCategoryId();
    this.selectedSubCategoryId = this.shareService.getSubCategoryId();
    this.selectedSubSubCategoryId = this.shareService.getSubSubCategoryId();
    console.log(this.selectedCategoryId);
    console.log(this.selectedSubCategoryId);
    console.log(this.selectedSubSubCategoryId);
    this.categoryService
      .getSubSubCategories(this.selectedSubCategoryId)
      .subscribe((res) => {
        this.categoriesArray = res.subsubcategory;
        console.log(this.categoriesArray);
        this.category = this.categoriesArray[this.selectedSubSubCategoryId - 1];
        console.log(this.category);
      });
  }

  onSubmit(formData: any) {
    console.log(formData);

    this.http.post(this.url + '/items', formData).subscribe(
      (res) => {
        console.log('Post Created Succesfully', res);
      },
      (error) => {
        console.log('Error creating post', error);
      }
    );
  }

  onFontStyleChange(event: any) {
    this.selectedToggleBtn = event.value;
  }

  // Modal
  open() {
    const modalOptions: NgbModalOptions = {
      centered: true,
      size: 'lg',
    };
    this.modalService.open(SimpCategoriesComponent, modalOptions);
  }
}
