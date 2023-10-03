import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstellingComponent } from './instelling.component';

describe('InstellingComponent', () => {
  let component: InstellingComponent;
  let fixture: ComponentFixture<InstellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstellingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
