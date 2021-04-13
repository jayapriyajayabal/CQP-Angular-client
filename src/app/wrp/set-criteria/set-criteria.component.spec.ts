import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCriteriaComponent } from './set-criteria.component';

describe('SetCriteriaComponent', () => {
  let component: SetCriteriaComponent;
  let fixture: ComponentFixture<SetCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
