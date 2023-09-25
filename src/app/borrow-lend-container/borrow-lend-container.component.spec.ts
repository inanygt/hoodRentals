import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowLendContainerComponent } from './borrow-lend-container.component';

describe('BorrowLendContainerComponent', () => {
  let component: BorrowLendContainerComponent;
  let fixture: ComponentFixture<BorrowLendContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowLendContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowLendContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
