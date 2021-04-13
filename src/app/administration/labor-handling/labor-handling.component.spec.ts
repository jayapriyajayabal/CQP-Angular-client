import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborHandlingComponent } from './labor-handling.component';

describe('LaborHandlingComponent', () => {
  let component: LaborHandlingComponent;
  let fixture: ComponentFixture<LaborHandlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaborHandlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaborHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
