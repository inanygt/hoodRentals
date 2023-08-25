import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedModalComponent } from './stacked-modal.component';

describe('StackedModalComponent', () => {
  let component: StackedModalComponent;
  let fixture: ComponentFixture<StackedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackedModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
