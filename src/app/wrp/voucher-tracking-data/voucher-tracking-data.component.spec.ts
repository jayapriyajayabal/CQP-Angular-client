import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherTrackingDataComponent } from './voucher-tracking-data.component';

describe('VoucherTrackingDataComponent', () => {
  let component: VoucherTrackingDataComponent;
  let fixture: ComponentFixture<VoucherTrackingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherTrackingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherTrackingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
