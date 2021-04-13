import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentVoucherComponent } from './current-voucher.component';

describe('CurrentVoucherComponent', () => {
  let component: CurrentVoucherComponent;
  let fixture: ComponentFixture<CurrentVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
