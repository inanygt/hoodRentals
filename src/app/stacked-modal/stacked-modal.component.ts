import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NgbActiveModal,
  NgbModal,
  NgbNavOutlet,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-stacked-modal',
  templateUrl: './stacked-modal.component.html',
  styleUrls: ['./stacked-modal.component.css'],
})
export class StackedModalComponent implements OnInit {
  modalsNumber = 0;
  categories: any = [];

  category = [];

  constructor(
    private modalService: NgbModal,
    private CategoryService: CategoryService
  ) {}

  open() {
    const modalOptions: NgbModalOptions = {
      animation: true,
      backdrop: false,
    };

    this.modalService.open(NgbdModal1Content, modalOptions);
  }

  ngOnInit(): void {}
}

@Component({
  imports: [CommonModule],

  standalone: true,
  template: `
    <div class="modal-header">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control font-awesome"
          placeholder="&#xF002; Wat zoek je?"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <input
          type="text"
          class="form-control font-awesome"
          placeholder="&#xf041; Locatie"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-outline-secondary btn-search-modal"
          type="button"
          id="button-addon2"
        >
          Zoeken
        </button>
      </div>
    </div>

    <div class="modal-body">
      <form>
        <!-- Categories in modal  -->
        <div class="row">
          <div *ngFor="let category of categories" class="col-lg-4 mb-3">
            <div class="modal-category" (click)="open(category)">
              <div class="card">
                <div class="row g-0">
                  <div class="col-2 col-md-1 col-lg-2 img-wrap-modal">
                    <img
                      src="{{ category.image }}"
                      class="img-fluid rounded-start img-modal"
                      alt="..."
                    />
                  </div>
                  <div class="col-8 d-flex align-items-center">
                    <div class="card-body">
                      <h3 class="card-custom-title">
                        {{ category.name }}
                      </h3>
                    </div>
                  </div>
                  <div
                    class="col-2 col-arrow-right d-flex align-items-center justify-content-center"
                  >
                    <span class="material-symbols-outlined">
                      arrow_forward_ios
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  `,
})
export class NgbdModal1Content implements OnInit {
  categories: any = [];

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private CategoryService: CategoryService
  ) {}

  open(category: any) {
    const modalOptions: NgbModalOptions = {
      animation: true,
      backdrop: false,
    };
    const modalRef = this.modalService.open(NgbdModal2Content, modalOptions);
    modalRef.componentInstance.category = category;
  }

  ngOnInit(): void {
    this.CategoryService.getCategories().subscribe((data: any) => {
      this.categories = data;
      console.log(data);
    });
  }
}

@Component({
  imports: [CommonModule],

  standalone: true,
  template: `
    <div class="modal-header">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control font-awesome"
          placeholder="&#xF002; Wat zoek je?"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <input
          type="text"
          class="form-control font-awesome"
          placeholder="&#xf041; Locatie"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-outline-secondary btn-search-modal"
          type="button"
          id="button-addon2"
        >
          Zoeken
        </button>
      </div>
    </div>
    <!-- Modal Title -->
    <div class="modal-title d-flex align-items-center ">
      <div class="col">
        <button
          type="button"
          class="btn"
          aria-label="Close"
          (click)="activeModal.dismiss('Cross click')"
        >
          <i class="fa-solid fa-arrow-left"></i>
        </button>
      </div>
      <div class="col d-flex align-items-center justify-content-center">
        {{ category.name }}
      </div>
      <div class="col"></div>
      <!-- Close button -->
    </div>
    <div class="modal-body">
      <form>
        <!-- Categories in modal  -->
        <div class="row">
          <div
            *ngFor="let subcategory of category.subcategories"
            class="col-lg-4 mb-3"
          >
            <div class="modal-category" (click)="open()">
              <div class="card">
                <div class="row g-0">
                  <div class="col-2 col-md-1 col-lg-2 img-wrap-modal">
                    <img
                      src="{{ subcategory.image }}"
                      class="img-fluid rounded-start img-modal"
                      alt="..."
                    />
                  </div>
                  <div class="col-8 d-flex align-items-center">
                    <div class="card-body">
                      <h3 class="card-custom-title">
                        {{ subcategory.name }}
                      </h3>
                    </div>
                  </div>
                  <div
                    class="col-2 col-arrow-right d-flex align-items-center justify-content-center"
                  >
                    <span class="material-symbols-outlined">
                      arrow_forward_ios
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  `,
})
export class NgbdModal2Content implements OnInit {
  category: any;

  constructor(
    public activeModal: NgbActiveModal,
    private CategoryService: CategoryService
  ) {}

  open() {
    console.log('working');
  }

  ngOnInit(): void {
    // Use this.category to load data specific to the selected category
    this.CategoryService.getCategoryData(this.category.id).subscribe(
      (data: any) => {
        // Populate modal content with data
        console.log(data);
        this.category = data;
      }
    );
  }
}
