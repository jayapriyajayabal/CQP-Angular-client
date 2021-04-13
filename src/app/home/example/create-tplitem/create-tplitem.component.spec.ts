import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTPLItemComponent } from './create-tplitem.component';

describe('CreateTPLItemComponent ', () => {
  let component: CreateTPLItemComponent ;
  let fixture: ComponentFixture<CreateTPLItemComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTPLItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTPLItemComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
