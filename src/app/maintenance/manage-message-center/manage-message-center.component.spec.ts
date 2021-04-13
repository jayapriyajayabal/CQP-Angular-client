import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMessageCenterComponent } from './manage-message-center.component';

describe('ManageMessageCenterComponent', () => {
  let component: ManageMessageCenterComponent;
  let fixture: ComponentFixture<ManageMessageCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageMessageCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMessageCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
