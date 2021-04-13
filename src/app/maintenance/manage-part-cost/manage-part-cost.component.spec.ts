import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePartCostComponent } from './manage-part-cost.component';

describe('ManagePartCostComponent', () => {
  let component: ManagePartCostComponent;
  let fixture: ComponentFixture<ManagePartCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePartCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePartCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
