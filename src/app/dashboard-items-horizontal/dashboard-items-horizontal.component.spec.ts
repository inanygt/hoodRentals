import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardItemsHorizontalComponent } from './dashboard-items-horizontal.component';

describe('DashboardItemsHorizontalComponent', () => {
  let component: DashboardItemsHorizontalComponent;
  let fixture: ComponentFixture<DashboardItemsHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardItemsHorizontalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardItemsHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
