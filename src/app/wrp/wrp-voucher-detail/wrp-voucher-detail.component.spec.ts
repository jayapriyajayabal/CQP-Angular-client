import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrpVoucherDetailComponent } from './wrp-voucher-detail.component';

describe('WrpVoucherDetailComponent', () => {
  let component: WrpVoucherDetailComponent;
  let fixture: ComponentFixture<WrpVoucherDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrpVoucherDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrpVoucherDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
