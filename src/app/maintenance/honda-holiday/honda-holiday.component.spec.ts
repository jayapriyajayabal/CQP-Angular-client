import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HondaHolidayComponent } from './honda-holiday.component';

describe('HondaHolidayComponent', () => {
  let component: HondaHolidayComponent;
  let fixture: ComponentFixture<HondaHolidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HondaHolidayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HondaHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
