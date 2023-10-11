import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpSubcategoriesComponent } from './simp-subcategories.component';

describe('SimpSubcategoriesComponent', () => {
  let component: SimpSubcategoriesComponent;
  let fixture: ComponentFixture<SimpSubcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpSubcategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpSubcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
