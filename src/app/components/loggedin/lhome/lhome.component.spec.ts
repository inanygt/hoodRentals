import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LhomeComponent } from './lhome.component';

describe('LhomeComponent', () => {
  let component: LhomeComponent;
  let fixture: ComponentFixture<LhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
