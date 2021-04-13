import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartOverrideComponent } from './part-override.component';

describe('PartOverrideComponent', () => {
  let component: PartOverrideComponent;
  let fixture: ComponentFixture<PartOverrideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartOverrideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartOverrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
