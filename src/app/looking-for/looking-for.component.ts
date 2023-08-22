import { Component, Input } from '@angular/core';
// import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from '../category.service';
import {
  ModalDismissReasons,
  NgbDatepickerModule,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-looking-for',
  templateUrl: './looking-for.component.html',
  styleUrls: ['./looking-for.component.css'],
})
export class LookingForComponent {
  // modal
  categories: any = [];

  // Modal
  closeResult = '';
  constructor(
    private modalService: NgbModal,
    private CategoryService: CategoryService
  ) {}

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.CategoryService.getCategories().subscribe((data: any) => {
      this.categories = data;
      console.log(data);
    });
  }
}
