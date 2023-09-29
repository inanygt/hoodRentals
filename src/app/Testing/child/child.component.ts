import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  selectedRadioBtn: string = 'All';

  @Output() selectionRadioBtn: EventEmitter<string> =
    new EventEmitter<string>();

  onChangeRadioBtn() {
    this.selectionRadioBtn.emit(this.selectedRadioBtn);
    // console.log(this.selectedRadioBtn);
  }
}
