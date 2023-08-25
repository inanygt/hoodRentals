import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeldGeluidComponent } from './beeld-geluid.component';

describe('BeeldGeluidComponent', () => {
  let component: BeeldGeluidComponent;
  let fixture: ComponentFixture<BeeldGeluidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeeldGeluidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeeldGeluidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
