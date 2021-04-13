import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTPLItemComponent } from './search-tplitem.component';

describe('SearchTPLItemComponent', () => {
  let component: SearchTPLItemComponent;
  let fixture: ComponentFixture<SearchTPLItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTPLItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTPLItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
