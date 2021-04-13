import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHistoricalWrpVoucherComponent } from './view-historical-wrp-voucher.component';

describe('ViewHistoricalWrpVoucherComponent', () => {
  let component: ViewHistoricalWrpVoucherComponent;
  let fixture: ComponentFixture<ViewHistoricalWrpVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHistoricalWrpVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHistoricalWrpVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
