import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrpVoucherCreateComponent } from './wrp-voucher-create.component';

describe('WrpVoucherCreateComponent', () => {
  let component: WrpVoucherCreateComponent;
  let fixture: ComponentFixture<WrpVoucherCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrpVoucherCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrpVoucherCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
