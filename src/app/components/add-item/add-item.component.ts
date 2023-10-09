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
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  constructor(
    public itemService: ItemService,
    public activeModal: NgbActiveModal,
    private http: HttpClient
  ) {}

  private url = 'http://localhost:8000/api';

  addItemForm: FormGroup;

  ngOnInit(): void {
    this.addItemForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      city: new FormControl('Genk'),
      region: new FormControl('limburg'),
      price_per_day: new FormControl(''),
      price_per_extra_day: new FormControl(''),
      category_id: new FormControl(''),
      subcategory_id: new FormControl(''),
      subsubcategory_id: new FormControl(''),
      user_id: new FormControl(''),
      image: new FormControl(''),
      borrowed: new FormControl(''),
      borrowable: new FormControl(''),
      visible: new FormControl(''),
    });
  }

  selected: string = 'huur';
  title: string = '';

  selectedToggleBtn: string = '';

  onFontStyleChange(event: any) {
    this.selectedToggleBtn = event.value;
  }

  onSubmit() {
    const formData = {
      title: 'test',
      city: 'genk',
      region: 'limburg',
      price_per_day: 5,
      price_per_extra_day: 5,
      category_id: 1,
      subcategory_id: 1,
      subsubcategory_id: 1,
      user_id: 1,
      image: 'test',
      borrowed: 10,
      description: 'testing',
      borrowable: true,
      visible: true,
    };

    this.http.post(this.url + '/items', formData).subscribe(
      (res) => {
        console.log('Post created successfully', res);
      },
      (error) => {
        console.error('Error creating post', error);
      }
    );
  }
}
