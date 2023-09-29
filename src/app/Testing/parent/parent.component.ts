import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  selectedRadioBtn: string = 'all';

  receiveRadioBtn(data: string) {
    this.selectedRadioBtn = data;
    console.log(this.selectedRadioBtn);
  }
}
