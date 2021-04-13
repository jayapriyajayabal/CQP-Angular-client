import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyWarrantyClaimsComponent } from './daily-warranty-claims.component';

describe('DailyWarrantyClaimsComponent', () => {
  let component: DailyWarrantyClaimsComponent;
  let fixture: ComponentFixture<DailyWarrantyClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyWarrantyClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyWarrantyClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
