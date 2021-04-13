import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentVoucherDetailComponent } from './current-voucher-detail.component';

describe('CurrentVoucherDetailComponent', () => {
  let component: CurrentVoucherDetailComponent;
  let fixture: ComponentFixture<CurrentVoucherDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentVoucherDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentVoucherDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
