import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CqSupplierSetupComponent } from './cq-supplier-setup.component';

describe('CqSupplierSetupComponent', () => {
  let component: CqSupplierSetupComponent;
  let fixture: ComponentFixture<CqSupplierSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CqSupplierSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CqSupplierSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
