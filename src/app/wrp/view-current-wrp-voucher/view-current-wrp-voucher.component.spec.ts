import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCurrentWrpVoucherComponent } from './view-current-wrp-voucher.component';

describe('ViewCurrentWrpVoucherComponent', () => {
  let component: ViewCurrentWrpVoucherComponent;
  let fixture: ComponentFixture<ViewCurrentWrpVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCurrentWrpVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCurrentWrpVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
