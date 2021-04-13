import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTPLItemComponent } from './update-tplitem.component';

describe('UpdateTPLItemComponent', () => {
  let component: UpdateTPLItemComponent;
  let fixture: ComponentFixture<UpdateTPLItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTPLItemComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTPLItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
