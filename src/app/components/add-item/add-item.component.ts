import { Component, ViewChild, ElementRef } from '@angular/core';
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

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent {
  constructor(
    public itemService: ItemService,
    public activeModal: NgbActiveModal
  ) {}

  selected: string = 'huur';
  title: string = '';

  addItemForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  // Reference to the button element using the template reference variable
  @ViewChild('btnLend') myButton: ElementRef;

  checkButtonState() {
    const buttonElement: HTMLButtonElement = this.myButton.nativeElement;
    if (buttonElement.disabled) {
      console.log('Button is disabled.');
    } else {
      console.log('Button is active/enabled.');
    }
  }

  itemData;

  addItem(itemData: any) {
    this.itemService.addItem(itemData).subscribe(
      (response) => {
        console.log('Item added successfully', response);
        // Handle success, reset the form, or perform other actions
      },
      (error) => {
        console.error('Error adding item', error);
        // Handle error
      }
    );
  }
}
