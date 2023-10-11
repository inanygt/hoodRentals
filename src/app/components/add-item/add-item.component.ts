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
  selectedToggleBtn: string = '';

  constructor(
    public itemService: ItemService,
    public activeModal: NgbActiveModal,
    private http: HttpClient,
    private fb: FormBuilder,
    private modalService: NgbModal
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

  ngOnInit(): void {}

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
