import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyReportsComponent } from './warranty-reports.component';

describe('WarrantyReportsComponent', () => {
  let component: WarrantyReportsComponent;
  let fixture: ComponentFixture<WarrantyReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarrantyReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantyReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
