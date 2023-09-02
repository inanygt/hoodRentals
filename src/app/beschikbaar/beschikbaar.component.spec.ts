import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeschikbaarComponent } from './beschikbaar.component';

describe('BeschikbaarComponent', () => {
  let component: BeschikbaarComponent;
  let fixture: ComponentFixture<BeschikbaarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeschikbaarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeschikbaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
