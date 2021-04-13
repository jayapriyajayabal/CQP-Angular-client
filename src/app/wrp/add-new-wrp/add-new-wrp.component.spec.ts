import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewWrpComponent } from './add-new-wrp.component';

describe('AddNewWrpComponent', () => {
  let component: AddNewWrpComponent;
  let fixture: ComponentFixture<AddNewWrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewWrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewWrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
