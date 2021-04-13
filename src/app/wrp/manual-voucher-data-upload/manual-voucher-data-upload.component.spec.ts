import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualVoucherDataUploadComponent } from './manual-voucher-data-upload.component';

describe('ManualVoucherDataUploadComponent', () => {
  let component: ManualVoucherDataUploadComponent;
  let fixture: ComponentFixture<ManualVoucherDataUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualVoucherDataUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualVoucherDataUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
