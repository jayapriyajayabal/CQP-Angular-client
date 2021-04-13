import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignMtcComponent } from './assign-mtc.component';

describe('AssignMtcComponent', () => {
  let component: AssignMtcComponent;
  let fixture: ComponentFixture<AssignMtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignMtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignMtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
