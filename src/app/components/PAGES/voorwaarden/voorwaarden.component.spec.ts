import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoorwaardenComponent } from './voorwaarden.component';

describe('VoorwaardenComponent', () => {
  let component: VoorwaardenComponent;
  let fixture: ComponentFixture<VoorwaardenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoorwaardenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoorwaardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
