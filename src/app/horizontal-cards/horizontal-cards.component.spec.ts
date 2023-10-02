import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalCardsComponent } from './horizontal-cards.component';

describe('HorizontalCardsComponent', () => {
  let component: HorizontalCardsComponent;
  let fixture: ComponentFixture<HorizontalCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
