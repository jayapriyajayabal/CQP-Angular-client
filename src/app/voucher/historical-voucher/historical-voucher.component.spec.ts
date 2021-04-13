import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalVoucherComponent } from './historical-voucher.component';

describe('HistoricalVoucherComponent', () => {
  let component: HistoricalVoucherComponent;
  let fixture: ComponentFixture<HistoricalVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricalVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
