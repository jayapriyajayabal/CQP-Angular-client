import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrpSummaryEditComponent } from './wrp-summary-edit.component';

describe('WrpSummaryEditComponent', () => {
  let component: WrpSummaryEditComponent;
  let fixture: ComponentFixture<WrpSummaryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrpSummaryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrpSummaryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
