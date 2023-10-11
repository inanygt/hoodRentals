import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpCategoriesComponent } from './simp-categories.component';

describe('SimpCategoriesComponent', () => {
  let component: SimpCategoriesComponent;
  let fixture: ComponentFixture<SimpCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
