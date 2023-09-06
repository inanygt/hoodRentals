import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSubCategoryComponent } from './modal-sub-category.component';

describe('ModalSubCategoryComponent', () => {
  let component: ModalSubCategoryComponent;
  let fixture: ComponentFixture<ModalSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSubCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
